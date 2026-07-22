from datetime import datetime, timedelta, timezone
from typing import Dict, Any, Optional

import jwt
from pwdlib import PasswordHash
from pwdlib.hashers.argon2 import Argon2Hasher
from pwdlib.hashers.bcrypt import BcryptHasher

from app.core.config import settings

import base64
import json
import time
from cryptography.hazmat.primitives.ciphers.aead import AESGCM
import json
import secrets

password_hash = PasswordHash(
    (
        Argon2Hasher(),
        BcryptHasher(),
    )
)


ALGORITHM = "HS256"

class SecurityService:
    def __init__(self, aes_key_hex: str, jwt_secret: str, jwt_algorithm: str = "HS256"):
        # Convert hex string key to bytes (32 bytes for AES-256)
        self.aes_key = bytes.fromhex(aes_key_hex)
        self.jwt_secret = jwt_secret
        self.jwt_algorithm = jwt_algorithm
        self.binary_key = bytes.fromhex(aes_key_hex)

    def encrypt_form_data(self, data: dict) -> dict | None:
        """
        Matches CI4 openssl_encrypt('aes-256-gcm') with Base64 encoding.
        """
        try:
            # 1. Convert dictionary to compact JSON string string and encode to bytes
            plaintext_bytes = json.dumps(data, separators=(',', ':')).encode("utf-8")
            
            # 2. Generate 12 random bytes for IV (Matches openssl_random_pseudo_bytes(12))
            iv = secrets.token_bytes(12)
            
            # 3. Encrypt using AES-GCM
            aesgcm = AESGCM(self.binary_key)
            raw_encrypted = aesgcm.encrypt(iv, plaintext_bytes, None)
            
            # 4. Split out the trailing 16-byte authentication tag
            # Python's library combines them, but PHP separates them. We must slice them here.
            ciphertext = raw_encrypted[:-16]
            tag = raw_encrypted[-16:]
            
            # 5. Return everything encoded in Base64 strings to exactly match CI4
            return {
                'result': base64.b64encode(ciphertext).decode('utf-8'),
                'iv': base64.b64encode(iv).decode('utf-8'),
                'tag': base64.b64encode(tag).decode('utf-8')
            }
        except Exception as e:
            import traceback; traceback.print_exc() 
            print(f"Encryption error: {str(e)}")
            return None
        
    def decrypt_form_data(self, payload: Dict[str, Any]) -> Optional[Dict[str, Any]]:
        """
        Decrypts an incoming AES-256-GCM envelope containing 'formData'.
        Expects payload structure: {'formData': {'userData': '...', 'iv': '...', 'tag': '...'}}
        """
        try:
            form_data = payload.get("formData", {})
            user_data_b64 = form_data.get("userData")
            iv_b64 = form_data.get("iv")
            tag_b64 = form_data.get("tag")

            if not all([user_data_b64, iv_b64, tag_b64]):
                return None

            # Decode Base64 components from frontend
            ciphertext_bytes = base64.b64decode(user_data_b64)
            iv_bytes = base64.b64decode(iv_b64)
            tag_bytes = base64.b64decode(tag_b64)

            # In Python's cryptography GCM implementation, the tag must be appended to the ciphertext
            full_cipher_payload = ciphertext_bytes + tag_bytes

            # Initialize AES-GCM and decrypt
            aesgcm = AESGCM(self.aes_key)
            decrypted_bytes = aesgcm.decrypt(iv_bytes, full_cipher_payload, None)
            
            # Convert bytes back to a Python dictionary
            decrypted_str = decrypted_bytes.decode('utf-8')
            return json.loads(decrypted_str)
        except Exception as e:
            print(f"Decryption failed: {e}")
            return None

    def generate_token(self, user_id: int, email: str, expiry_hours: int = 2) -> str:
        """
        Generates a secure, plain JWT string to return to the client.
        """
        payload = {
            "sub": user_id,
            "email": email,
            "iat": int(time.time()),
            "exp": int(time.time()) + (expiry_hours * 3600)
        }
        return jwt.encode(payload, self.jwt_secret, algorithm=self.jwt_algorithm)

    def create_access_token(subject: str | Any, expires_delta: timedelta) -> str:
        expire = datetime.now(timezone.utc) + expires_delta
        to_encode = {"exp": expire, "sub": str(subject)}
        encoded_jwt = jwt.encode(to_encode, settings.SECRET_KEY, algorithm=ALGORITHM)
        return encoded_jwt


    def verify_password(
        plain_password: str, hashed_password: str
    ) -> tuple[bool, str | None]:
        return password_hash.verify_and_update(plain_password, hashed_password)


    def get_password_hash(password: str) -> str:
        return password_hash.hash(password)



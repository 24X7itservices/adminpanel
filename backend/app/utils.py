import logging
from dataclasses import dataclass
from datetime import datetime, timedelta, timezone
from pathlib import Path
from typing import Any

import emails  # type: ignore
import jwt
from jinja2 import Template
from jwt.exceptions import InvalidTokenError

from app.core import security
from app.core.config import settings


import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


@dataclass
class EmailData:
    html_content: str
    subject: str


def render_email_template(*, template_name: str, context: dict[str, Any]) -> str:
    template_str = (
        Path(__file__).parent / "email-templates" / "build" / template_name
    ).read_text()
    html_content = Template(template_str).render(context)
    return html_content


def send_email(
    *,
    email_to: str,
    subject: str = "",
    html_content: str = "",
) -> None:
    assert settings.emails_enabled, "no provided configuration for email variables"
    message = emails.Message(
        subject=subject,
        html=html_content,
        mail_from=(settings.EMAILS_FROM_NAME, settings.EMAILS_FROM_EMAIL),
    )
    smtp_options = {"host": settings.SMTP_HOST, "port": settings.SMTP_PORT}
    if settings.SMTP_TLS:
        smtp_options["tls"] = True
    elif settings.SMTP_SSL:
        smtp_options["ssl"] = True
    if settings.SMTP_USER:
        smtp_options["user"] = settings.SMTP_USER
    if settings.SMTP_PASSWORD:
        smtp_options["password"] = settings.SMTP_PASSWORD
    response = message.send(to=email_to, smtp=smtp_options)
    logger.info(f"send email result: {response}")


def generate_test_email(email_to: str) -> EmailData:
    project_name = settings.PROJECT_NAME
    subject = f"{project_name} - Test email"
    html_content = render_email_template(
        template_name="test_email.html",
        context={"project_name": settings.PROJECT_NAME, "email": email_to},
    )
    return EmailData(html_content=html_content, subject=subject)


def generate_reset_password_email(email_to: str, email: str, token: str) -> EmailData:
    project_name = settings.PROJECT_NAME
    subject = f"{project_name} - Password recovery for user {email}"
    link = f"{settings.FRONTEND_HOST}/reset-password?token={token}"
    html_content = render_email_template(
        template_name="reset_password.html",
        context={
            "project_name": settings.PROJECT_NAME,
            "username": email,
            "email": email_to,
            "valid_hours": settings.EMAIL_RESET_TOKEN_EXPIRE_HOURS,
            "link": link,
        },
    )
    return EmailData(html_content=html_content, subject=subject)


def generate_new_account_email(
    email_to: str, username: str, password: str
) -> EmailData:
    project_name = settings.PROJECT_NAME
    subject = f"{project_name} - New account for user {username}"
    html_content = render_email_template(
        template_name="new_account.html",
        context={
            "project_name": settings.PROJECT_NAME,
            "username": username,
            "password": password,
            "email": email_to,
            "link": settings.FRONTEND_HOST,
        },
    )
    return EmailData(html_content=html_content, subject=subject)


def generate_password_reset_token(email: str) -> str:
    delta = timedelta(hours=settings.EMAIL_RESET_TOKEN_EXPIRE_HOURS)
    now = datetime.now(timezone.utc)
    expires = now + delta
    exp = expires.timestamp()
    encoded_jwt = jwt.encode(
        {"exp": exp, "nbf": now, "sub": email},
        settings.SECRET_KEY,
        algorithm=security.ALGORITHM,
    )
    return encoded_jwt


def verify_password_reset_token(token: str) -> str | None:
    try:
        decoded_token = jwt.decode(
            token, settings.SECRET_KEY, algorithms=[security.ALGORITHM]
        )
        return str(decoded_token["sub"])
    except InvalidTokenError:
        return None


def send_quotation_email(
    *, email_to: str, client_name: str, ref_no: str, grand_total: float, download_link: str
) -> None:
    # 1. Load and render the HTML template
    template_path = Path(settings.EMAIL_TEMPLATES_DIR) / "quotation_email.html"
    template_str = template_path.read_text(encoding="utf-8")
    html_content = Template(template_str).render(
        project_name=settings.PROJECT_NAME,
        client_name=client_name,
        ref_no=ref_no,
        grand_total=grand_total,
        download_link=download_link,
    )
    
    # 2. Build the MIME email message
    message = MIMEMultipart("alternative")
    message["Subject"] = f"Quotation Reference: {ref_no}"
    message["From"] = f"{settings.EMAILS_FROM_NAME} <{settings.EMAILS_FROM_EMAIL}>"
    message["To"] = email_to
    
    part = MIMEText(html_content, "html")
    message.attach(part)
    
    # 3. Connect to SMTP server and send securely
    try:
        if settings.SMTP_SSL:
            server = smtplib.SMTP_SSL(settings.SMTP_HOST, settings.SMTP_PORT)
        else:
            server = smtplib.SMTP(settings.SMTP_HOST, settings.SMTP_PORT)
            if settings.SMTP_TLS:
                server.starttls()
                
        if settings.SMTP_USER and settings.SMTP_PASSWORD:
            server.login(settings.SMTP_USER, settings.SMTP_PASSWORD)
            
        server.sendmail(settings.EMAILS_FROM_EMAIL, email_to, message.as_string())
        server.quit()
    except Exception as e:
        raise ValueError(f"Failed to send email: {str(e)}")


def send_temporary_credentials_email(
    *, email: str, name: str, temp_password: str, login_link: str
) -> None:
    template_path = Path(settings.EMAIL_TEMPLATES_DIR) / "temporary_credentials.html"
    template_str = template_path.read_text(encoding="utf-8")
    
    html_content = Template(template_str).render(
        project_name=settings.PROJECT_NAME,
        name=name,
        email=email,
        temp_password=temp_password,
        login_link=login_link,
    )
    
    message = MIMEMultipart("alternative")
    message["Subject"] = f"Your Temporary Login Credentials - {settings.PROJECT_NAME}"
    message["From"] = f"{settings.EMAILS_FROM_NAME} <{settings.EMAILS_FROM_EMAIL}>"
    message["To"] = email
    
    message.attach(MIMEText(html_content, "html"))
    
    try:
        if settings.SMTP_SSL:
            server = smtplib.SMTP_SSL(settings.SMTP_HOST, settings.SMTP_PORT)
        else:
            server = smtplib.SMTP(settings.SMTP_HOST, settings.SMTP_PORT)
            if settings.SMTP_TLS:
                server.starttls()
                
        if settings.SMTP_USER and settings.SMTP_PASSWORD:
            server.login(settings.SMTP_USER, settings.SMTP_PASSWORD)
            
        server.sendmail(settings.EMAILS_FROM_EMAIL, email, message.as_string())
        server.quit()
    except Exception as e:
        raise ValueError(f"Failed to send email: {str(e)}")

def send_taining_email(
    *, email: str, name: str, subject: str, video_call_link: str, training_title: str, training_id: str
) -> None:
    template_path = Path(settings.EMAIL_TEMPLATES_DIR) / "training_enrollment.html"
    template_str = template_path.read_text(encoding="utf-8")
    
    html_content = Template(template_str).render(
        project_name=settings.PROJECT_NAME,
        name=name,
        training_title=training_title,
        training_id=training_id,
        video_call_link=video_call_link,
        email=email,        
    )
    
    message = MIMEMultipart("alternative")
    message["Subject"] = f"{subject}"
    message["From"] = f"{settings.EMAILS_FROM_NAME} <{settings.EMAILS_FROM_EMAIL}>"
    message["To"] = email
    
    message.attach(MIMEText(html_content, "html"))
    
    try:
        if settings.SMTP_SSL:
            server = smtplib.SMTP_SSL(settings.SMTP_HOST, settings.SMTP_PORT)
        else:
            server = smtplib.SMTP(settings.SMTP_HOST, settings.SMTP_PORT)
            if settings.SMTP_TLS:
                server.starttls()
                
        if settings.SMTP_USER and settings.SMTP_PASSWORD:
            server.login(settings.SMTP_USER, settings.SMTP_PASSWORD)
            
        server.sendmail(settings.EMAILS_FROM_EMAIL, email, message.as_string())
        server.quit()
    except Exception as e:
        raise ValueError(f"Failed to send email: {str(e)}")
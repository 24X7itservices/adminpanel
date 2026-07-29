from pathlib import Path
import emails
from jinja2 import Template
from app.core.config import settings

def render_email_template(*, template_name: str, context: dict[str, any]) -> str:
    template_path = Path(settings.EMAIL_TEMPLATES_DIR) / f"{template_name}.html"
    template_str = template_path.read_text(encoding="utf-8")
    html = Template(template_str).render(context)
    return html

def send_email(
    *,
    email_to: str,
    subject: str = "",
    html_content: str = "",
) -> None:
    message = emails.Message(
        subject=subject,
        html=html_content,
        mail_from=(settings.EMAILS_FROM_NAME, settings.EMAILS_FROM_EMAIL),
    )
    smtp_options = {
        "host": settings.SMTP_HOST,
        "port": settings.SMTP_PORT,
    }
    if settings.SMTP_TLS:
        smtp_options["tls"] = True
    elif settings.SMTP_SSL:
        smtp_options["ssl"] = True
    if settings.SMTP_USER:
        smtp_options["user"] = settings.SMTP_USER
    if settings.SMTP_PASSWORD:
        smtp_options["password"] = settings.SMTP_PASSWORD
    
    response = message.send(to=email_to, smtp=smtp_options)
    if not response.status_code == 250:
        raise ValueError(f"Failed to send email: {response.error}")

def send_quotation_email(
    *, email_to: str, client_name: str, ref_no: str, grand_total: float, download_link: str
) -> None:
    subject = f"Quotation Reference: {ref_no}"
    html_content = render_email_template(
        template_name="quotation_email",
        context={
            "project_name": settings.PROJECT_NAME,
            "client_name": client_name,
            "ref_no": ref_no,
            "grand_total": grand_total,
            "download_link": download_link,
        },
    )
    send_email(
        email_to=email_to,
        subject=subject,
        html_content=html_content,
    )
import {
  ArrowLeft,
  Mail,
  MapPin,
  MessageSquareText,
  PhoneCall,
} from "lucide-react";
import { Link } from "react-router-dom";

const contactItems = [
  {
    icon: Mail,
    label: "ایمیل",
    value: "support@biologyacademy.ir",
    href: "mailto:support@biologyacademy.ir",
  },
  {
    icon: PhoneCall,
    label: "تلفن",
    value: "+98 21 0000 0000",
    href: "tel:+982100000000",
  },
  {
    icon: MapPin,
    label: "موقعیت",
    value: "ایران، تهران",
    href: "#",
  },
];

function Contact() {
  return (
    <main className="simple-page">
      <section className="simple-page-hero">
        <div className="container">
          <div className="simple-page-breadcrumb">
            <Link to="/">خانه</Link>
            <span>/</span>
            <span>تماس با ما</span>
          </div>

          <div className="simple-page-header">
            <div>
              <div className="simple-page-badge">
                <MessageSquareText size={17} />
                تماس با BIOLOGY
              </div>

              <h1>تماس با ما</h1>

              <p>
                اگر سؤال، پیشنهاد یا انتقادی درباره محتوای آموزشی یا طراحی سایت
                دارید، خوشحال می‌شویم با ما در ارتباط باشید.
              </p>
            </div>

            <div className="simple-page-icon">
              <Mail size={70} strokeWidth={1.2} />
            </div>
          </div>
        </div>
      </section>

      <section className="simple-page-section">
        <div className="container">
          <div className="simple-page-heading">
            <span>راه‌های ارتباطی</span>
            <h2>در هر زمان پاسخ‌گوی شما هستیم</h2>
            <p>
              برای دریافت اطلاعات بیشتر، همکاری یا راهنمایی در مسیر یادگیری، از
              یکی از راه‌های زیر استفاده کنید.
            </p>
          </div>

          <div className="simple-page-grid">
            {contactItems.map((item) => {
              const Icon = item.icon;

              return (
                <article className="simple-page-card" key={item.label}>
                  <div className="simple-page-card-icon">
                    <Icon size={25} />
                  </div>

                  <h3>{item.label}</h3>

                  <p>{item.value}</p>

                  <a
                    href={item.href}
                    className="simple-page-card-button"
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  >
                    ارسال پیام
                    <ArrowLeft size={17} />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;

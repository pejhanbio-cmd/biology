import {
  Dna,
  Leaf,
  Mail,
  MessageCircle,
  Send,
} from "lucide-react";
import { Link } from "react-router-dom";

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
                <Mail size={17} />
                ارتباط با BIOLOGY
              </div>

              <h1>تماس با ما</h1>

              <p>
                اگر درباره محتوای آموزشی، پیشنهادهای بهبود یا
                مشکلات سایت نظری داری، خوشحال می‌شویم آن را با ما
                در میان بگذاری.
              </p>
            </div>

            <div className="simple-page-icon">
              <Leaf size={70} strokeWidth={1.2} />
            </div>
          </div>
        </div>
      </section>

      <section className="simple-page-section">
        <div className="container">
          <div className="simple-page-heading">
            <span>ارتباط با ما</span>

            <h2>نظرات و پیشنهادهای شما مهم است</h2>

            <p>
              BIOLOGY با هدف بهتر شدن تجربه یادگیری دانش‌آموزان
              توسعه پیدا می‌کند.
            </p>
          </div>

          <div className="contact-grid">
            <article className="simple-page-card">
              <div className="simple-page-card-icon">
                <MessageCircle size={25} />
              </div>

              <h3>پیشنهاد و بازخورد</h3>

              <p>
                اگر ایده‌ای برای بهتر شدن سایت یا محتوای آموزشی
                داری، می‌توانی آن را با ما در میان بگذاری.
              </p>
            </article>

            <article className="simple-page-card">
              <div className="simple-page-card-icon">
                <Mail size={25} />
              </div>

              <h3>ارتباط آموزشی</h3>

              <p>
                برای موضوعات مرتبط با محتوای آموزشی و ساختار
                دوره‌ها می‌توانی با تیم BIOLOGY در ارتباط باشی.
              </p>
            </article>

            <article className="simple-page-card">
              <div className="simple-page-card-icon">
                <Send size={25} />
              </div>

              <h3>گزارش مشکل</h3>

              <p>
                اگر هنگام استفاده از سایت با مشکلی مواجه شدی،
                اطلاع دادن آن به بهبود نسخه‌های بعدی کمک می‌کند.
              </p>
            </article>
          </div>

          <div className="contact-message-box">
            <div className="contact-message-icon">
              <Dna size={28} />
            </div>

            <div>
              <span>BIOLOGY</span>

              <h2>با هم بهترش می‌کنیم 🌿</h2>

              <p>
                این سایت یک پروژه آموزشی در حال توسعه است و
                پیشنهادهای شما می‌تواند در مسیر رشد آن مؤثر باشد.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;

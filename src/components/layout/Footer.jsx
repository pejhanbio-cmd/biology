```jsx
import {
  BookOpen,
  Dna,
  HeartPulse,
  Home,
  Info,
  Mail,
} from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <span className="footer-logo-mark">
              <Dna size={24} strokeWidth={1.8} />
            </span>

            <span>
              <strong>BIOLOGY</strong>
              <small>Learn • Practice • Master</small>
            </span>
          </Link>

          <p>
            آکادمی آموزشی زیست‌شناسی و سلامت؛
            برای یادگیری مفهومی، تمرین هدفمند و آمادگی بهتر.
          </p>

          <div className="footer-signature">
            <span>🌿</span>
            <span>یادگیری بهتر، آینده بهتر</span>
          </div>
        </div>

        <div className="footer-column">
          <h3>دسترسی سریع</h3>

          <Link to="/">
            <Home size={16} />
            خانه
          </Link>

          <Link to="/courses">
            <BookOpen size={16} />
            دوره‌های آموزشی
          </Link>

          <Link to="/resources">
            <BookOpen size={16} />
            منابع آموزشی
          </Link>

          <Link to="/tests">
            <Dna size={16} />
            آزمون‌ها
          </Link>
        </div>

        <div className="footer-column">
          <h3>دوره‌ها</h3>

          <Link to="/courses/biology-10">
            زیست‌شناسی دهم
          </Link>

          <Link to="/courses/biology-11">
            زیست‌شناسی یازدهم
          </Link>

          <Link to="/courses/biology-12">
            زیست‌شناسی دوازدهم
          </Link>

          <Link to="/courses/health-12">
            <HeartPulse size={16} />
            سلامت و بهداشت دوازدهم
          </Link>
        </div>

        <div className="footer-column">
          <h3>درباره سایت</h3>

          <Link to="/about">
            <Info size={16} />
            درباره BIOLOGY
          </Link>

          <Link to="/contact">
            <Mail size={16} />
            تماس با ما
          </Link>

          <Link to="/privacy">
            حریم خصوصی
          </Link>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>
          © {currentYear} BIOLOGY. تمامی حقوق محفوظ است.
        </p>

        <p className="footer-credit">
          Designed &amp; Developed by Siros Pejhan
        </p>
      </div>
    </footer>
  );
}

export default Footer;
```

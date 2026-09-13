import { BookOpen, Github, Leaf, Mail } from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <span className="footer-logo-icon">
              <Leaf size={20} />
            </span>

            <span>
              <strong>BIOLOGY</strong>
              <small>Learn • Practice • Master</small>
            </span>
          </Link>

          <p>
            آکادمی آموزشی زیست‌شناسی؛ جایی برای یادگیری عمیق‌تر،
            تمرین هدفمند و رسیدن به تسلط.
          </p>
        </div>

        <div className="footer-column">
          <h3>دسترسی سریع</h3>

          <Link to="/">خانه</Link>
          <Link to="/courses">دوره‌ها</Link>
          <Link to="/resources">منابع آموزشی</Link>
          <Link to="/tests">آزمون‌ها</Link>
        </div>

        <div className="footer-column">
          <h3>اطلاعات</h3>

          <Link to="/about">درباره ما</Link>
          <Link to="/contact">تماس با ما</Link>
          <Link to="/privacy">حریم خصوصی</Link>
        </div>

        <div className="footer-column">
          <h3>شروع یادگیری</h3>

          <p className="footer-tip">
            <BookOpen size={17} />
            یادگیری رایگان، تمرین بیشتر و تسلط بهتر.
          </p>

          <p className="footer-tip">
            <Mail size={17} />
            آماده یادگیری یک چیز جدید باش!
          </p>
        </div>
      </div>

      <div className="container footer-bottom">
        <div>
          © {new Date().getFullYear()} BIOLOGY — All rights reserved.
        </div>

        <div className="footer-credit">
          <span>Designed &amp; Developed by Siros Pejhan</span>

          <a
            href="https://github.com/pejhanbio-cmd/biology"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub repository"
            title="GitHub"
          >
            <Github size={17} />
          </a>

          <span className="footer-leaf">🌱</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

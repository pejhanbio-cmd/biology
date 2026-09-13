import { ArrowLeft, BookOpen, Dna, Leaf } from "lucide-react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero-section">
      <div className="container hero-container">
        <div className="hero-content slide-up">
          <div className="hero-badge">
            <span className="hero-badge-dot"></span>
            یادگیری زیست‌شناسی، ساده‌تر و عمیق‌تر
          </div>

          <h1 className="hero-title">
            آکادمی
            <span> زیست‌شناسی</span>
          </h1>

          <p className="hero-subtitle">
            یادگیری، تمرین، تسلط
          </p>

          <p className="hero-description">
            محلی برای یادگیری عمیق‌تر زیست‌شناسی و سلامت و بهداشت،
            همراه با درسنامه، نکات مهم، آزمون و منابع آموزشی.
          </p>

          <div className="hero-actions">
            <Link to="/courses" className="hero-primary-button">
              شروع یادگیری
              <ArrowLeft size={18} />
            </Link>

            <Link to="/courses" className="hero-secondary-button">
              <BookOpen size={18} />
              مشاهده درس‌ها
            </Link>
          </div>

          <div className="hero-trust">
            <div className="hero-trust-item">
              <span className="hero-trust-icon">
                <Dna size={18} />
              </span>
              <span>یادگیری مفهومی</span>
            </div>

            <div className="hero-trust-item">
              <span className="hero-trust-icon">
                <Leaf size={18} />
              </span>
              <span>مطالب هدفمند</span>
            </div>

            <div className="hero-trust-item">
              <span className="hero-trust-icon">✓</span>
              <span>کاملاً رایگان</span>
            </div>
          </div>
        </div>

        <div className="hero-visual slide-up">
          <div className="hero-glow"></div>

          <div className="hero-orbit hero-orbit-one"></div>
          <div className="hero-orbit hero-orbit-two"></div>

          <div className="hero-card hero-card-main">
            <div className="hero-card-top">
              <span className="hero-card-label">BIOLOGY</span>
              <span className="hero-card-leaf">🌿</span>
            </div>

            <div className="hero-dna">
              <Dna size={125} strokeWidth={1.15} />
            </div>

            <div className="hero-card-bottom">
              <span>Learn</span>
              <span>•</span>
              <span>Practice</span>
              <span>•</span>
              <span>Master</span>
            </div>
          </div>

          <div className="hero-floating-card hero-floating-top">
            <Dna size={19} />
            <span>زیست‌شناسی</span>
          </div>

          <div className="hero-floating-card hero-floating-bottom">
            <span className="hero-mini-number">✓</span>
            <span>آماده‌ای شروع کنیم؟</span>
          </div>

          <div className="hero-botanical hero-botanical-one">🌱</div>
          <div className="hero-botanical hero-botanical-two">🍃</div>
          <div className="hero-botanical hero-botanical-three">🍌</div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

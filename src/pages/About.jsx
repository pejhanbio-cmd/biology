import {
  BookOpen,
  CheckCircle2,
  Dna,
  GraduationCap,
  Leaf,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

function About() {
  return (
    <main className="simple-page">
      <section className="simple-page-hero">
        <div className="container">
          <div className="simple-page-breadcrumb">
            <Link to="/">خانه</Link>
            <span>/</span>
            <span>درباره ما</span>
          </div>

          <div className="simple-page-header">
            <div>
              <div className="simple-page-badge">
                <Dna size={17} />
                درباره BIOLOGY
              </div>

              <h1>درباره آکادمی BIOLOGY</h1>

              <p>
                BIOLOGY یک فضای آموزشی رایگان برای یادگیری مفهومی
                زیست‌شناسی و سلامت و بهداشت است؛ با هدف ساده‌تر،
                منظم‌تر و عمیق‌تر کردن مسیر یادگیری دانش‌آموزان.
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
            <span>هدف ما</span>

            <h2>یادگیری مفهومی، تمرین هدفمند، تسلط بیشتر</h2>

            <p>
              ساختار BIOLOGY بر پایه یک مسیر ساده و قابل‌فهم طراحی
              شده است تا دانش‌آموز بتواند از پایه، فصل و گفتار به
              محتوای آموزشی برسد.
            </p>
          </div>

          <div className="simple-page-grid">
            <article className="simple-page-card">
              <div className="simple-page-card-icon">
                <GraduationCap size={25} />
              </div>

              <h3>یادگیری مفهومی</h3>

              <p>
                هدف فقط حفظ کردن مطالب نیست؛ بلکه تلاش می‌کنیم
                مفاهیم زیست‌شناسی را به شکل منظم و قابل‌درک ارائه کنیم.
              </p>
            </article>

            <article className="simple-page-card">
              <div className="simple-page-card-icon">
                <BookOpen size={25} />
              </div>

              <h3>مسیر منظم</h3>

              <p>
                مطالب از پایه به فصل، از فصل به گفتار و از گفتار به
                محتوای آموزشی تقسیم شده‌اند تا مطالعه ساده‌تر شود.
              </p>
            </article>

            <article className="simple-page-card">
              <div className="simple-page-card-icon">
                <CheckCircle2 size={25} />
              </div>

              <h3>تمرین و سنجش</h3>

              <p>
                آزمون‌ها و تمرین‌های آموزشی به دانش‌آموز کمک می‌کنند
                میزان یادگیری خود را بهتر ارزیابی کند.
              </p>
            </article>

            <article className="simple-page-card">
              <div className="simple-page-card-icon">
                <Sparkles size={25} />
              </div>

              <h3>رایگان و دانش‌آموزمحور</h3>

              <p>
                BIOLOGY با تمرکز بر دسترسی آسان و تجربه‌ای ساده و
                کاربردی برای دانش‌آموزان توسعه داده می‌شود.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="simple-page-section">
        <div className="container">
          <div className="about-founder-box">
            <div className="about-founder-icon">
              <Dna size={30} />
            </div>

            <div>
              <span>طراحی و توسعه</span>

              <h2>Siros Pejhan</h2>

              <p>
                این پروژه با هدف ایجاد یک محیط آموزشی مدرن،
                ساده و رایگان برای یادگیری بهتر زیست‌شناسی توسعه داده
                شده است.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;

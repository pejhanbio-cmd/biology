import { ArrowLeft, BookOpen, Leaf, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const values = [
  {
    icon: BookOpen,
    title: "یادگیری مفهومی",
    description: "در BIOLOGY، تمرکز روی فهم عمیق و یادگیری هدفمند است، نه فقط حفظ کردن.",
  },
  {
    icon: Leaf,
    title: "مسیر درست یادگیری",
    description: "مطالب به ترتیب ساختار آموزشی و با توجه به پایه و فصل‌ها ارائه می‌شوند.",
  },
  {
    icon: Sparkles,
    title: "تمرین و مرور",
    description: "بخش‌های آموزشی و منابع، تمرین‌پذیری و مرور بهتر را برای دانش‌آموزان فراهم می‌کنند.",
  },
];

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
                <Sparkles size={17} />
                درباره BIOLOGY
              </div>

              <h1>درباره ما</h1>

              <p>
                BIOLOGY یک آکادمی آموزشی برای یادگیری زیست‌شناسی و سلامت است؛
                با تمرکز بر درک مفهومی، نظم در یادگیری و دسترسی آسان به منابع آموزشی.
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
            <h2>یادگیری بهتر برای آینده‌ای روشن‌تر</h2>
            <p>
              ما می‌خواهیم دانش‌آموزان با یادگیری دقیق، منظم و کاربردی، در درس
              زیست‌شناسی و سلامت اعتماد به نفس بیشتری داشته باشند.
            </p>
          </div>

          <div className="simple-page-grid">
            {values.map((item) => {
              const Icon = item.icon;

              return (
                <article className="simple-page-card" key={item.title}>
                  <div className="simple-page-card-icon">
                    <Icon size={25} />
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                  <Link to="/courses" className="simple-page-card-button">
                    مشاهده دوره‌ها
                    <ArrowLeft size={17} />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;

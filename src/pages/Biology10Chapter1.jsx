import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Dna,
  Leaf,
} from "lucide-react";
import { Link } from "react-router-dom";

const lessons = [
  {
    number: 1,
    title: "گفتار اول: زیست‌شناسی چیست؟",
    description:
      "آشنایی با زیست‌شناسی، ویژگی‌های جانداران و سطوح سازمان‌یافتگی حیات.",
  },
  {
    number: 2,
    title: "گفتار دوم: گسترهٔ حیات",
    description:
      "بررسی گوناگونی جانداران و سطوح مختلف حیات در زیست‌کره.",
  },
  {
    number: 3,
    title: "گفتار سوم: یاخته و بافت در بدن انسان",
    description:
      "آشنایی با یاخته، انواع بافت و سازمان‌یافتگی بدن انسان.",
  },
];

function Biology10Chapter1() {
  return (
    <main className="chapter-page">
      <section className="chapter-page-hero">
        <div className="container">
          <div className="chapter-breadcrumb">
            <Link to="/">خانه</Link>
            <span>/</span>
            <Link to="/courses/biology-10">زیست دهم</Link>
            <span>/</span>
            <span>فصل اول</span>
          </div>

          <div className="chapter-hero-content">
            <div>
              <div className="chapter-badge">
                <Dna size={17} />
                فصل اول
              </div>

              <h1>دنیای زنده</h1>

              <p>
                در این فصل با مفهوم زیست‌شناسی، گسترهٔ حیات و ساختار
                یاخته و بافت در بدن انسان آشنا می‌شویم.
              </p>
            </div>

            <div className="chapter-hero-icon">
              <Leaf size={72} strokeWidth={1.2} />
            </div>
          </div>
        </div>
      </section>

      <section className="lessons-section">
        <div className="container">
          <div className="lessons-heading">
            <span>مسیر یادگیری فصل</span>

            <h2>گفتارهای فصل دنیای زنده</h2>

            <p>
              گفتارها را به ترتیب مطالعه کن و قدم‌به‌قدم پیش برو.
            </p>
          </div>

          <div className="lessons-list">
            {lessons.map((lesson) => (
              <article className="lesson-card" key={lesson.number}>
                <div className="lesson-number">
                  {String(lesson.number).padStart(2, "0")}
                </div>

                <div className="lesson-content">
                  <div className="lesson-top">
                    <span>گفتار {lesson.number}</span>

                    <CheckCircle2 size={18} />
                  </div>

                  <h3>{lesson.title}</h3>

                  <p>{lesson.description}</p>
                </div>

                <Link
                  to={`/courses/biology-10/chapter-1/lesson-${lesson.number}`}
                  className="lesson-button"
                >
                  <BookOpen size={17} />
                  شروع مطالعه
                  <ArrowRight size={16} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Biology10Chapter1;

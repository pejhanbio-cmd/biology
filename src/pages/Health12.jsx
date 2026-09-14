import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  HeartPulse,
  Leaf,
} from "lucide-react";
import { Link } from "react-router-dom";

const chapters = [
  {
    number: 1,
    title: "سلامت",
    description:
      "سلامت چیست؟ و آشنایی با سبک زندگی سالم",
  },
  {
    number: 2,
    title: "تغذیه سالم و بهداشت مواد غذایی",
    description:
      "برنامه غذایی سالم، کنترل وزن و تناسب اندام، بهداشت و ایمنی مواد غذایی",
  },
  {
    number: 3,
    title: "پیشگیری از بیماری‌ها",
    description:
      "بیماری‌های غیرواگیر و بیماری‌های واگیردار",
  },
  {
    number: 4,
    title: "بهداشت در دوران نوجوانی",
    description:
      "بهداشت فردی، بهداشت ازدواج و فرزندآوری، بهداشت روان",
  },
  {
    number: 5,
    title: "پیشگیری از رفتارهای پرخطر",
    description:
      "مصرف دخانیات و الکل، اعتیاد به مواد مخدر و عوارض آن",
  },
  {
    number: 6,
    title: "محیط کار و زندگی سالم",
    description:
      "پیشگیری از اختلالات اسکلتی ـ عضلانی و پیشگیری از حوادث خانگی",
  },
];

function Health12() {
  return (
    <main className="course-page">
      <section className="course-page-hero">
        <div className="container">
          <div className="course-page-breadcrumb">
            <Link to="/">خانه</Link>
            <span>/</span>
            <span>سلامت و بهداشت دوازدهم</span>
          </div>

          <div className="course-page-header">
            <div>
              <div className="course-page-badge">
                <HeartPulse size={17} />
                سلامت و بهداشت پایه دوازدهم
              </div>

              <h1>سلامت و بهداشت دوازدهم</h1>

              <p>
                مسیر یادگیری مفاهیم سلامت، تغذیه سالم، پیشگیری از
                بیماری‌ها و داشتن سبک زندگی سالم.
              </p>
            </div>

            <div className="course-page-icon">
              <Leaf size={70} strokeWidth={1.2} />
            </div>
          </div>

          <div className="course-page-stats">
            <div>
              <strong>6</strong>
              <span>فصل</span>
            </div>

            <div>
              <strong>14</strong>
              <span>گفتار</span>
            </div>

            <div>
              <strong>0%</strong>
              <span>پیشرفت شما</span>
            </div>
          </div>
        </div>
      </section>

      <section className="chapters-section">
        <div className="container">
          <div className="chapters-heading">
            <div>
              <span>محتوای دوره</span>
              <h2>فصل‌های سلامت و بهداشت</h2>
            </div>

            <p>
              فصل موردنظر را انتخاب کنید و یادگیری را شروع کنید.
            </p>
          </div>

          <div className="chapters-grid">
            {chapters.map((chapter) => (
              <article
                className="chapter-card"
                key={chapter.number}
              >
                <div className="chapter-card-top">
                  <div className="chapter-number">
                    {String(chapter.number).padStart(2, "0")}
                  </div>

                  <CheckCircle2
                    className="chapter-check"
                    size={19}
                  />
                </div>

                <h3>{chapter.title}</h3>

                <p>{chapter.description}</p>

                <div className="chapter-card-bottom">
                  <span>
                    <BookOpen size={15} />
                    مشاهده فصل
                  </span>

                  <Link to="/courses">
                    <ArrowLeft size={17} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Health12;

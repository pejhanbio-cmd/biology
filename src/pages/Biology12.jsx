import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  Dna,
  Leaf,
} from "lucide-react";
import { Link } from "react-router-dom";

const chapters = [
  {
    number: 1,
    title: "مولکول‌های اطلاعاتی",
    description:
      "نوکلئیک اسیدها، همانندسازی دنا و پروتئین‌ها",
  },
  {
    number: 2,
    title: "جریان اطلاعات در یاخته",
    description:
      "رونویسی، به سوی پروتئین و تنظیم بیان ژن",
  },
  {
    number: 3,
    title: "انتقال اطلاعات در نسل‌ها",
    description:
      "مفاهیم پایه و انواع صفات",
  },
  {
    number: 4,
    title: "تغییر در اطلاعات وراثتی",
    description:
      "تغییر در مادهٔ وراثتی، جمعیت‌ها و گونه‌ها",
  },
  {
    number: 5,
    title: "از ماده به انرژی",
    description:
      "تأمین انرژی، اکسایش بیشتر و زیستن مستقل از اکسیژن",
  },
  {
    number: 6,
    title: "از انرژی به ماده",
    description:
      "فتوسنتز، واکنش‌های فتوسنتزی و فتوسنتز در شرایط دشوار",
  },
  {
    number: 7,
    title: "فناوری‌های نوین زیستی",
    description:
      "زیست‌فناوری، مهندسی ژنتیک، پروتئین و بافت",
  },
  {
    number: 8,
    title: "رفتارهای جانوران",
    description:
      "اساس رفتار، انتخاب طبیعی، ارتباط و زندگی گروهی",
  },
];

function Biology12() {
  return (
    <main className="course-page">
      <section className="course-page-hero">
        <div className="container">
          <div className="course-page-breadcrumb">
            <Link to="/">خانه</Link>
            <span>/</span>
            <span>زیست‌شناسی دوازدهم</span>
          </div>

          <div className="course-page-header">
            <div>
              <div className="course-page-badge">
                <Dna size={17} />
                زیست‌شناسی پایه دوازدهم
              </div>

              <h1>زیست‌شناسی دوازدهم</h1>

              <p>
                مسیر یادگیری مفهومی زیست‌شناسی دوازدهم؛ از مولکول‌های
                اطلاعاتی و ژنتیک تا انرژی، فتوسنتز و فناوری‌های نوین زیستی.
              </p>
            </div>

            <div className="course-page-icon">
              <Leaf size={70} strokeWidth={1.2} />
            </div>
          </div>

          <div className="course-page-stats">
            <div>
              <strong>8</strong>
              <span>فصل</span>
            </div>

            <div>
              <strong>24</strong>
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
              <h2>فصل‌های زیست دوازدهم</h2>
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

export default Biology12;

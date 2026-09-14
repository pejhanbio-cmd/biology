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
    title: "تنظیم عصبی",
    description:
      "یاخته‌های بافت عصبی و ساختار دستگاه عصبی",
  },
  {
    number: 2,
    title: "حواس",
    description:
      "گیرنده‌های حسی، حواس ویژه و گیرنده‌های حسی جانوران",
  },
  {
    number: 3,
    title: "دستگاه حرکتی",
    description:
      "استخوان‌ها و اسکلت، ماهیچه و حرکت",
  },
  {
    number: 4,
    title: "تنظیم شیمیایی",
    description:
      "ارتباط شیمیایی و غده‌های درون‌ریز",
  },
  {
    number: 5,
    title: "ایمنی",
    description:
      "نخستین، دومین و سومین خط دفاعی بدن",
  },
  {
    number: 6,
    title: "تقسیم یاخته",
    description:
      "فامتن، رِشتمان، کاستمان و تولیدمثل جنسی",
  },
  {
    number: 7,
    title: "تولیدمثل",
    description:
      "دستگاه تولیدمثل در مرد و زن، رشد و نمو جنین و تولیدمثل در جانوران",
  },
  {
    number: 8,
    title: "تولیدمثل نهاندانگان",
    description:
      "تولیدمثل غیرجنسی، تولیدمثل جنسی و رشد گیاه",
  },
  {
    number: 9,
    title: "پاسخ گیاهان به محرک‌ها",
    description:
      "تنظیم‌کننده‌های رشد در گیاهان و پاسخ به محیط",
  },
];

function Biology11() {
  return (
    <main className="course-page">
      <section className="course-page-hero">
        <div className="container">
          <div className="course-page-breadcrumb">
            <Link to="/">خانه</Link>
            <span>/</span>
            <span>زیست‌شناسی یازدهم</span>
          </div>

          <div className="course-page-header">
            <div>
              <div className="course-page-badge">
                <Dna size={17} />
                زیست‌شناسی پایه یازدهم
              </div>

              <h1>زیست‌شناسی یازدهم</h1>

              <p>
                مسیر یادگیری مفهومی زیست‌شناسی یازدهم؛ از تنظیم
                عصبی و حواس تا تولیدمثل و پاسخ گیاهان به محرک‌ها.
              </p>
            </div>

            <div className="course-page-icon">
              <Leaf size={70} strokeWidth={1.2} />
            </div>
          </div>

          <div className="course-page-stats">
            <div>
              <strong>9</strong>
              <span>فصل</span>
            </div>

            <div>
              <strong>25</strong>
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
              <h2>فصل‌های زیست یازدهم</h2>
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

export default Biology11;

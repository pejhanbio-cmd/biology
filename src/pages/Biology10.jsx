import {
  ArrowLeft,
  BookOpen,
  Dna,
  Leaf,
} from "lucide-react";
import { Link } from "react-router-dom";

const chapters = [
  {
    number: 1,
    title: "دنیای زنده",
    description:
      "زیست‌شناسی چیست؟ گسترهٔ حیات، یاخته و بافت در بدن انسان",
    link: "/courses/biology-10/chapter-1",
  },
  {
    number: 2,
    title: "گوارش و جذب مواد",
    description:
      "ساختار و عملکرد لولهٔ گوارش، جذب مواد و تنظیم فعالیت دستگاه گوارش، تنوع گوارش در جانداران",
    link: null,
  },
  {
    number: 3,
    title: "تبادلات گازی",
    description:
      "سازوکار دستگاه تنفس در انسان، تهویهٔ ششی و تنوع تبادلات گازی",
    link: null,
  },
  {
    number: 4,
    title: "گردش مواد در بدن",
    description:
      "قلب، رگ‌ها، خون و تنوع گردش مواد در جانداران",
    link: null,
  },
  {
    number: 5,
    title: "تنظیم اسمزی و دفع مواد زائد",
    description:
      "هم‌ایستایی و کلیه‌ها، تشکیل ادرار و تخلیهٔ آن، تنوع دفع و تنظیم اسمزی",
    link: null,
  },
  {
    number: 6,
    title: "از یاخته تا گیاه",
    description:
      "ویژگی‌های یاختهٔ گیاهی، سامانهٔ بافتی و ساختار گیاهان",
    link: null,
  },
  {
    number: 7,
    title: "جذب و انتقال مواد در گیاهان",
    description:
      "تغذیهٔ گیاهی، جانداران مؤثر در تغذیهٔ گیاهی و انتقال مواد در گیاهان",
    link: null,
  },
];

function Biology10() {
  return (
    <main className="course-page">
      <section className="course-page-hero">
        <div className="container">
          <div className="course-page-breadcrumb">
            <Link to="/">خانه</Link>
            <span>/</span>
            <span>زیست‌شناسی دهم</span>
          </div>

          <div className="course-page-header">
            <div>
              <div className="course-page-badge">
                <Dna size={17} />
                زیست‌شناسی پایه دهم
              </div>

              <h1>زیست‌شناسی دهم</h1>

              <p>
                مسیر یادگیری مفهومی زیست‌شناسی دهم؛ از دنیای زنده و یاخته
                تا ساختار و عملکرد گیاهان.
              </p>
            </div>

            <div className="course-page-icon">
              <Leaf size={70} strokeWidth={1.2} />
            </div>
          </div>

          <div className="course-page-stats">
            <div>
              <strong>7</strong>
              <span>فصل</span>
            </div>

            <div>
              <strong>22</strong>
              <span>گفتار</span>
            </div>
          </div>
        </div>
      </section>

      <section className="chapters-section">
        <div className="container">
          <div className="chapters-heading">
            <div>
              <span>محتوای دوره</span>
              <h2>فصل‌های زیست دهم</h2>
            </div>

            <p>فصل موردنظر را انتخاب کنید و یادگیری را شروع کنید.</p>
          </div>

          <div className="chapters-grid">
            {chapters.map((chapter) => (
              <article className="chapter-card" key={chapter.number}>
                <div className="chapter-card-top">
                  <div className="chapter-number">
                    {String(chapter.number).padStart(2, "0")}
                  </div>
                </div>

                <h3>{chapter.title}</h3>
                <p>{chapter.description}</p>

                <div className="chapter-card-bottom">
                  <span>
                    <BookOpen size={15} />
                    {chapter.link ? "مشاهده فصل" : "به‌زودی"}
                  </span>

                  {chapter.link ? (
                    <Link to={chapter.link} aria-label={`مشاهده ${chapter.title}`}>
                      <ArrowLeft size={17} />
                    </Link>
                  ) : (
                    <span className="chapter-card-placeholder" aria-label="به‌زودی">
                      <ArrowLeft size={17} />
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Biology10;

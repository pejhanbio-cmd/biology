import { Link } from "react-router-dom";
import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  ChevronLeft,
  Dna,
  Layers3,
  Microscope,
} from "lucide-react";

const lessons = [
  {
    number: "۱",
    title: "زیست‌شناسی چیست؟",
    description:
      "زیست‌شناسی نوین، زیست‌شناسی در خدمت انسان و کاربردهای زیست‌شناسی در زندگی انسان.",
    topics: [
      "زیست‌شناسی چیست؟",
      "زیست‌شناسی نوین",
      "زیست‌شناسی در خدمت انسان",
      "تأمین غذای سالم و کافی",
      "حفاظت از بوم‌سازگان",
      "تأمین انرژی",
      "فناوری‌های نوین و اخلاق زیستی",
    ],
  },
  {
    number: "۲",
    title: "گسترهٔ حیات",
    description:
      "ویژگی‌های حیات، سطوح سازمان‌یابی و مولکول‌های زیستی.",
    topics: [
      "ویژگی‌های حیات",
      "سازمان‌یابی و نظم",
      "همایستایی",
      "رشد و نمو",
      "کسب و مصرف انرژی",
      "پاسخ به محرک‌ها",
      "تولیدمثل",
      "یاخته به‌عنوان پایین‌ترین سطح سازمان‌یابی حیات",
      "مولکول‌های زیستی",
      "سطوح سازمان‌یابی حیات",
    ],
  },
  {
    number: "۳",
    title: "یاخته و بافت در بدن انسان",
    description:
      "ساختار یاختهٔ جانوری، اندامک‌ها، غشای یاخته، انتقال مواد و بافت‌های بدن.",
    topics: [
      "یاختهٔ جانوری",
      "هسته",
      "سیتوپلاسم",
      "رناتن",
      "شبکهٔ آندوپلاسمی زبر",
      "شبکهٔ آندوپلاسمی صاف",
      "دستگاه گلژی",
      "راکیزه",
      "ریزکیسه",
      "کافنده‌تن",
      "واکوئول",
      "میانک",
      "غشای یاخته‌ای",
      "پروتئین‌های غشا",
      "انتشار ساده",
      "انتشار تسهیل‌شده",
      "گذرندگی",
      "انتقال فعال",
      "درون‌بری",
      "برون‌رانی",
      "بافت پوششی",
      "بافت پیوندی",
      "بافت ماهیچه‌ای",
      "بافت عصبی",
    ],
  },
];

function Biology10Chapter1() {
  return (
    <main className="chapter-page">
      <section className="chapter-hero">
        <div className="container">
          <div className="chapter-breadcrumb">
            <Link to="/">خانه</Link>
            <ChevronLeft size={15} />
            <Link to="/courses">دوره‌ها</Link>
            <ChevronLeft size={15} />
            <Link to="/courses/biology-10">زیست دهم</Link>
            <ChevronLeft size={15} />
            <span>فصل اول</span>
          </div>

          <div className="chapter-hero-content">
            <div className="chapter-icon">
              <Dna size={42} strokeWidth={1.6} />
            </div>

            <div>
              <span className="chapter-eyebrow">
                زیست‌شناسی دهم
              </span>

              <h1>فصل اول: دنیای زنده</h1>

              <p>
                درسنامه و محتوای آموزشی فصل اول زیست‌شناسی دهم،
                در سه گفتار و با ساختار مناسب مطالعه.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="chapter-content">
        <div className="container">
          <div className="chapter-intro">
            <div className="section-icon">
              <BookOpen size={22} />
            </div>

            <div>
              <h2>ساختار فصل</h2>
              <p>
                فصل «دنیای زنده» در سه گفتار ارائه می‌شود.
                برای ورود به محتوای هر گفتار، آن را انتخاب کنید.
              </p>
            </div>
          </div>

          <div className="lesson-grid">
            {lessons.map((lesson) => (
              <article
                className="lesson-card"
                key={lesson.number}
              >
                <div className="lesson-number">
                  {lesson.number}
                </div>

                <div className="lesson-card-body">
                  <span className="lesson-label">
                    گفتار {lesson.number}
                  </span>

                  <h2>{lesson.title}</h2>

                  <p>{lesson.description}</p>

                  <div className="lesson-topics">
                    {lesson.topics.map((topic) => (
                      <div
                        className="lesson-topic"
                        key={topic}
                      >
                        <CheckCircle2 size={16} />
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>

                  {lesson.number === "۱" ? (
                    <Link
                      to="/courses/biology-10/chapter-1/lesson-1"
                      className="lesson-button"
                    >
                      مطالعهٔ گفتار
                      <ArrowLeft size={17} />
                    </Link>
                  ) : (
                    <button
                      className="lesson-button disabled"
                      type="button"
                      disabled
                    >
                      به‌زودی
                    </button>
                  )}
                </div>
              </article>
            ))}
          </div>

          <section className="chapter-summary">
            <div className="summary-icon">
              <Layers3 size={26} />
            </div>

            <div>
              <h2>مسیر یادگیری فصل</h2>

              <div className="learning-path">
                <div>
                  <span>۱</span>
                  <strong>زیست‌شناسی</strong>
                </div>

                <ChevronLeft size={18} />

                <div>
                  <span>۲</span>
                  <strong>گسترهٔ حیات</strong>
                </div>

                <ChevronLeft size={18} />

                <div>
                  <span>۳</span>
                  <strong>یاخته و بافت</strong>
                </div>
              </div>
            </div>
          </section>

          <section className="chapter-note">
            <Microscope size={22} />

            <div>
              <h3>نکته</h3>
              <p>
                محتوای این فصل بر اساس ساختار آموزشی زیست‌شناسی
                دهم تنظیم شده و در ادامه، درسنامهٔ هر گفتار به‌صورت
                کامل در همین بخش قرار می‌گیرد.
              </p>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}

export default Biology10Chapter1;

import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronLeft,
  Lightbulb,
  Microscope,
  Sprout,
} from "lucide-react";
import FigureNotesChapter1 from "../components/biology10/FigureNotesChapter1";

const sections = [
  {
    title: "زیست‌شناسی چیست؟",
    icon: Microscope,
    content: [
      "زیست‌شناسی، علم مطالعهٔ جانداران است.",
      "زیست‌شناسی از علوم تجربی است و شناخت جانداران و فرایندهای زیستی، زمینهٔ بسیاری از کاربردهای علمی و زندگی انسان را فراهم می‌کند.",
    ],
  },
  {
    title: "زیست‌شناسی نوین",
    icon: BookOpen,
    content: [
      "زیست‌شناسی نوین با پیشرفت فناوری و روش‌های علمی، امکان مطالعهٔ دقیق‌تر جانداران و فرایندهای زیستی را فراهم کرده است.",
      "در زیست‌شناسی نوین، شناخت ساختار و عملکرد جانداران و ارتباط آنها با محیط، اهمیت زیادی دارد.",
    ],
  },
  {
    title: "زیست‌شناسی در خدمت انسان",
    icon: Sprout,
    content: [
      "زیست‌شناسی در بخش‌های مختلف زندگی انسان کاربرد دارد.",
      "تأمین غذای سالم و کافی، حفاظت از بوم‌سازگان، تأمین انرژی، سلامت و درمان بیماری‌ها و فناوری‌های نوین زیستی از زمینه‌های مهم کاربرد زیست‌شناسی هستند.",
    ],
  },
];

const applications = [
  {
    title: "تأمین غذای سالم و کافی",
    text:
      "انسان برای تأمین غذا به‌طور مستقیم یا غیرمستقیم به گیاهان وابسته است. شناخت جانداران و فرایندهای زیستی در تأمین غذای سالم و کافی اهمیت دارد.",
  },
  {
    title: "حفاظت از بوم‌سازگان",
    text:
      "گیاهان و سایر جانداران در میان عوامل زنده و غیرزندهٔ محیط زندگی می‌کنند. حفظ پایداری بوم‌سازگان‌ها به حفظ کیفیت زندگی انسان کمک می‌کند.",
  },
  {
    title: "تأمین انرژی",
    text:
      "بخش زیادی از انرژی مورد استفادهٔ انسان از سوخت‌های فسیلی تأمین می‌شود. زیست‌شناسی در شناخت و توسعهٔ سوخت‌های زیستی نیز کاربرد دارد.",
  },
  {
    title: "سلامت و درمان بیماری‌ها",
    text:
      "شناخت جانداران و فرایندهای زیستی در زمینهٔ سلامت و درمان بیماری‌ها اهمیت دارد.",
  },
  {
    title: "فناوری‌های نوین زیستی",
    text:
      "پیشرفت دانش زیست‌شناسی و فناوری، زمینهٔ استفاده از روش‌های نوین زیستی را فراهم کرده است.",
  },
  {
    title: "اخلاق زیستی",
    text:
      "همراه با پیشرفت فناوری‌های زیستی، توجه به پیامدها و مسائل اخلاقی استفاده از این فناوری‌ها اهمیت دارد.",
  },
];

const keyPoints = [
  "زیست‌شناسی علم مطالعهٔ جانداران است.",
  "زیست‌شناسی از علوم تجربی است.",
  "گیاهان در تأمین غذای انسان نقش مهمی دارند.",
  "جانداران با عوامل زنده و غیرزندهٔ محیط خود در ارتباط‌اند.",
  "حفاظت از بوم‌سازگان‌ها به حفظ کیفیت زندگی کمک می‌کند.",
  "بخش زیادی از انرژی مورد استفادهٔ انسان از سوخت‌های فسیلی تأمین می‌شود.",
  "سوخت‌های زیستی می‌توانند در تأمین انرژی مورد توجه قرار گیرند.",
  "زیست‌شناسی در سلامت، درمان بیماری‌ها و فناوری‌های نوین زیستی کاربرد دارد.",
];

function Biology10Chapter1Lesson1() {
  return (
    <main className="lesson-page">
      <section className="lesson-hero">
        <div className="container">
          <div className="lesson-breadcrumb">
            <Link to="/">خانه</Link>
            <ChevronLeft size={15} />

            <Link to="/courses">دوره‌ها</Link>
            <ChevronLeft size={15} />

            <Link to="/courses/biology-10">زیست دهم</Link>
            <ChevronLeft size={15} />

            <Link to="/courses/biology-10/chapter-1">
              فصل اول
            </Link>
            <ChevronLeft size={15} />

            <span>گفتار اول</span>
          </div>

          <div className="lesson-hero-content">
            <div className="lesson-hero-icon">
              <Microscope size={42} strokeWidth={1.6} />
            </div>

            <div>
              <span className="lesson-eyebrow">
                زیست‌شناسی دهم • فصل اول
              </span>

              <h1>گفتار اول: زیست‌شناسی چیست؟</h1>

              <p>
                زیست‌شناسی، زیست‌شناسی نوین و کاربردهای زیست‌شناسی
                در خدمت انسان.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="lesson-content">
        <div className="container lesson-layout">
          <article className="lesson-main">
            <div className="lesson-intro-card">
              <div className="lesson-intro-icon">
                <BookOpen size={24} />
              </div>

              <div>
                <span>درسنامه</span>

                <h2>زیست‌شناسی چیست؟</h2>

                <p>
                  در این گفتار با زیست‌شناسی، زیست‌شناسی نوین و
                  مهم‌ترین زمینه‌های کاربرد زیست‌شناسی در زندگی
                  انسان آشنا می‌شویم.
                </p>
              </div>
            </div>

            {sections.map((section) => {
              const Icon = section.icon;

              return (
                <section
                  className="lesson-section"
                  key={section.title}
                >
                  <div className="lesson-section-heading">
                    <div className="lesson-section-icon">
                      <Icon size={22} />
                    </div>

                    <h2>{section.title}</h2>
                  </div>

                  <div className="lesson-section-body">
                    {section.content.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              );
            })}

            <section className="lesson-section">
              <div className="lesson-section-heading">
                <div className="lesson-section-icon">
                  <Sprout size={22} />
                </div>

                <h2>زمینه‌های کاربرد زیست‌شناسی</h2>
              </div>

              <div className="application-grid">
                {applications.map((item) => (
                  <article
                    className="application-card"
                    key={item.title}
                  >
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="lesson-highlight">
              <div className="lesson-highlight-icon">
                <Lightbulb size={23} />
              </div>

              <div>
                <h2>نکتهٔ مهم</h2>

                <p>
                  زیست‌شناسی فقط مطالعهٔ ساختار جانداران نیست؛
                  شناخت جانداران و فرایندهای زیستی، در زمینه‌هایی
                  مانند غذا، محیط زیست، انرژی، سلامت و فناوری نیز
                  کاربرد دارد.
                </p>
              </div>
            </section>

            <section className="lesson-summary">
              <div className="lesson-summary-heading">
                <CheckCircle2 size={23} />
                <h2>جمع‌بندی گفتار</h2>
              </div>

              <div className="summary-list">
                {keyPoints.map((point) => (
                  <div className="summary-item" key={point}>
                    <CheckCircle2 size={17} />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </section>

            <div className="lesson-navigation">
              <Link
                to="/courses/biology-10/chapter-1"
                className="lesson-nav-button"
              >
                <ArrowRight size={18} />
                بازگشت به فصل
              </Link>
            </div>
          </article>

          <aside className="lesson-sidebar">
            <div className="lesson-sidebar-card">
              <span className="sidebar-label">
                فصل اول
              </span>

              <h3>دنیای زنده</h3>

              <div className="sidebar-divider" />

              <div className="sidebar-item active">
                <span>۱</span>
                <strong>زیست‌شناسی چیست؟</strong>
              </div>

              <div className="sidebar-item">
                <span>۲</span>
                <strong>گسترهٔ حیات</strong>
              </div>

              <div className="sidebar-item">
                <span>۳</span>
                <strong>یاخته و بافت در بدن انسان</strong>
              </div>
            </div>

            <div className="lesson-sidebar-tip">
              <Lightbulb size={20} />

              <div>
                <strong>روش مطالعه</strong>

                <p>
                  ابتدا متن درسنامه را مطالعه کنید و سپس نکات
                  جمع‌بندی را مرور کنید.
                </p>
              </div>
            </div>
          </aside>
        </div>
        <FigureNotesChapter1 />
      </section>
    </main>
  );
}

export default Biology10Chapter1Lesson1;

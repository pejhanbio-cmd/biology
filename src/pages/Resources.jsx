import {
  ArrowLeft,
  BookOpen,
  FileText,
  GraduationCap,
  Library,
  Leaf,
} from "lucide-react";
import { Link } from "react-router-dom";

const resources = [
  {
    icon: BookOpen,
    title: "درسنامه‌های آموزشی",
    description:
      "مطالب آموزشی زیست‌شناسی را به‌صورت فصل‌به‌فصل و گفتاربه‌گفتار دنبال کن.",
    link: "/courses",
  },
  {
    icon: FileText,
    title: "جزوه و خلاصه‌درس",
    description:
      "خلاصه‌های کاربردی برای مرور سریع مفاهیم مهم و نکات امتحانی.",
    link: "/courses",
  },
  {
    icon: GraduationCap,
    title: "منابع امتحانی",
    description:
      "مجموعه‌ای از مطالب و منابع مناسب برای آمادگی بهتر در امتحانات.",
    link: "/tests",
  },
  {
    icon: Library,
    title: "کتابخانه BIOLOGY",
    description:
      "دسترسی منظم به محتوای آموزشی و منابعی که در مسیر یادگیری به آن‌ها نیاز داری.",
    link: "/courses",
  },
];

function Resources() {
  return (
    <main className="simple-page">
      <section className="simple-page-hero">
        <div className="container">
          <div className="simple-page-breadcrumb">
            <Link to="/">خانه</Link>
            <span>/</span>
            <span>منابع آموزشی</span>
          </div>

          <div className="simple-page-header">
            <div>
              <div className="simple-page-badge">
                <Library size={17} />
                منابع آموزشی BIOLOGY
              </div>

              <h1>منابع آموزشی</h1>

              <p>
                مجموعه‌ای از درسنامه‌ها، جزوه‌ها، خلاصه‌درس‌ها و
                منابع کاربردی برای یادگیری بهتر زیست‌شناسی.
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
            <span>کتابخانه یادگیری</span>
            <h2>منابع موردنیازت را پیدا کن</h2>
            <p>
              مسیر یادگیری خودت را با منابع مناسب کامل‌تر کن.
            </p>
          </div>

          <div className="simple-page-grid">
            {resources.map((resource) => {
              const Icon = resource.icon;

              return (
                <article
                  className="simple-page-card"
                  key={resource.title}
                >
                  <div className="simple-page-card-icon">
                    <Icon size={25} />
                  </div>

                  <h3>{resource.title}</h3>

                  <p>{resource.description}</p>

                  <Link
                    to={resource.link}
                    className="simple-page-card-button"
                  >
                    مشاهده
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

export default Resources;

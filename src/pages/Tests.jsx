import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  ClipboardCheck,
  Clock3,
  Dna,
  GraduationCap,
  Leaf,
} from "lucide-react";
import { Link } from "react-router-dom";

const tests = [
  {
    type: "زیست دهم",
    title: "آزمون‌های زیست‌شناسی دهم",
    description:
      "تمرین و ارزیابی مفاهیم زیست‌شناسی پایه دهم به تفکیک فصل‌ها.",
    icon: GraduationCap,
    link: "/courses/biology-10",
  },
  {
    type: "زیست یازدهم",
    title: "آزمون‌های زیست‌شناسی یازدهم",
    description:
      "سؤال‌های مفهومی برای مرور و سنجش مطالب زیست‌شناسی یازدهم.",
    icon: Dna,
    link: "/courses/biology-11",
  },
  {
    type: "زیست دوازدهم",
    title: "آزمون‌های زیست‌شناسی دوازدهم",
    description:
      "تمرین مباحث مهم زیست دوازدهم و آمادگی بیشتر برای امتحانات.",
    icon: BookOpen,
    link: "/courses/biology-12",
  },
  {
    type: "سلامت و بهداشت",
    title: "آزمون‌های سلامت و بهداشت",
    description:
      "سنجش مفاهیم مهم سلامت و بهداشت دوازدهم به‌صورت هدفمند.",
    icon: CheckCircle2,
    link: "/courses/health-12",
  },
];

function Tests() {
  return (
    <main className="simple-page">
      <section className="simple-page-hero">
        <div className="container">
          <div className="simple-page-breadcrumb">
            <Link to="/">خانه</Link>
            <span>/</span>
            <span>آزمون‌ها</span>
          </div>

          <div className="simple-page-header">
            <div>
              <div className="simple-page-badge">
                <ClipboardCheck size={17} />
                آزمون‌های BIOLOGY
              </div>

              <h1>آزمون‌ها</h1>

              <p>
                با آزمون‌های هدفمند، میزان یادگیری خودت را بسنج
                و برای امتحانات آماده‌تر شو.
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
            <span>سنجش یادگیری</span>
            <h2>آزمون مناسب خودت را انتخاب کن</h2>
            <p>
              در نسخه‌های بعدی، آزمون‌های آنلاین و تعاملی نیز به
              این بخش اضافه خواهند شد.
            </p>
          </div>

          <div className="simple-page-grid">
            {tests.map((test) => {
              const Icon = test.icon;

              return (
                <article
                  className="simple-page-card"
                  key={test.title}
                >
                  <div className="simple-page-card-icon">
                    <Icon size={25} />
                  </div>

                  <span className="test-card-type">
                    {test.type}
                  </span>

                  <h3>{test.title}</h3>

                  <p>{test.description}</p>

                  <div className="test-card-meta">
                    <span>
                      <Clock3 size={15} />
                      به‌زودی
                    </span>

                    <span>
                      <ClipboardCheck size={15} />
                      آزمون آنلاین
                    </span>
                  </div>

                  <Link
                    to={test.link}
                    className="simple-page-card-button"
                  >
                    ورود به مسیر
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

export default Tests;

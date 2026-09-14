```jsx
import {
  ArrowLeft,
  BookOpen,
  Dna,
  GraduationCap,
  HeartPulse,
  Leaf,
} from "lucide-react";
import { Link } from "react-router-dom";

const courses = [
  {
    type: "biology",
    grade: "پایه دهم",
    title: "زیست‌شناسی دهم",
    description:
      "از دنیای زنده و یاخته تا گوارش، تنفس، گردش مواد و ساختار گیاهان.",
    chapters: "7 فصل",
    lessons: "22 گفتار",
    link: "/courses/biology-10",
  },
  {
    type: "biology",
    grade: "پایه یازدهم",
    title: "زیست‌شناسی یازدهم",
    description:
      "تنظیم عصبی، حواس، دستگاه حرکتی، ایمنی، تولیدمثل و پاسخ گیاهان.",
    chapters: "9 فصل",
    lessons: "25 گفتار",
    link: "/courses/biology-11",
  },
  {
    type: "biology",
    grade: "پایه دوازدهم",
    title: "زیست‌شناسی دوازدهم",
    description:
      "مولکول‌های اطلاعاتی، ژنتیک، انرژی، فتوسنتز و فناوری‌های نوین زیستی.",
    chapters: "8 فصل",
    lessons: "24 گفتار",
    link: "/courses/biology-12",
  },
  {
    type: "health",
    grade: "پایه دوازدهم",
    title: "سلامت و بهداشت دوازدهم",
    description:
      "سلامت، تغذیه، پیشگیری از بیماری‌ها و اصول داشتن سبک زندگی سالم.",
    chapters: "6 فصل",
    lessons: "14 گفتار",
    link: "/courses/health-12",
  },
];

function Courses() {
  return (
    <main className="courses-page">
      <section className="courses-page-hero">
        <div className="container">
          <div className="courses-page-breadcrumb">
            <Link to="/">خانه</Link>
            <span>/</span>
            <span>دوره‌های آموزشی</span>
          </div>

          <div className="courses-page-hero-content">
            <div>
              <div className="courses-page-badge">
                <Dna size={17} />
                مسیرهای یادگیری BIOLOGY
              </div>

              <h1>دوره‌های آموزشی</h1>

              <p>
                مسیر مناسب خودت را انتخاب کن و یادگیری زیست‌شناسی
                و سلامت را از پایه تا سطح پیشرفته دنبال کن.
              </p>
            </div>

            <div className="courses-page-hero-icon">
              <Leaf size={78} strokeWidth={1.15} />
            </div>
          </div>
        </div>
      </section>

      <section className="courses-page-section">
        <div className="container">
          <div className="courses-page-heading">
            <span>انتخاب مسیر</span>
            <h2>از کجا شروع کنیم؟</h2>
            <p>
              پایه تحصیلی خودت را انتخاب کن و وارد مسیر یادگیری شو.
            </p>
          </div>

          <div className="courses-page-grid">
            {courses.map((course) => {
              const Icon =
                course.type === "health"
                  ? HeartPulse
                  : GraduationCap;

              return (
                <article
                  className="courses-page-card"
                  key={course.title}
                >
                  <div className="courses-page-card-top">
                    <div className="courses-page-card-icon">
                      <Icon size={28} strokeWidth={1.7} />
                    </div>

                    <span>{course.grade}</span>
                  </div>

                  <h3>{course.title}</h3>

                  <p>{course.description}</p>

                  <div className="courses-page-card-meta">
                    <span>
                      <BookOpen size={15} />
                      {course.chapters}
                    </span>

                    <span>{course.lessons}</span>
                  </div>

                  <Link
                    to={course.link}
                    className="courses-page-card-button"
                  >
                    ورود به دوره
                    <ArrowLeft size={17} />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="courses-page-info">
        <div className="container">
          <div className="courses-info-box">
            <div className="courses-info-icon">
              <BookOpen size={25} />
            </div>

            <div>
              <h2>یادگیری مرحله‌به‌مرحله</h2>

              <p>
                ساختار BIOLOGY به‌صورت پایه ← فصل ← گفتار ← محتوا
                طراحی شده تا بتوانی مطالب را منظم و مفهومی دنبال کنی.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Courses;
```

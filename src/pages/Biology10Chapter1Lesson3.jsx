import { Link } from "react-router-dom";

function Biology10Chapter1Lesson3() {
  return (
    <main className="lesson-page">
      <section className="lesson-hero">
        <div className="container">
          <div className="lesson-breadcrumb">
            <Link to="/">خانه</Link>
            <span>/</span>
            <Link to="/courses/biology-10">زیست‌شناسی دهم</Link>
            <span>/</span>
            <span>فصل 1: درس 3</span>
          </div>

          <h1>درس ۳: در حال آماده‌سازی...</h1>
          <p>این درس به زودی آماده خواهد شد.</p>

          <Link to="/courses/biology-10/chapter-1">
            بازگشت به فصل
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Biology10Chapter1Lesson3;

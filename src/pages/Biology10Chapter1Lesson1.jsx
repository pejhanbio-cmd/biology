import { useEffect, useState } from "react";
import {
  ArrowRight,
  Bookmark,
  CheckCircle2,
  Dna,
  Lightbulb,
} from "lucide-react";
import { Link } from "react-router-dom";

function Biology10Chapter1Lesson1() {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    const savedBookmark = localStorage.getItem(
      "biology-bookmark-biology10-chapter1-lesson1"
    );

    const savedProgress = localStorage.getItem(
      "biology-progress-biology10-chapter1-lesson1"
    );

    setIsBookmarked(savedBookmark === "true");
    setIsCompleted(savedProgress === "true");
  }, []);

  function handleBookmark() {
    const newValue = !isBookmarked;

    setIsBookmarked(newValue);

    localStorage.setItem(
      "biology-bookmark-biology10-chapter1-lesson1",
      newValue ? "true" : "false"
    );
  }

  function handleComplete() {
    const newValue = !isCompleted;

    setIsCompleted(newValue);

    localStorage.setItem(
      "biology-progress-biology10-chapter1-lesson1",
      newValue ? "true" : "false"
    );
  }

  return (
    <main className="lesson-page">
      <section className="lesson-page-hero">
        <div className="container">
          <div className="lesson-breadcrumb">
            <Link to="/">خانه</Link>
            <span>/</span>
            <Link to="/courses/biology-10">زیست دهم</Link>
            <span>/</span>
            <Link to="/courses/biology-10/chapter-1">فصل اول</Link>
            <span>/</span>
            <span>گفتار اول</span>
          </div>

          <div className="lesson-header-content">
            <div>
              <div className="lesson-badge">
                <Dna size={17} />
                فصل اول · گفتار اول
              </div>

              <h1>زیست‌شناسی چیست؟</h1>

              <p>
                آشنایی با زیست‌شناسی، ویژگی‌های جانداران و سطوح
                سازمان‌یافتگی حیات.
              </p>
            </div>

            <button
              type="button"
              className={
                isBookmarked
                  ? "lesson-bookmark is-bookmarked"
                  : "lesson-bookmark"
              }
              onClick={handleBookmark}
            >
              <Bookmark
                size={20}
                fill={isBookmarked ? "currentColor" : "none"}
              />

              {isBookmarked ? "ذخیره شد" : "ذخیره درس"}
            </button>
          </div>
        </div>
      </section>

      <section className="lesson-content-section">
        <div className="container lesson-layout">
          <article className="lesson-article">
            <div className="lesson-introduction">
              <span>شروع یادگیری</span>

              <h2>زیست‌شناسی؛ علم مطالعهٔ حیات</h2>

              <p>
                زیست‌شناسی شاخه‌ای از علوم تجربی است که به مطالعهٔ
                جانداران، ساختار، عملکرد، رشد، تولیدمثل، رفتار و
                ارتباط آن‌ها با محیط می‌پردازد.
              </p>
            </div>

            <div className="lesson-block">
              <h2>ویژگی‌های جانداران</h2>

              <p>
                جانداران مجموعه‌ای از ویژگی‌های مشترک دارند که آن‌ها
                را از مواد غیرزنده متمایز می‌کند. سازمان‌یافتگی،
                رشد و نمو، تولیدمثل، پاسخ به محرک‌ها و انجام فرایندهای
                زیستی از جمله این ویژگی‌ها هستند.
              </p>
            </div>

            <div className="lesson-highlight">
              <Lightbulb size={22} />

              <div>
                <strong>نکته مهم</strong>

                <p>
                  برای شناخت یک جاندار، باید ویژگی‌های مختلف آن را
                  در کنار یکدیگر بررسی کنیم؛ یک ویژگی به‌تنهایی
                  همیشه برای تعریف حیات کافی نیست.
                </p>
              </div>
            </div>

            <div className="lesson-block">
              <h2>سطوح سازمان‌یافتگی حیات</h2>

              <p>
                در زیست‌شناسی، جانداران و اجزای آن‌ها در سطوح مختلفی
                از سازمان‌یافتگی بررسی می‌شوند. این سطوح از اجزای
                کوچک‌تر مانند مولکول‌ها و یاخته‌ها شروع شده و تا
                بافت، اندام، دستگاه و جاندار ادامه پیدا می‌کنند.
              </p>

              <div className="lesson-levels">
                <div>مولکول</div>
                <div>یاخته</div>
                <div>بافت</div>
                <div>اندام</div>
                <div>دستگاه</div>
                <div>جاندار</div>
              </div>
            </div>

            <div className="lesson-summary">
              <div className="lesson-summary-icon">
                <CheckCircle2 size={21} />
              </div>

              <div>
                <strong>جمع‌بندی گفتار</strong>

                <p>
                  زیست‌شناسی علم مطالعهٔ حیات است و برای شناخت
                  جانداران باید ساختار، عملکرد و ارتباط آن‌ها با
                  محیط را در سطوح مختلف سازمان‌یافتگی بررسی کرد.
                </p>
              </div>
            </div>

            <div className="lesson-complete-box">
              <div>
                <strong>
                  {isCompleted
                    ? "این گفتار را کامل کردی 🎉"
                    : "گفتار را مطالعه کردی؟"}
                </strong>

                <p>
                  {isCompleted
                    ? "می‌توانی هر زمان دوباره به این گفتار برگردی."
                    : "پس از مطالعه، آن را به عنوان تکمیل‌شده علامت بزن."}
                </p>
              </div>

              <button
                type="button"
                className={
                  isCompleted
                    ? "lesson-complete-button completed"
                    : "lesson-complete-button"
                }
                onClick={handleComplete}
              >
                <CheckCircle2 size={19} />

                {isCompleted
                  ? "تکمیل شد"
                  : "علامت‌گذاری به عنوان تکمیل‌شده"}
              </button>
            </div>
          </article>

          <aside className="lesson-sidebar">
            <div className="lesson-sidebar-card">
              <span className="lesson-sidebar-label">
                مسیر این فصل
              </span>

              <h3>دنیای زنده</h3>

              <div className="lesson-sidebar-progress">
                <div>
                  <span>پیشرفت فصل</span>
                  <strong>{isCompleted ? "33%" : "0%"}</strong>
                </div>

                <div className="lesson-progress-bar">
                  <span
                    style={{
                      width: isCompleted ? "33%" : "0%",
                    }}
                  ></span>
                </div>
              </div>

              <Link
                to="/courses/biology-10/chapter-1"
                className="lesson-back-button"
              >
                <ArrowRight size={17} />
                بازگشت به فصل
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

export default Biology10Chapter1Lesson1;

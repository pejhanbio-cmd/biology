import { useEffect, useState } from "react";
import {
  ArrowRight,
  Bookmark,
  CheckCircle2,
  Dna,
  Lightbulb,
} from "lucide-react";
import { Link } from "react-router-dom";

function Biology10Chapter1Lesson2() {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    const savedBookmark = localStorage.getItem(
      "biology-bookmark-biology10-chapter1-lesson2"
    );

    const savedProgress = localStorage.getItem(
      "biology-progress-biology10-chapter1-lesson2"
    );

    setIsBookmarked(savedBookmark === "true");
    setIsCompleted(savedProgress === "true");
  }, []);

  function handleBookmark() {
    const newValue = !isBookmarked;

    setIsBookmarked(newValue);

    localStorage.setItem(
      "biology-bookmark-biology10-chapter1-lesson2",
      newValue ? "true" : "false"
    );
  }

  function handleComplete() {
    const newValue = !isCompleted;

    setIsCompleted(newValue);

    localStorage.setItem(
      "biology-progress-biology10-chapter1-lesson2",
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

            <Link to="/courses/biology-10">
              زیست دهم
            </Link>

            <span>/</span>

            <Link to="/courses/biology-10/chapter-1">
              فصل اول
            </Link>

            <span>/</span>

            <span>گفتار دوم</span>
          </div>

          <div className="lesson-header-content">
            <div>
              <div className="lesson-badge">
                <Dna size={17} />
                فصل اول · گفتار دوم
              </div>

              <h1>گسترهٔ حیات</h1>

              <p>
                آشنایی با گوناگونی جانداران و سطوح مختلف حیات
                در زیست‌کره.
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

              <h2>گسترهٔ حیات</h2>

              <p>
                حیات در زمین گستره‌ای بسیار وسیع و متنوع دارد.
                جانداران از نظر شکل، اندازه، ساختار، شیوهٔ زندگی
                و محیط زندگی تفاوت‌های زیادی با یکدیگر دارند.
              </p>
            </div>

            <div className="lesson-block">
              <h2>گوناگونی جانداران</h2>

              <p>
                در زیست‌کره، جانداران گوناگونی وجود دارند که در
                محیط‌های مختلف زندگی می‌کنند. این گوناگونی نتیجهٔ
                تفاوت‌های ساختاری و عملکردی جانداران و سازگاری
                آن‌ها با محیط زندگی است.
              </p>
            </div>

            <div className="lesson-highlight">
              <Lightbulb size={22} />

              <div>
                <strong>نکته مهم</strong>

                <p>
                  تنوع جانداران فقط به تفاوت ظاهری آن‌ها محدود
                  نمی‌شود؛ ساختار، عملکرد و شیوهٔ زندگی نیز می‌تواند
                  بین جانداران مختلف متفاوت باشد.
                </p>
              </div>
            </div>

            <div className="lesson-block">
              <h2>زیست‌کره</h2>

              <p>
                زیست‌کره بخشی از زمین است که جانداران در آن زندگی
                می‌کنند. این بخش شامل قسمت‌هایی از هواکره،
                آب‌کره و سنگ‌کره است که شرایط لازم برای ادامهٔ
                حیات را فراهم می‌کنند.
              </p>
            </div>

            <div className="lesson-block">
              <h2>سازگاری با محیط</h2>

              <p>
                جانداران برای ادامهٔ زندگی در محیط‌های مختلف،
                ویژگی‌هایی دارند که به بقای آن‌ها کمک می‌کند.
                این ویژگی‌ها می‌توانند ساختاری، رفتاری یا
                فیزیولوژیک باشند.
              </p>

              <div className="lesson-levels">
                <div>محیط‌های آبی</div>
                <div>محیط‌های خشکی</div>
                <div>محیط‌های سرد</div>
                <div>محیط‌های گرم</div>
                <div>محیط‌های مرطوب</div>
                <div>محیط‌های خشک</div>
              </div>
            </div>

            <div className="lesson-summary">
              <div className="lesson-summary-icon">
                <CheckCircle2 size={21} />
              </div>

              <div>
                <strong>جمع‌بندی گفتار</strong>

                <p>
                  حیات در زمین تنوع بسیار زیادی دارد و جانداران
                  در محیط‌های گوناگون زندگی می‌کنند. ویژگی‌های
                  ساختاری و عملکردی آن‌ها به سازگاری با محیط و
                  ادامهٔ حیات کمک می‌کند.
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
                  <strong>
                    {isCompleted ? "66%" : "33%"}
                  </strong>
                </div>

                <div className="lesson-progress-bar">
                  <span
                    style={{
                      width: isCompleted ? "66%" : "33%",
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

export default Biology10Chapter1Lesson2;

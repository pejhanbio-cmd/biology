import { Link } from "react-router-dom";
import {
  BookOpen,
  ChevronLeft,
  Dna,
  Microscope,
} from "lucide-react";

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
                محتوای آموزشی کامل فصل اول زیست‌شناسی دهم،
                شامل زیست‌شناسی، گسترهٔ حیات، یاخته و بافت در بدن انسان.
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
              <h2>درسنامه فصل اول</h2>

              <p>
                مطالب فصل اول در یک صفحه و به ترتیب موضوعی ارائه شده‌اند.
              </p>
            </div>
          </div>

          <section className="chapter-section">
            <div className="chapter-section-heading">
              <span>۱</span>

              <div>
                <h2>زیست‌شناسی چیست؟</h2>

                <p>
                  زیست‌شناسی نوین و زیست‌شناسی در خدمت انسان.
                </p>
              </div>
            </div>

            <div className="chapter-topic-list">
              <div>زیست‌شناسی چیست؟</div>
              <div>زیست‌شناسی نوین</div>
              <div>زیست‌شناسی در خدمت انسان</div>
              <div>تأمین غذای سالم و کافی</div>
              <div>حفاظت از بوم‌سازگان</div>
              <div>تأمین انرژی‌های تجدیدپذیر</div>
              <div>سلامت و درمان بیماری‌ها</div>
              <div>فناوری‌های نوین و اخلاق زیستی</div>
            </div>
          </section>

          <section className="chapter-section">
            <div className="chapter-section-heading">
              <span>۲</span>

              <div>
                <h2>گسترهٔ حیات</h2>

                <p>
                  ویژگی‌های حیات، سازمان‌یابی جانداران و مولکول‌های زیستی.
                </p>
              </div>
            </div>

            <div className="chapter-topic-list">
              <div>ویژگی‌های حیات</div>
              <div>سازمان‌یابی جانداران</div>
              <div>همایستایی</div>
              <div>رشد و نمو</div>
              <div>کسب و مصرف انرژی</div>
              <div>پاسخ به محرک‌ها</div>
              <div>تولیدمثل</div>
              <div>یاخته به‌عنوان پایین‌ترین سطح سازمان‌یابی حیات</div>
              <div>مولکول‌های زیستی</div>
              <div>سطوح سازمان‌یابی حیات</div>
            </div>
          </section>

          <section className="chapter-section">
            <div className="chapter-section-heading">
              <span>۳</span>

              <div>
                <h2>یاخته و بافت در بدن انسان</h2>

                <p>
                  ساختار یاختهٔ جانوری، اندامک‌ها، غشای یاخته،
                  انتقال مواد و بافت‌های بدن.
                </p>
              </div>
            </div>

            <div className="chapter-topic-list">
              <div>یاختهٔ جانوری</div>
              <div>هسته</div>
              <div>سیتوپلاسم</div>
              <div>شبکهٔ آندوپلاسمی زبر و صاف</div>
              <div>رناتن</div>
              <div>دستگاه گلژی</div>
              <div>راکیزه</div>
              <div>ریزکیسه</div>
              <div>کافنده‌تن</div>
              <div>واکوئول</div>
              <div>سانتریول</div>
              <div>غشای یاخته‌ای</div>
              <div>پروتئین‌های غشا</div>
              <div>انتشار ساده</div>
              <div>انتشار تسهیل‌شده</div>
              <div>گذرندگی</div>
              <div>انتقال فعال</div>
              <div>درون‌بری</div>
              <div>برون‌رانی</div>
              <div>بافت پوششی</div>
              <div>بافت پیوندی</div>
              <div>بافت ماهیچه‌ای</div>
              <div>بافت عصبی</div>
            </div>
          </section>

          <section className="chapter-note">
            <Microscope size={22} />

            <div>
              <h3>نکات شکل‌ها</h3>

              <p>
                نکات و مطالب مربوط به شکل‌های فصل نیز در ادامهٔ همین
                صفحه قرار می‌گیرند.
              </p>
            </div>
          </section>

        </div>
      </section>
    </main>
  );
}

export default Biology10Chapter1;

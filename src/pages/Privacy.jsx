import {
  CheckCircle2,
  Dna,
  Leaf,
  LockKeyhole,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

function Privacy() {
  return (
    <main className="simple-page">
      <section className="simple-page-hero">
        <div className="container">
          <div className="simple-page-breadcrumb">
            <Link to="/">خانه</Link>
            <span>/</span>
            <span>حریم خصوصی</span>
          </div>

          <div className="simple-page-header">
            <div>
              <div className="simple-page-badge">
                <LockKeyhole size={17} />
                حریم خصوصی BIOLOGY
              </div>

              <h1>حریم خصوصی</h1>

              <p>
                حفظ حریم خصوصی کاربران برای BIOLOGY اهمیت دارد.
                این صفحه توضیح می‌دهد که سایت چگونه با اطلاعات
                کاربران و داده‌های محلی برخورد می‌کند.
              </p>
            </div>

            <div className="simple-page-icon">
              <Leaf size={70} strokeWidth={1.2} />
            </div>
          </div>
        </div>
      </section>

      <section className="privacy-section">
        <div className="container">
          <div className="privacy-content">
            <article className="privacy-card">
              <div className="privacy-card-icon">
                <ShieldCheck size={25} />
              </div>

              <h2>رویکرد ما به حریم خصوصی</h2>

              <p>
                BIOLOGY با هدف ارائه محتوای آموزشی رایگان طراحی شده
                است و در نسخه فعلی، برای استفاده معمول از سایت
                نیازی به ایجاد حساب کاربری یا ارائه اطلاعات شخصی
                نیست.
              </p>
            </article>

            <article className="privacy-card">
              <div className="privacy-card-icon">
                <Dna size={25} />
              </div>

              <h2>اطلاعات ذخیره‌شده در مرورگر</h2>

              <p>
                برخی امکانات محلی سایت ممکن است برای نگهداری
                تنظیمات یا وضعیت یادگیری از حافظه مرورگر
                (LocalStorage) استفاده کنند. این اطلاعات روی
                دستگاه خود کاربر نگهداری می‌شوند.
              </p>
            </article>

            <article className="privacy-card">
              <div className="privacy-card-icon">
                <CheckCircle2 size={25} />
              </div>

              <h2>اطلاعات شخصی</h2>

              <p>
                در نسخه فعلی BIOLOGY فرم ثبت‌نام یا پروفایل کاربری
                ندارد و اطلاعاتی مانند نام، شماره تلفن یا رمز عبور
                برای استفاده از محتوای آموزشی درخواست نمی‌شود.
              </p>
            </article>

            <article className="privacy-card">
              <div className="privacy-card-icon">
                <LockKeyhole size={25} />
              </div>

              <h2>تغییرات این صفحه</h2>

              <p>
                با توسعه امکانات سایت، ممکن است این سیاست حریم
                خصوصی نیز به‌روزرسانی شود. نسخه جدید در همین صفحه
                منتشر خواهد شد.
              </p>
            </article>
          </div>

          <div className="privacy-note">
            <strong>نکته</strong>

            <p>
              هدف این صفحه ارائه یک توضیح شفاف و ساده درباره
              وضعیت حریم خصوصی در نسخه فعلی BIOLOGY است.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Privacy;

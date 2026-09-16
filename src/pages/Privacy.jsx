import {
  BookOpen,
  LockKeyhole,
  ShieldCheck,
  UserRoundCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

const privacyItems = [
  {
    icon: LockKeyhole,
    title: "حفاظت از اطلاعات",
    description:
      "حریم خصوصی کاربران برای ما اهمیت دارد و اطلاعات شخصی بدون دلیل معتبر جمع‌آوری یا منتشر نمی‌شود.",
  },
  {
    icon: UserRoundCheck,
    title: "استفاده از سایت",
    description:
      "مطالب آموزشی سایت برای استفادهٔ شخصی و آموزشی آماده شده‌اند و انتشار آن‌ها باید با رعایت حقوق محتوا انجام شود.",
  },
  {
    icon: BookOpen,
    title: "محتوای آموزشی",
    description:
      "محتوای سایت با هدف کمک به یادگیری بهتر تهیه شده است و جایگزین نظر معلم، کتاب درسی یا منابع رسمی نیست.",
  },
];

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
                <ShieldCheck size={17} />
                حریم خصوصی BIOLOGY
              </div>

              <h1>حریم خصوصی</h1>

              <p>
                در BIOLOGY تلاش می‌کنیم محیطی امن، ساده و قابل اعتماد برای
                یادگیری زیست‌شناسی و سلامت فراهم کنیم.
              </p>
            </div>

            <div className="simple-page-icon">
              <ShieldCheck size={70} strokeWidth={1.2} />
            </div>
          </div>
        </div>
      </section>

      <section className="simple-page-section">
        <div className="container">
          <div className="simple-page-heading">
            <span>اطلاعات کاربران</span>

            <h2>قوانین استفاده و حفظ حریم خصوصی</h2>

            <p>
              این صفحه توضیح می‌دهد اطلاعات کاربران چگونه استفاده می‌شود و
              کاربران هنگام استفاده از محتوای سایت چه نکاتی را باید رعایت کنند.
            </p>
          </div>

          <div className="simple-page-grid">
            {privacyItems.map((item) => {
              const Icon = item.icon;

              return (
                <article className="simple-page-card" key={item.title}>
                  <div );
            })}
          </div>

          <div className="privacy-content">
            <h2>نکات مهم</h2>

            <p>
              استفاده از سایت به معنای پذیرش قوانین و شرایط استفاده از آن است.
              کاربران باید از انتشار، کپی‌برداری تجاری یا استفادهٔ نادرست از
              مطالب آموزشی خودداری کنند.
            </p>

            <p>
              ممکن است برای بهبود عملکرد سایت، اطلاعات فنی عمومی مانند نوع
              مرورگر، دستگاه و صفحات بازدیدشده ثبت شود. این اطلاعات برای
              بهبود تجربهٔ کاربری استفاده می‌شود.
            </p>

            <p>
              اگر دربارهٔ حریم خصوصی یا نحوهٔ استفاده از مطالب سؤالی دارید،
              می‌توانید از طریق صفحهٔ تماس با ما ارتباط برقرار کنید.
            </p>

            <Link to="/contact" className="simple-page-card-button">
              تماس با ما
              <span aria-hidden="true">←</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Privacy;

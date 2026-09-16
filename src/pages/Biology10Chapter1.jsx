import { Link } from "react-router-dom";
import { BookOpen, ChevronLeft, Dna, Microscope } from "lucide-react";

import FigureNotesChapter1 from "../components/biology10/FigureNotesChapter1.jsx";
import CellLesson from "../components/biology10/CellLesson.jsx";

const sections = [
  {
    title: "زیست‌شناسی چیست؟",
    text: "زیست‌شناسی، شاخه‌ای از علوم تجربی است که به بررسی علمی جانداران و فرایندهای زیستی می‌پردازد.",
    items: [
      "زیست‌شناسی نوین",
      "زیست‌شناسی در خدمت انسان",
      "تأمین غذای سالم و کافی",
      "حفاظت از بوم‌سازگان",
      "تأمین انرژی‌های تجدیدپذیر",
      "سلامت و درمان بیماری‌ها",
      "فناوری‌های نوین و اخلاق زیستی",
    ],
  },
  {
    title: "گسترهٔ حیات",
    text: "جانداران ویژگی‌هایی مانند سازمان‌یابی، همایستایی، رشد و نمو، کسب انرژی، پاسخ به محرک‌ها و تولیدمثل دارند.",
    items: [
      "همایستایی",
      "رشد و نمو",
      "کسب و مصرف انرژی",
      "پاسخ به محرک‌ها",
      "تولیدمثل",
      "یاخته؛ پایین‌ترین سطح سازمان‌یابی حیات",
      "مولکول‌های زیستی",
      "سطوح سازمان‌یابی حیات",
    ],
  },
  {
    title: "یاخته و بافت در بدن انسان",
    text: "یاخته واحد ساختاری و عملکردی بدن است و ساختارهایی مانند هسته، رناتن، شبکهٔ آندوپلاسمی، گلژی و راکیزه دارد.",
    items: [
      "هسته و سیتوپلاسم",
      "شبکهٔ آندوپلاسمی زبر و صاف",
      "رناتن و دستگاه گلژی",
      "راکیزه، ریزکیسه و کافنده‌تن",
      "واکوئول و سانتریول",
      "غشای یاخته‌ای و پروتئین‌های غشا",
      "انتشار ساده و تسهیل‌شده",
      "گذرندگی و انتقال فعال",
      "درون‌بری و برون‌رانی",
      "بافت پوششی، پیوندی، ماهیچه‌ای و عصبی",
    ],
  },
];

function Biology10Chapter1() {
  return (
    <main className="chapter-page">
      <section className="chapter-hero">
        <div className="container">
          <div className="chapter-breadcrumb">
            <Link to="/">خانه</Link>
            <ChevronLeft size={15} />

            <Link to="/courses/biology-10">زیست دهم</Link>
            <ChevronLeft size={15} />

            <span>فصل اول</span>
          </div>

          <div className="chapter-hero-content">
            <div className="chapter-icon">
              <Dna size={42} />
            </div>

            <div>
              <span className="chapter-eyebrow">زیست‌شناسی دهم</span>

              <h1>فصل اول: دنیای زنده</h1>

              <p>درسنامه و نکات مهم فصل اول زیست‌شناسی دهم</p>
            </div>
          </div>
        </div>
      </section>

      <section className="chapter-content">
        <div className="container">
          <div className="chapter-intro">
            <BookOpen size={22} />

            <div>
              <h2>درسنامهٔ فصل</h2>

              <p>
                همهٔ مطالب فصل اول، شامل زیست‌شناسی، گسترهٔ حیات، یاخته و
                اندامک‌های یاخته‌ای، در این صفحه ارائه شده‌اند.
              </p>
            </div>
          </div>

          {sections.map((section, index) => (
            <section className="chapter-section" key={section.title}>
              <div className="chapter-section-heading">
                <span>{index + 1}</span>

                <div>
                  <h2>{section.title}</h2>
                  <p>{section.text}</p>
                </div>
              </div>

              <div className="chapter-topic-list">
                {section.items.map((item) => (
                  <div key={item}>{item}</div>
                ))}
              </div>
            </section>
          ))}

          <section className="chapter-section">
            <div className="chapter-section-heading">
              <span>۴</span>

              <div>
                <h2>یاخته و اندامک‌های یاخته‌ای</h2>

                <p>مطالب کامل مربوط به ساختار یاختهٔ جانوری و اندامک‌های آن</p>
              </div>
            </div>

            <CellLesson />
          </section>

          <section className="chapter-section">
            <div className="chapter-section-heading">
              <span>۵</span>

              <div>
                <h2>نکات شکل‌ها</h2>
                <p>شکل‌های مهم فصل اول</p>
              </div>
            </div>

            <FigureNotesChapter1 />
          </section>

          <section className="chapter-note">
            <Microscope size={22} />

            <div>
              <h3>جمع‌بندی فصل</h3>

              <p>
                زیست‌شناسی، گسترهٔ حیات، یاخته، اندامک‌های یاخته‌ای، غشا،
                انتقال مواد و بافت‌های بدن از محورهای اصلی این فصل هستند.
              </p>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}

export default Biology10Chapter1;

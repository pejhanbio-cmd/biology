import { Link } from "react-router-dom";
import { BookOpen, ChevronLeft, Dna, Microscope } from "lucide-react";
import FigureNotesChapter1 from "../components/biology10/FigureNotesChapter1";
import CellLesson from "../components/biology10/CellLesson";
import MembraneLesson from "../components/biology10/MembraneLesson";
import TransportLesson from "../components/biology10/TransportLesson";
import TissueLesson from "../components/biology10/TissueLesson";

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
              <p>مطالب فصل به‌صورت یکپارچه ارائه شده‌اند.</p>
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
              <span>۳</span>
              <div>
                <h2>یاخته و بافت در بدن انسان</h2>
                <p>یاختهٔ جانوری، اندامک‌ها، غشا، انتقال مواد و بافت‌ها</p>
              </div>
            </div>

            <CellLesson />
          </section>

          <section className="chapter-section">
            <div className="chapter-section-heading">
              <span>۴</span>
              <div>
                <h2>غشای یاخته‌ای و پروتئین‌های غشا</h2>
                <p>ساختار غشا، فسفولیپیدها، کلسترول و پروتئین‌ها</p>
              </div>
            </div>

            <MembraneLesson />
          </section>

          <section className="chapter-section">
            <div className="chapter-section-heading">
              <span>۵</span>
              <div>
                <h2>ورود و خروج مواد از یاخته</h2>
                <p>انتشار ساده، تسهیل‌شده، اسمز، انتقال فعال، درون‌بری و برون‌رانی</p>
              </div>
            </div>

            <TransportLesson />
          </section>

          <section className="chapter-section">
            <div className="chapter-section-heading">
              <span>۶</span>
              <div>
                <h2>بافت‌های بدن انسان</h2>
                <p>بافت پوششی، پیوندی، عصبی و ویژگی‌های حیات</p>
              </div>
            </div>

            <TissueLesson />
          </section>

          <section className="chapter-section">
            <div className="chapter-section-heading">
              <span>۷</span>
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
              <h3>جمع‌بندی</h3>
              <p>
                زیست‌شناسی، گسترهٔ حیات، یاخته، غشا، انتقال مواد
                و بافت‌های بدن از محورهای اصلی این فصل هستند.
              </p>
            </div>
          </section>

        </div>
      </section>
    </main>
  );
}

export default Biology10Chapter1;

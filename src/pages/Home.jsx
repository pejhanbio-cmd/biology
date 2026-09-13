import { BookOpen, FileQuestion, GraduationCap, Layers3 } from "lucide-react";

import Hero from "../components/home/Hero";
import CourseCard from "../components/home/CourseCard";
import SectionTitle from "../components/home/SectionTitle";

function Home() {
  return (
    <main>
      <Hero />

      <section className="courses-section">
        <div className="container">
          <SectionTitle
            eyebrow="مسیرهای یادگیری"
            title="دوره مناسب خودت را انتخاب کن"
            description="از پایه دهم تا دوازدهم، مطالب را مرحله‌به‌مرحله و مفهومی یاد بگیر."
          />

          <div className="courses-grid">
            <CourseCard
              title="زیست‌شناسی دهم"
              description="شروع مسیر یادگیری زیست‌شناسی با مفاهیم پایه و بدن انسان."
              chapters="7"
              lessons="22"
              progress={0}
              link="/courses/biology-10"
            />

            <CourseCard
              title="زیست‌شناسی یازدهم"
              description="یادگیری تنظیم عصبی، حواس، ایمنی، تولیدمثل و پاسخ گیاهان."
              chapters="9"
              lessons="25"
              progress={0}
              link="/courses/biology-11"
            />

            <CourseCard
              title="زیست‌شناسی دوازدهم"
              description="از مولکول‌های اطلاعاتی و ژنتیک تا انرژی و فناوری‌های نوین."
              chapters="8"
              lessons="24"
              progress={0}
              link="/courses/biology-12"
            />

            <CourseCard
              type="health"
              title="سلامت و بهداشت دوازدهم"
              description="یادگیری اصول سلامت، تغذیه، پیشگیری از بیماری‌ها و سبک زندگی سالم."
              chapters="6"
              lessons="14"
              progress={0}
              link="/courses/health-12"
            />
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container">
          <div className="stats-box">
            <div className="stats-intro">
              <span className="stats-eyebrow">BIOLOGY ACADEMY</span>

              <h2>یادگیریت را از همین امروز شروع کن</h2>

              <p>
                همه‌چیز برای یک مسیر یادگیری منظم، مفهومی و هدفمند آماده است.
              </p>
            </div>

            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-icon">
                  <GraduationCap size={22} />
                </div>

                <div>
                  <strong>4</strong>
                  <span>مسیر یادگیری</span>
                </div>
              </div>

              <div className="stat-item">
                <div className="stat-icon">
                  <Layers3 size={22} />
                </div>

                <div>
                  <strong>30</strong>
                  <span>فصل آموزشی</span>
                </div>
              </div>

              <div className="stat-item">
                <div className="stat-icon">
                  <BookOpen size={22} />
                </div>

                <div>
                  <strong>85+</strong>
                  <span>گفتار و درس</span>
                </div>
              </div>

              <div className="stat-item">
                <div className="stat-icon">
                  <FileQuestion size={22} />
                </div>

                <div>
                  <strong>100+</strong>
                  <span>سؤال تمرینی</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;

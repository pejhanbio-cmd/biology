import { ArrowLeft, BookOpen, GraduationCap, HeartPulse } from "lucide-react";
import { Link } from "react-router-dom";

const icons = {
  biology: GraduationCap,
  health: HeartPulse,
};

function CourseCard({
  type = "biology",
  title,
  description,
  chapters,
  lessons,
  progress = 0,
  link = "/courses",
}) {
  const Icon = icons[type] || BookOpen;

  return (
    <article className="course-card">
      <div className="course-card-top">
        <div className="course-card-icon">
          <Icon size={25} strokeWidth={1.8} />
        </div>

        <span className="course-card-label">
          {type === "health" ? "سلامت" : "زیست‌شناسی"}
        </span>
      </div>

      <h3 className="course-card-title">{title}</h3>

      <p className="course-card-description">{description}</p>

      <div className="course-card-meta">
        <span>
          <BookOpen size={15} />
          {chapters} فصل
        </span>

        <span>
          {lessons} گفتار
        </span>
      </div>

      <div className="course-card-progress">
        <div className="course-card-progress-info">
          <span>پیشرفت یادگیری</span>
          <strong>{progress}%</strong>
        </div>

        <div className="course-card-progress-bar">
          <span style={{ width: `${progress}%` }}></span>
        </div>
      </div>

      <Link to={link} className="course-card-button">
        ورود به دوره
        <ArrowLeft size={17} />
      </Link>
    </article>
  );
}

export default CourseCard;

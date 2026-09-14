import { BookOpen, Home, Info, Mail } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const navItems = [
    {
      to: "/",
      label: "خانه",
      icon: Home,
    },
    {
      to: "/courses",
      label: "دوره‌ها",
      icon: BookOpen,
    },
    {
      to: "/resources",
      label: "منابع",
      icon: BookOpen,
    },
    {
      to: "/tests",
      label: "آزمون‌ها",
      icon: BookOpen,
    },
    {
      to: "/about",
      label: "درباره ما",
      icon: Info,
    },
    {
      to: "/contact",
      label: "تماس با ما",
      icon: Mail,
    },
  ];

  return (
    <header className="site-header">
      <div className="container navbar">
        <Link to="/" className="brand">
          <span className="brand-mark">
            🧬
          </span>

          <span className="brand-text">
            <strong>BIOLOGY</strong>
            <small>Learn • Practice • Master</small>
          </span>
        </Link>

        <nav className="desktop-nav">
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                <Icon size={17} />
                <span>{item.label}</span>
              </NavLink>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;

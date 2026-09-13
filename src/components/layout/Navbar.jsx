import { useEffect, useState } from "react";
import {
  BookOpen,
  Home,
  Info,
  Mail,
  Menu,
  Moon,
  Search,
  Sun,
  X,
} from "lucide-react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("biology-theme");

    if (savedTheme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
      setDarkMode(true);
    } else {
      document.documentElement.removeAttribute("data-theme");
      setDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = darkMode ? "light" : "dark";

    if (nextTheme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("biology-theme", "dark");
      setDarkMode(true);
    } else {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("biology-theme", "light");
      setDarkMode(false);
    }
  };

  const closeMobileMenu = () => {
    setMobileMenu(false);
  };

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
      icon: Search,
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
        <Link
          to="/"
          className="brand"
          aria-label="BIOLOGY - صفحه اصلی"
          onClick={closeMobileMenu}
        >
          <span className="brand-mark">
            <span className="brand-dna">🧬</span>
          </span>

          <span className="brand-text">
            <strong>BIOLOGY</strong>
            <small>Learn • Practice • Master</small>
          </span>
        </Link>

        <nav className={`desktop-nav ${mobileMenu ? "mobile-open" : ""}`}>
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
                onClick={closeMobileMenu}
              >
                <Icon size={17} strokeWidth={1.9} />
                <span>{item.label}</span>
              </NavLink>
            );
          })}
        </nav>

        <div className="navbar-actions">
          <button
            type="button"
            className="icon-button"
            onClick={toggleTheme}
            aria-label={darkMode ? "حالت روشن" : "حالت تاریک"}
            title={darkMode ? "حالت روشن" : "حالت تاریک"}
          >
            {darkMode ? (
              <Sun size={20} strokeWidth={1.9} />
            ) : (
              <Moon size={20} strokeWidth={1.9} />
            )}
          </button>

          <button
            type="button"
            className="mobile-menu-button"
            onClick={() => setMobileMenu((current) => !current)}
            aria-label={mobileMenu ? "بستن منو" : "باز کردن منو"}
          >
            {mobileMenu ? (
              <X size={23} strokeWidth={1.9} />
            ) : (
              <Menu size={23} strokeWidth={1.9} />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;

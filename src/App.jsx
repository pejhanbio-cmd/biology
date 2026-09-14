import { Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Resources from "./pages/Resources";
import Tests from "./pages/Tests";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";

import Biology10 from "./pages/Biology10";
import Biology11 from "./pages/Biology11";
import Biology12 from "./pages/Biology12";
import Health12 from "./pages/Health12";

import Biology10Chapter1 from "./pages/Biology10Chapter1";
import Biology10Chapter1Lesson1 from "./pages/Biology10Chapter1Lesson1";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/courses" element={<Courses />} />

        <Route path="/resources" element={<Resources />} />

        <Route path="/tests" element={<Tests />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/privacy" element={<Privacy />} />

        <Route
          path="/courses/biology-10"
          element={<Biology10 />}
        />

        <Route
          path="/courses/biology-10/chapter-1"
          element={<Biology10Chapter1 />}
        />

        <Route
          path="/courses/biology-10/chapter-1/lesson-1"
          element={<Biology10Chapter1Lesson1 />}
        />

        <Route
          path="/courses/biology-11"
          element={<Biology11 />}
        />

        <Route
          path="/courses/biology-12"
          element={<Biology12 />}
        />

        <Route
          path="/courses/health-12"
          element={<Health12 />}
        />
      </Routes>

      <Footer />
    </>
  );
}

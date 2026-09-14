```jsx
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Biology10 from "./pages/Biology10";
import Biology11 from "./pages/Biology11";
import Biology12 from "./pages/Biology12";
import Health12 from "./pages/Health12";

import Biology10Chapter1 from "./pages/Biology10Chapter1";
import Biology10Chapter1Lesson1 from "./pages/Biology10Chapter1Lesson1";

function PlaceholderPage({ title }) {
  return (
    <main className="container placeholder-page">
      <h1>{title}</h1>

      <p>
        این بخش به‌زودی تکمیل می‌شود.
      </p>
    </main>
  );
}

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/courses" element={<Courses />} />

        <Route path="/courses/biology-10" element={<Biology10 />} />

        <Route path="/courses/biology-11" element={<Biology11 />} />

        <Route path="/courses/biology-12" element={<Biology12 />} />

        <Route path="/courses/health-12" element={<Health12 />} />

        <Route
          path="/courses/biology-10/chapter-1"
          element={<Biology10Chapter1 />}
        />

        <Route
          path="/courses/biology-10/chapter-1/lesson-1"
          element={<Biology10Chapter1Lesson1 />}
        />

        <Route
          path="/resources"
          element={<PlaceholderPage title="منابع آموزشی" />}
        />

        <Route
          path="/tests"
          element={<PlaceholderPage title="آزمون‌ها" />}
        />

        <Route
          path="/about"
          element={<PlaceholderPage title="درباره BIOLOGY" />}
        />

        <Route
          path="/contact"
          element={<PlaceholderPage title="تماس با ما" />}
        />

        <Route
          path="/privacy"
          element={<PlaceholderPage title="حریم خصوصی" />}
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
```

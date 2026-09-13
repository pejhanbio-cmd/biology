import { Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Biology10 from "./pages/Biology10";
import Biology10Chapter1 from "./pages/Biology10Chapter1";
function PlaceholderPage({ title }) {
  return (
    <>
      <Navbar />

      <main
        className="container"
        style={{
          minHeight: "70vh",
          paddingTop: "70px",
          paddingBottom: "70px",
        }}
      >
        <h1>{title}</h1>

        <p
          style={{
            marginTop: "16px",
            color: "var(--color-text-muted)",
          }}
        >
          این بخش به‌زودی تکمیل می‌شود.
        </p>
      </main>

      <Footer />
    </>
  );
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
<Route
  path="/courses/biology-10/chapter-1"
  element={<Biology10Chapter1 />}
/>
        <Route
  path="/courses/biology-10"
  element={<Biology10 />}
/>
        <Route
          path="/courses"
          element={<PlaceholderPage title="دوره‌های آموزشی" />}
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

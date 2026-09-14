import { Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";

import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Biology10 from "./pages/Biology10";
import Biology11 from "./pages/Biology11";
import Biology12 from "./pages/Biology12";
import Health12 from "./pages/Health12";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/courses" element={<Courses />} />

        <Route
          path="/courses/biology-10"
          element={<Biology10 />}
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
    </>
  );
}

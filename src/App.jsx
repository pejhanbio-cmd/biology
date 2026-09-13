import { Routes, Route } from "react-router-dom";

function Home() {
  return (
    <main>
      <h1>BIOLOGY</h1>
      <p>Learn • Practice • Master</p>
      <p>آکادمی زیست‌شناسی</p>
    </main>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;

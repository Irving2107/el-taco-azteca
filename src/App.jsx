import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import ThankYou from "./pages/ThankYou";
import Policy from "./pages/Policy";
import Terms from "./pages/Terms";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  const [language, setLanguage] = useState("en");

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>

        <Route
          path="/"
          element={
            <Home
              language={language}
              setLanguage={setLanguage}
            />
          }
        />

        <Route
          path="/thank-you"
          element={
            <ThankYou
              language={language}
              setLanguage={setLanguage}
            />
          }
        />

        <Route
          path="/policy"
          element={
            <Policy
              language={language}
              setLanguage={setLanguage}
            />
          }
        />

        <Route
          path="/terms"
          element={
            <Terms
              language={language}
              setLanguage={setLanguage}
            />
          }
        />

      </Routes>
    </BrowserRouter>
  );
}
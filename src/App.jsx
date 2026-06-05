import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ThankYou from "./pages/ThankYou";
import Policy from "./pages/Policy";
import Terms from "./pages/Terms";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/thank-you"
          element={<ThankYou />}
        />

        <Route
          path="/policy"
          element={<Policy />}
        />

        <Route
          path="/terms"
          element={<Terms />}
        />

      </Routes>
    </BrowserRouter>
  );
}
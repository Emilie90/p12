import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./pages/home";
import Dashboard from "./pages/dashboard.tsx";
import Error from "./pages/error.tsx";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/accueil" element={<Home />} />
      <Route path="/user/:id/home" element={<Dashboard />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </BrowserRouter>
);

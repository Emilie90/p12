import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./pages/home";
import Error from "./pages/error.tsx";
import { createRoot } from "react-dom/client";
import Index from "./pages/index.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/accueil" element={<Home />} />
      <Route path="/user/:id" element={<Index />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </BrowserRouter>
);

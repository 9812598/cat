import React from "react";
import { createRoot } from "react-dom/client";
import "normalize.css";
import "./index.css";

import Header from "./components/Header";

const container = document.getElementById("app-root")!;
const root = createRoot(container);
root.render(
  <>
    <div className="container">
      <Header />
      <main className="main">Russian Ruble</main>
    </div>
  </>
);

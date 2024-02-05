import React from "react";
import { createRoot } from "react-dom/client";
import "normalize.css";
import "./index.css";

import Select from "./components/Select";

const container = document.getElementById("app-root")!;
const root = createRoot(container);
root.render(
  <>
    <div className="container">
      <header className="header">
        <section className="menuWrapper">
          <div className="title">
            <div className="titleName">CAT</div>
            <p className="titleDescription">currencies academic terms</p>
          </div>
          <div className="currencySelect">
            <Select />
          </div>
        </section>
        <div className="cat">
          <img src="kitten.png" alt="Kitten" />
        </div>
      </header>
      <main className="main">Russian Ruble</main>
    </div>
  </>
);

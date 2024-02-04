import React from "react";
import { createRoot } from "react-dom/client";
import "normalize.css";
import "./index.css";

const container = document.getElementById("app-root")!;
const root = createRoot(container);
root.render(
  <>
    <div className="container">
      <header className="header">
        <div className="menuWrapper">
          <div className="title">
            <div className="titleName">CAT</div>
            <div className="titleDescription">currencies academic terms</div>
          </div>
          <div className="currencySelect">
            <select name="currency" id="currency"></select>
          </div>
        </div>
        <div className="cat">
          <img src="kitten.png" alt="Kitten" />
        </div>
      </header>
      <main className="main">Russian Ruble</main>
    </div>
  </>
);

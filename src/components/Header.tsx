import React from "react";
import Select from "./Select";

export default function Header() {
  return (
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
  );
}

import React from "react";
import "./currencies.css";
import CurrencyCard from "../CurrencyCard/CurrencyCard";

export default function Currencies({ currencies }) {
  return (
    <>
      <div className="container-dolars">
        <ul className="ul-list">
          {currencies.map((currency, i) => (
            <li key={i}>
              <CurrencyCard currency={currency} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

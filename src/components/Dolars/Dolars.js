import React from "react";
import "./dolars.css";
import DolarCard from "../DolarCard/DolarCard";

export default function Dolars({ dolars }) {
  return (
    <div className="container-dolars">
      <ul className="ul-list">
        {dolars.map((dolar, i) => (
          <li key={i}>
            <DolarCard dolar={dolar} />
          </li>
        ))}
      </ul>
    </div>
  );
}

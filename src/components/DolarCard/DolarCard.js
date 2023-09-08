import React from "react";
import "./dolarCard.css";
export default function DolarCard({ dolar }) {
  return (
    <>
      <div className="container">
        <a className="link" href="https://www.lanacion.com.ar/dolar-hoy">
          <h2 className="title">{dolar.nombre}</h2>
        </a>
        <p className="prices">
          {dolar.casa !== "solidario" && (
            <>
              <span className="subtitle">Compra</span>
              <strong className="price">{`$${dolar.compra.toFixed(2)}`}</strong>
            </>
          )}
          <span className="subtitle">Venta</span>
          <strong className="price">{`$${dolar.venta.toFixed(2)}`}</strong>
        </p>
      </div>
    </>
  );
}

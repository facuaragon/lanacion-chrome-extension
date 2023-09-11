import React from "react";
import "./currencyCard.css";
export default function CurrencyCard({ currency }) {
  return (
    <>
      <div className="container">
        <a className="link" href="https://www.lanacion.com.ar/dolar-hoy">
          <h2 className="title">{currency.nombre}</h2>
        </a>
        <p className="prices">
          {currency.compra && (
            <>
              <span className="subtitle">Compra</span>
              <strong className="price">{`$${currency.compra}`}</strong>
            </>
          )}
          <span className="subtitle">Venta</span>
          <strong className="price">{`$${currency.venta}`}</strong>
        </p>
        <div className="update">
          <p className="update-day">{currency.fecha}</p>
        </div>
      </div>
    </>
  );
}

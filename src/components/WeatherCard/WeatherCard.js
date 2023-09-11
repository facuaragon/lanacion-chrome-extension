import React from "react";
import "./weatherCard.css";
import WeatherIcons from "../WeatherIcons/WeatherIcons";
import LN_Loader from "../LN_Loader/LN_Loader";

export default function WeatherCard({ weather }) {
  return (
    <>
      <div className="container-weather">
        {weather && (
          <>
            <div className="icon">
              <WeatherIcons
                height={90}
                width={90}
                fill={"#000"}
                name={weather.icon}
              />
            </div>
            <div className="temperature">
              {weather.temp}
              <span className="unit">°C</span>
            </div>
            <div className="extra-data">
              <div className="precipprob">{`Prob. de Precipitaciones: ${weather.precipprob}%`}</div>
              <div className="humidity">{`Humedad: ${Math.round(
                weather.humidity
              )}%`}</div>
              <div className="wind">{`Viento: ${weather.windspeed} km/h`}</div>
              <div className="uvindex">{`Índice UV: ${weather.uvindex}`}</div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

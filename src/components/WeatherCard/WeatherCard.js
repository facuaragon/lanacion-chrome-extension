import React from "react";
import "./weatherCard.css";
import WeatherIcons from "../WeatherIcons/WeatherIcons";
import LN_Loader from "../LN_Loader/LN_Loader";

export default function WeatherCard({ weather, globalweather }) {
  console.log("current weather", weather);
  console.log("extended weather", globalweather);
  return (
    <>
      <div className="container-weather">
        {weather && (
          <>
            <div className="icon">
              <WeatherIcons
                height={62.29}
                width={62.29}
                fill={"#000"}
                name={weather.icon}
              />
            </div>
            <div className="weather-title">CLIMA</div>

            <div className="group">
              <div className="temp">{`${weather.temp}°`}</div>
              <div className="weatherLine">
                <div className="currentCondition">
                  {weather.conditions === "Claro"
                    ? "Despejado"
                    : weather.conditions}
                </div>
                <div className="separator">•</div>
                <div className="temperatures">
                  MAX: {globalweather.days[0].tempmax}° MIN:{" "}
                  {globalweather.days[0].tempmin}°
                </div>
              </div>
              <div className="location">Buenos Aires</div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

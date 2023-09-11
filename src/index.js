import React from "react";
import ReactDOM from "react-dom/client";
import { useEffect, useState } from "react";
import MostVisited from "./components/MostVisited/MostVisited";
import SearchBar from "./components/SearchBar/SearchBar";
import WeatherCard from "./components/WeatherCard/WeatherCard";
import Currencies from "./components/Currencies/Currencies";
import LN_Loader from "./components/LN_Loader/LN_Loader";

const API_WEATHER = process.env.API_KEY;
function App() {
  const [weather, setWeather] = useState();
  const [currencies, setCurrencies] = useState();
  useEffect(() => {
    // Fetch weather
    navigator.geolocation.getCurrentPosition(
      function (position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;

        if (latitude && longitude) {
          const fetchWeather = () => {
            fetch(
              `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${latitude},${longitude}?key=${API_WEATHER}&unitGroup=metric`
            )
              .then((response) => {
                if (response.ok) {
                  return response.json();
                } else {
                  throw new Error("Error");
                }
              })
              .then((data) => {
                setWeather(data.currentConditions);
              })
              .catch((error) => {
                console.log(error);
              });
          };
          fetchWeather();
        }
      },
      function (error) {
        console.error("Error getting location: " + error.message);
      }
    );
    // Fetch Currencies La Nación
    const fetchCurrencies = () => {
      fetch(
        "https://especialess3.lanacion.com.ar/monitor-economia-real/data/cotizaciones_dolar_dia.json"
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Error");
          }
        })
        .then((data) => {
          console.log("lanacion: ", data);
          const lanacion = [];
          const keys = Object.keys(data);
          const results = keys.map((key) => {
            const dolar = data[key];
            lanacion.push(dolar);
          });
          setCurrencies(lanacion);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchCurrencies();
  }, []);
  return (
    <>
      {weather ? <WeatherCard weather={weather} /> : <LN_Loader />}
      <SearchBar />
      <MostVisited />
      {currencies ? <Currencies currencies={currencies} /> : <LN_Loader />}
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("react-target"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

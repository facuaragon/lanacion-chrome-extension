import React from "react";
import ReactDOM from "react-dom/client";
import { useEffect, useState } from "react";
import MostVisited from "./components/MostVisited/MostVisited";
import SearchBar from "./components/SearchBar/SearchBar";
import WeatherCard from "./components/WeatherCard/WeatherCard";
import Currencies from "./components/Currencies/Currencies";
import LN_Loader from "./components/LN_Loader/LN_Loader";
import Nav from "./components/Nav/Nav";

const API_WEATHER = process.env.API_KEY;
function App() {
  const [weather, setWeather] = useState();
  const [globalweather, setGlobalWeather] = useState();
  const [currencies, setCurrencies] = useState();
  useEffect(() => {
    // Fetch weather
    navigator.geolocation.getCurrentPosition(
      function (position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        console.log("latitude: ", latitude);
        console.log("longitude: ", longitude);

        if (latitude && longitude) {
          const fetchWeather = () => {
            fetch(
              `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${latitude},${longitude}?key=${API_WEATHER}&unitGroup=metric&lang=es`
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
                setGlobalWeather(data);
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
          // console.log("lanacion: ", data);
          // const lanacion = [];
          // const keys = Object.keys(data);
          // const results = keys.map((key) => {
          //   const dolar = data[key];
          //   lanacion.push(dolar);
          // });
          setCurrencies(data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchCurrencies();
  }, []);
  return (
    <>
      <Nav />
      <SearchBar />
      <MostVisited />
      {weather ? (
        <WeatherCard weather={weather} globalweather={globalweather} />
      ) : (
        <LN_Loader />
      )}
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

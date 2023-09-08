import React from "react";
import ReactDOM from "react-dom/client";
import { useEffect, useState } from "react";
import MostVisited from "./components/MostVisited/MostVisited";
import SearchBar from "./components/SearchBar/SearchBar";
import WeatherCard from "./components/WeatherCard/WeatherCard";
import Dolars from "./components/Dolars/Dolars";

const API_WEATHER = process.env.API_KEY;
function App() {
  const [weather, setWeather] = useState();
  const [dolars, setDolars] = useState();
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
                console.log("weather: ", data);
                setWeather(data.currentConditions);
                console.log("weather: ", data.currentConditions);
              })
              .catch((error) => {
                console.log(error);
              });
          };
          fetchWeather();

          //fetch dolar
          const fetchDolar = () => {
            fetch("https://dolarapi.com/v1/dolares/")
              .then((response) => {
                if (response.ok) {
                  return response.json();
                } else {
                  throw new Error("Error");
                }
              })
              .then((data) => {
                setDolars(data);
                console.log("dolar: ", data);
              })
              .catch((error) => {
                console.log(error);
              });
          };
          fetchDolar();
        }
      },
      function (error) {
        // Handle errors or if the user denies permission
        console.error("Error getting location: " + error.message);
      }
    );
  }, []);
  return (
    <>
      <WeatherCard weather={weather} />
      <SearchBar />
      <MostVisited />
      {dolars && <Dolars dolars={dolars} />}
    </>
  );
}

// render(<App />, document.getElementById("react-target"));

const root = ReactDOM.createRoot(document.getElementById("react-target"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

import React from "react";
import { useState, useEffect } from "react";
import "./style.css";
const Temprature = () => {
  const [cityname, setcityname] = useState("brisbane");
  const [tempInfo, settempInfo] = useState({});
  const [weathertypeicon, setweathertypeicon] = useState("");

  const getWeatherinfo = async () => {
    try {
      let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=metric&APPID=35f3526354aa467824b3c20536732b26`;
      const res = await fetch(url);
      const data = await res.json();
      // console.log(data);
      const { temp, pressure, humidity, temp_min, temp_max } = data.main;
      const { main: weather_type } = data.weather[0];
      const { speed } = data.wind;
      const { country } = data.sys;
      const { name } = data;
      var { sunset } = data.sys;
      const sunset_time = new Date(sunset * 1000);
      sunset = sunset_time.toLocaleTimeString();
      console.log(sunset_time.toLocaleTimeString());
      // sunrise = new Date(sunrise.toLocaleString);

      const weatherInfo = {
        temp,
        pressure,
        humidity,
        weather_type,
        speed,
        country,
        sunset,
        name,
        temp_min,
        temp_max,
      };
      settempInfo(weatherInfo);
    } catch (error) {
      console.log(error);
    }
  };
  // useEffect(() => {
  //   if (weather_type) {
  //     switch (weather_type) {
  //       case "Clouds":
  //         setweathertypeicon("wi-day-cloudy");
  //         break;
  //       case "Rain":
  //         setweathertypeicon("wi-day-rain");
  //         break;
  //       case "Haze":
  //         setweathertypeicon("wi-day-haze");
  //         break;
  //       case "Snow":
  //         setweathertypeicon("wi-day-snow");
  //         break;
  //       case "Smoke":
  //         setweathertypeicon("wi-smoke");
  //         break;
  //       default:
  //         setweathertypeicon("wi-day-sunny");
  //         break;
  //     }
  //     console.log(weathertypeicon);
  //   }
  // }, [weather_type]);

  useEffect(() => {
    getWeatherinfo();
  });

  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="Your City Name"
            autoFocus
            value={cityname}
            onChange={(e) => setcityname(e.target.value)}
            className="searchTerm"
          />
          <button
            className="searchButton"
            type="button"
            onClick={getWeatherinfo}
          >
            Search
          </button>
        </div>
      </div>
      <div className="widget">
        <div className="weatherIcon">
          <i className="wi-day-sunny"></i>
        </div>

        <div className="weatherInfo">
          <div className="temperature">
            <span> {tempInfo.temp} &deg;</span>
          </div>

          <div className="description">
            <div className="weatherCondition">{tempInfo.weather_type}</div>
            <div className="place">
              {tempInfo.name} - {tempInfo.country}
            </div>
          </div>
        </div>
        {/* <div className="date">
          {new Date().toLocaleString("en-GB", {
            dateStyle: "medium",
            timeStyle: "short",
            hour12: true,
          })}
        </div> */}
        <div className="date">
          {new Date().toLocaleString("en-GB", { hour12: true })}
        </div>

        {/* 4 COLUMN SECTON */}
        <div className="extra-temp">
          {/* SUNSET TIME */}
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className="wi wi-sunset"></i>
              </p>
              <p className="extra-info-leftside">
                {tempInfo.sunset} <br />
                Sun Set
              </p>
            </div>
            {/* HUMIDITY % */}
            <div className="two-sided-section">
              <p>
                <i className="wi wi-humidity"></i>
              </p>
              <p className="extra-info-leftside">
                {tempInfo.humidity} %
                <br />
                Humidity
              </p>
            </div>
          </div>

          <div className="weather-extra-info">
            {/*MIN MAX TEMPEATURE*/}
            <div className="two-sided-section">
              <p>
                <i className="wi wi-celsius"></i>
              </p>
              <p className="extra-info-leftside">
                Min - {tempInfo.temp_min} <br />
                Max - {tempInfo.temp_max}
              </p>
            </div>
            {/* WIND SPEED */}
            <div className="two-sided-section">
              <p>
                <i className="wi wi-strong-wind"></i>
              </p>
              <p className="extra-info-leftside">
                {tempInfo.speed} m/s
                <br />
                WIND SPEED
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Temprature;

import React from "react";
import { useState, useEffect } from "react";
import "./style.css";
const Temprature = () => {
  const [cityname, setcityname] = useState("brisbane");

  const getWeatherinfo = async () => {
    try {
      let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityname}&APPID=35f3526354aa467824b3c20536732b26`;
      const res = await fetch(url);
      const data = res.json;
      console.log(data);
    } catch (error) {
      console.log(error);
    }
    console.log(cityname);
  };

  useEffect(() => {
    getWeatherinfo();
  }, []);

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
          <i className="wi wi-day-sunny"></i>
        </div>

        <div className="weatherInfo">
          <div className="temperature">
            <span>26&deg;</span>
          </div>

          <div className="description">
            <div className="weatherCondition">Sunny</div>
            <div className="place">Pune, India</div>
          </div>
        </div>
        <div className="date">{new Date().toLocaleString()}</div>

        {/* 4 COLUMN SECTON */}
        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className="wi wi-sunset"></i>
              </p>
              <p className="extra-info-leftside">
                20:20 PM <br />
                Sun Rise
              </p>
            </div>
            <div className="two-sided-section">
              <p>
                <i className="wi wi-humidity"></i>
              </p>
              <p className="extra-info-leftside">
                80% <br />
                Humidity
              </p>
            </div>
          </div>

          <div className="weather-extra-info">
            <div className="two-sided-section">
              <p>
                <i className="wi wi-rain"></i>
              </p>
              <p className="extra-info-leftside">
                80% <br />
                Humidity
              </p>
            </div>
            <div className="two-sided-section">
              <p>
                <i className="wi wi-strong-wind"></i>
              </p>
              <p className="extra-info-leftside">
                80% <br />
                Humidity
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Temprature;

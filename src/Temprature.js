import { useState, useEffect } from "react";
import "./style.css";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
require("dotenv").config();

const Temprature = () => {
  const api = process.env.REACT_APP_WAPI;
  const [tempInfo, settempInfo] = useState({});
  const [weathertypeicon, setweathertypeicon] = useState("");
  const [searchValue, setsearchValue] = useState("");

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latlng = await getLatLng(results[0]);
    // console.log(latlng);
    // console.log(latlng.lat, latlng.lng);
    // // setlong(latlng.lng);
    // // setlat(latlng.lat);

    getWeatherinfo(latlng.lat, latlng.lng);
  };

  const getWeatherinfo = async (proplat, proplong) => {
    try {
      let url = `http://api.openweathermap.org/data/2.5/weather?lat=${proplat}&lon=${proplong}&units=metric&appid=${api}`;

      // console.log(proplat, proplong);
      const res = await fetch(url);
      const data = await res.json();

      const { temp, pressure, humidity, temp_min, temp_max } = data.main;
      const { main: weather_type } = data.weather[0];
      const { speed } = data.wind;
      const { country } = data.sys;
      const { name } = data;
      var { sunset } = data.sys;
      const sunset_time = new Date(sunset * 1000);
      sunset = sunset_time.toLocaleTimeString();
      // console.log(sunset_time.toLocaleTimeString());
      // sunrise = new Date(sunrise.toLocaleString);

      if (weather_type) {
        switch (weather_type) {
          case "Clouds":
            setweathertypeicon("wi-day-cloudy");

            break;
          case "Rain":
            setweathertypeicon("wi-day-rain");

            break;
          case "Haze":
            setweathertypeicon("wi-day-haze");

            break;
          case "Snow":
            setweathertypeicon("wi-day-snow");

            break;
          case "Smoke":
            setweathertypeicon("wi-smoke");

            break;
          case "Clear":
            setweathertypeicon("wi-cloud");
            break;

          default:
            setweathertypeicon("wi-day-sunny");
            break;
        }
      }
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
      console.log("ERROR COUGHT IN getWeatherinfo FUNC ");
      console.log(error);
    }
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      // console.log(position.coords.latitude, ",", position.coords.longitude);
      getWeatherinfo(position.coords.latitude, position.coords.longitude);

      // setlat(position.coords.latitude);
      // setlong(position.coords.longitude);
    });
  }, []);

  return (
    <>
      {/*-------------- SEARCHBAR DIV---------- */}
      <div className="wrap">
        <div>
          {/* <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDow80WBiuRUXuLxkkAt6kL7JaeYxByfDo&libraries=places" /> */}
          <PlacesAutocomplete
            onChange={setsearchValue}
            onSelect={handleSelect}
            value={searchValue}
          >
            {({
              getInputProps,
              suggestions,
              getSuggestionItemProps,
              loading,
            }) => (
              <div>
                <input
                  className="searchbar"
                  {...getInputProps({ placeholder: "Please Type City Name" })}
                />
                <div>
                  {loading ? <div>Loading</div> : null}
                  {suggestions.map((suggestion) => {
                    return (
                      <div
                        key={suggestion.placeId}
                        className="suggestions"
                        {...getSuggestionItemProps(suggestion)}
                      >
                        {suggestion.description}
                        {/* {console.log(suggestion)} */}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </PlacesAutocomplete>
        </div>
        {/*-------------- SEARCHBAR DIV  ENDED ---------- */}

        {/*-------------- WIDGET BOX DIV  ---------- */}
      </div>
      <div className="widget">
        <div className="weatherIcon">
          <i className={`wi ${weathertypeicon}`}></i>
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
      {/* -------------- WIDGET BOX DIV  ENDED ---------- */}
    </>
  );
};
export default Temprature;

import "./App.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { weatherDataCreator } from "./redux/reduser";
import cloud from "./cloud.png";
import sun from "./sun.png";
import rain from "./rain.png";
import balanse from "./balanse.png";
import Initial from "./components/Initial/Initial";
import ballon from "./ballon.png";
import "boxicons";

function WeatherApp() {
  const dispatch = useDispatch();
  const weatherFromRedux = useSelector((state) => state.weather);
  const [location, setLocation] = useState("London");
  const [isLoading, setIsLoading] = useState(false);

  const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=155feb6fdc297d229a4a58f05839381e`;

  const onSubmit = (event) => {
    event.preventDefault();
    setLocation(event.target[0].value);
  };

  const clickCountry = (param) => {
    setLocation(param);
    axios.get(baseUrl).then((res) => {
      dispatch(weatherDataCreator(res.data));
    });
  };

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(baseUrl)
      .then((res) => dispatch(weatherDataCreator(res.data)))
      .catch((err) => {
        alert(err.message);
      })
      .finally(() => {
        console.log("Final");
        setIsLoading(false);
      });
  }, [location]);

  const currentInfo = new Date();

  const dateBuilder = (dayInfo) => {
    let months = [
      "January",
      "Fevruary",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[dayInfo.getDay()];
    let date = dayInfo.getDate();
    let month = months[dayInfo.getMonth()];
    let year = dayInfo.getFullYear();

    return `${day} ${date} ${month} ${year} year`;
  };

  return (
    <div
      className={
        weatherFromRedux.main.temp > 33
          ? "wrapper"
          : weatherFromRedux.main.temp > 25
          ? "wrapper2"
          : "wrapper3"
      }
    >
      {!isLoading ? (
        <div className="weatherApp">
          <div className="siteName">the.weather</div>
          <div className="ballon">
            <img src={ballon} alt="AirBallon" />
          </div>
          <div className="info">
            <div className="infoFirstBox">
              <div className="degree">
                {Math.round(weatherFromRedux?.main?.temp)}°
              </div>
              <div className="country">
                <div className="countryName">{weatherFromRedux?.name}</div>
                <div className="timeInfo">
                  <div className="dayinfo">{dateBuilder(currentInfo)}</div>
                </div>
              </div>
            </div>
            <div className="status">
              <div className="statusImage">
                <img
                  src={
                    weatherFromRedux.main.temp > 33
                      ? sun
                      : weatherFromRedux.main.temp > 25
                      ? balanse
                      : cloud
                  }
                  alt="statusImage"
                />
              </div>
              <div className="statusName">
                {weatherFromRedux?.weather[0]?.main}
              </div>
            </div>
          </div>

          <div className="search">
            <div className="searchInfo">
              <div className="searchInput">
                <form onSubmit={(event) => onSubmit(event)} className="form">
                  <input
                    className="input"
                    type="text"
                    placeholder="Search..."
                  />
                  <button
                    type="submit"
                    className={
                      weatherFromRedux.main.temp > 33
                        ? "icon"
                        : weatherFromRedux.main.temp > 25
                        ? "icon2"
                        : "icon3"
                    }
                  >
                    <box-icon color="black" size="md" name="search"></box-icon>
                  </button>
                </form>
              </div>
              <ul className="countries">
                <li onClick={() => clickCountry("Andijan")}>Andijon</li>
                <li onClick={() => clickCountry("Bukhara")}>Buxoro</li>
                <li onClick={() => clickCountry("Fergana")}>Farg'ona</li>
                <li onClick={() => clickCountry("Namangan")}>Namangan</li>
                <li onClick={() => clickCountry("Tashkent")}>Toshkent</li>
                <li onClick={() => clickCountry("Termez")}>Termiz</li>
                <li onClick={() => clickCountry("Qarshi")}>Qarshi</li>
                <li onClick={() => clickCountry("Karakalpakstan")}>
                  Qoraqalpog'iston
                </li>
                <li onClick={() => clickCountry("Sirdaryo")}>Sirdaryo</li>
                <li onClick={() => clickCountry("Jizzax")}>Jizzax</li>
                <li onClick={() => clickCountry("Samarkand")}>Samarqand</li>
                <li onClick={() => clickCountry("Navoiy")}>Navoiy</li>
                <li onClick={() => clickCountry("Urgench")}>Urganch</li>
              </ul>
              <h2 className="title">Weather details</h2>
              <div className="details">
                <div className="detail">
                  <p>Clouds</p> <p>{weatherFromRedux?.clouds?.all}%</p>
                </div>
                <div className="detail">
                  <p>Humidity</p> <p>{weatherFromRedux?.main?.humidity}%</p>
                </div>
                <div className="detail">
                  <p>Wind</p> <p>{weatherFromRedux?.wind?.speed}km/h</p>
                </div>
                <div className="detail">
                  <p>Rain</p> <p>{weatherFromRedux?.wind?.gust}mm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div class="loading">
          <div class="main">
            <div class="dot">
              <div class="dot2"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default WeatherApp;

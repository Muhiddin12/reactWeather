import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import WeatherApp from "./WeatherApp";
import { Provider } from "react-redux";
import { reducer } from "./redux/reduser";
import { combineReducers, createStore } from "redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

const weatherReduser = combineReducers({ weather: reducer });

const store = createStore(weatherReduser);

root.render(
  <Provider store={store}>
    <WeatherApp />
  </Provider>
);

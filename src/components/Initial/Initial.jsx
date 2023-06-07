import { useEffect } from "react";
import style from "./Initial.module.scss";
import axios from "axios";
import { weatherDataCreator } from "../../redux/reduser";
import { useDispatch } from "react-redux";

function Initial() {
  const dispatch = useDispatch();
  const initialData = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=155feb6fdc297d229a4a58f05839381e`;

  useEffect(() => {
    axios.get(initialData).then((res) => {
      dispatch(weatherDataCreator(res.data));
      console.log("test >>>>", res.data);
    });
  }, []);

  return <div className={style.search}></div>;
}

export default Initial;

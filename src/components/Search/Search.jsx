import style from "./Search.module.scss";

function Search() {
  return (
    <div className={style.search}>
      <div className={style.info}>
        <input type={style.text} />
        <ul className={style.countries}>
          <li>Tashkent</li>
          <li>Namangan</li>
          <li>Farg'ona</li>
        </ul>
        <h2 className={style.title}>Weather details</h2>
        <div className={style.details}>
          <div className={style.detail}>
            <p>Cloudy</p> <p>12%</p>
          </div>
          <div className={style.detail}>
            <p>Humidity</p> <p>78%</p>
          </div>
          <div className={style.detail}>
            <p>Wind</p> <p>1km/h</p>
          </div>
          <div className={style.detail}>
            <p>Rain</p> <p>0mm</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;

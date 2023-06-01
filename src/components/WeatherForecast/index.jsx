import "./style.css";
import thunder from "../../assets/thunder_color.png";

function WeatherForecast({date, icon, temperature}) {

    const weekdayArr = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const arrDate = date.split('-');
    const dateFormated = new Date(Date.UTC(arrDate[0], arrDate[1] - 1, arrDate[2]));
    let weekday = weekdayArr[dateFormated.getUTCDay()];

    return (
        <div className="card__forecast">
            <div className="forecast__icon">
                <img src={icon}></img>
            </div>
            <p className="forecast__temperature">{temperature}°C</p>
            <p className="forecast__day">{weekday}</p>
        </div>
    );
}

export default WeatherForecast;
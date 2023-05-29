import "./style.css";
import thunder from "../../assets/thunder_color.png";

function WeatherForecast() {
    return (
        <div className="card__forecast">
            <div className="forecast__icon">
                <img src={thunder}></img>
            </div>
            <p className="forecast__temperature">20°C</p>
            <p className="forecast__day">Segunda</p>
        </div>
    );
}

export default WeatherForecast;
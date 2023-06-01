import "./style.css";
import sunny from "../../assets/sunny_foggy_color.png";

function WeatherStatus({condition, icon, temperature}) {
    return(
        <div className="card">
            <div className="weather__icon">
                <img src={icon}></img>
            </div>
            <p className="weather__status">{condition}</p>
            <p className="weather__temperature">{temperature}<span className="temperature_scale">°C</span></p>
        </div>
    );
}

export default WeatherStatus;
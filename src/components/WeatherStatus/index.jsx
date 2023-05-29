import "./style.css";
import sunny from "../../assets/sunny_foggy_color.png";

function WeatherStatus() {
    return(
        <div className="card">
            <div className="weather__icon">
                <img src={sunny}></img>
            </div>
            <p className="weather__status">Está nublado</p>
            <p className="weather__temperature">20<span className="temperature_scale">°C</span></p>
        </div>
    );
}

export default WeatherStatus;
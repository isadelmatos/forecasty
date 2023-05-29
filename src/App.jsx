import LocationInput from "./components/LocationInput"
import WeatherStatus from "./components/WeatherStatus";
import WeatherForecast from "./components/WeatherForecast";
import getData from "./api/api";
import { useState, useEffect } from 'react';

function App() {

  const [location, setLocation] = useState('');

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Enter") {
        getData(location)
          .then(resultado => {
              console.log(resultado);
          })
          .catch(() => {
              console.log('Ocorreu um erro na requisição.');
          });
      }
    };

    document.addEventListener("keypress", handleKeyPress);

    return () => {
      document.removeEventListener("keypress", handleKeyPress);
    };
  }, [location])

  return (
    <>
      <LocationInput value={location} setLocation={setLocation}/>
      <WeatherStatus />
      <div className="forecast_days">
        <WeatherForecast />
        <WeatherForecast />
        <WeatherForecast />
        <WeatherForecast />
        <WeatherForecast />
      </div>
    </>
  )
}

export default App

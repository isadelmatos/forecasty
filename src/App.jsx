import LocationInput from "./components/LocationInput"
import WeatherStatus from "./components/WeatherStatus";
import WeatherForecast from "./components/WeatherForecast";
import getData from "./api/api";
import { useState, useEffect } from 'react';

function App() {

  const [location, setLocation] = useState('São paulo');
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    getData(location)
      .then(result => {
          const dataResult = result.forecast.forecastday;
          const nextDays = [];;

          for (const forecastday of dataResult) {
            nextDays.push({
              date: forecastday.date,
              condition: forecastday.day.condition.text,
              icon: forecastday.day.condition.icon,
              temperature: forecastday.day.avgtemp_c
            });
          }

          setForecast(nextDays);
      })
      .catch(() => {
          console.log('There were errors in the request.');
      });

  }, [location])

  return (
    <>
      <LocationInput setLocation={setLocation}/>
      <p>{location}</p>
      {forecast &&
        <> 
          <WeatherStatus condition={forecast[0].condition} icon={forecast[0].icon} temperature={forecast[0].temperature} />
          <div className="forecast_days">
            {forecast.map((day, index) => {
              if (index !== 0) {
                return <WeatherForecast key={index} date={day.date} icon={day.icon} temperature={day.temperature}/>;
              }
            })}
          </div>
        </>
      }
    </>
  )
}

export default App

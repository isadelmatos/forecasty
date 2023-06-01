import LocationInput from "./components/LocationInput"
import WeatherStatus from "./components/WeatherStatus";
import WeatherForecast from "./components/WeatherForecast";
import getData from "./api/api";
import { useState, useEffect } from 'react';

function App() {

  const [location, setLocation] = useState('');
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Enter") {
        getData(location)
          .then(result => {
              const today = result.current;
              const nextDays = result.forecast.forecastday;

              const data = [
                {
                  condition: today.condition.text,
                  icon: today.condition.icon,
                  temperature: today.feelslike_c
                },
                {
                  date: nextDays[1].date,
                  condition: nextDays[1].day.condition.text,
                  icon: nextDays[1].day.condition.icon,
                  temperature: nextDays[1].day.avgtemp_c
                },
                {
                  date: nextDays[2].date,
                  condition: nextDays[2].day.condition.text,
                  icon: nextDays[2].day.condition.icon,
                  temperature: nextDays[2].day.avgtemp_c
                },
                {
                  date: nextDays[3].date,
                  condition: nextDays[3].day.condition.text,
                  icon: nextDays[3].day.condition.icon,
                  temperature: nextDays[3].day.avgtemp_c
                },
                {
                  date: nextDays[4].date,
                  condition: nextDays[4].day.condition.text,
                  icon: nextDays[4].day.condition.icon,
                  temperature: nextDays[4].day.avgtemp_c
                },
                {
                  date: nextDays[5].date,
                  condition: nextDays[5].day.condition.text,
                  icon: nextDays[5].day.condition.icon,
                  temperature: nextDays[5].day.avgtemp_c
                },
                {
                  date: nextDays[6].date,
                  condition: nextDays[6].day.condition.text,
                  icon: nextDays[6].day.condition.icon,
                  temperature: nextDays[6].day.avgtemp_c
                },
              ];

              setForecast(data);
          })
          .catch(() => {
              console.log('There were errors in the request.');
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
      {forecast &&
        <> 
          <WeatherStatus condition={forecast[0].condition} icon={forecast[0].icon} temperature={forecast[0].temperature} />
          <div className="forecast_days">

            {forecast.map((day, index) => {
              if (index !== 0) {
                return <WeatherForecast key={index} date={day.date} icon={day.icon} temperature={day.temperature}/>;
              }
              return null;
            })}
          </div>
        </>
      }
    </>
  )
}

export default App

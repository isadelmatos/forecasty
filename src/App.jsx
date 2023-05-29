import LocationInput from "./components/LocationInput"
import WeatherStatus from "./components/WeatherStatus";
import WeatherForecast from "./components/WeatherForecast";
//import { useState } from 'react'

function App() {

  return (
    <>
      <LocationInput />
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

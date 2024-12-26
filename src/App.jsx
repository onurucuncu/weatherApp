import { useState } from "react";
import SelectCityInput from "./components/SelectCityInput";
import WeatherData from "./components/WeatherData";

function App() {
  const [weatherData, setWeatherData] = useState(null);

  return (
    <div className="h-screen flex flex-col justify-center">
      <div className="flex justify-center mt-5">
        <SelectCityInput setWeatherData={setWeatherData} />
      </div>
      {weatherData && (
        <div className="flex justify-center mt-5">
          <WeatherData weatherData={weatherData} />
        </div>
      )}
    </div>
  );
}

export default App;

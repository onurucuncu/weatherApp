import {
  AcUnit,
  Backup,
  Cloud,
  Cyclone,
  Flood,
  SevereCold,
  Thunderstorm,
  WbSunny,
} from "@mui/icons-material";
import React from "react";

const WeatherIcon = (props) => {
  const { weatherData } = props;
  let IconComponent;

  switch (weatherData.weather[0].main) {
    case "Clear":
      IconComponent = <WbSunny style={{color:"yellow", fontSize: "32px"}} />;
      break;
    case "Clouds":
      IconComponent = <Cloud style={{color:"white", fontSize: "32px"}}/>;
      break;
    case "Rain":
      IconComponent = <Thunderstorm style={{color:"white", fontSize: "32px"}}/>;
      break;
    case "Snow":
      IconComponent = <AcUnit style={{color:"white", fontSize: "32px"}}/>;
      break;
    case "Thunderstorm":
      IconComponent = <Flood style={{color:"gray", fontSize: "32px"}}/>;
      break;
    case "Fog":
    case "Mist":
    case "Haze":
      IconComponent = <Backup style={{color:"gray", fontSize: "32px"}}/>;
      break;
    case "Drizzle":
      IconComponent = <SevereCold style={{color:"white", fontSize: "32px"}}/>;
      break;
    default:
      IconComponent = <Cyclone style={{color:"gray", fontSize: "32px"}}/>;
      break;
  }

  return <>{IconComponent}</>;
};

export default WeatherIcon;

import React, { useContext } from "react";
import { WeatherData } from "../../../pages";
import Temp from "../../UI/Temp";
import Celestial from "./Celestial";

const AdditionalInfo = () => {
  const { feels_like, humidity, uvi, dew_point, sunrise, sunset } = useContext(
    WeatherData
  ).current;
  console.log("AdditionalInfo -> data", useContext(WeatherData).current);
  return (
    <div>
      <ul className="flex flex-row flex-wrap items-center justify-between">
        <li className="w-1/2">
          <strong>Feels like:</strong> <Temp temp={feels_like} />
        </li>
        <li className="w-1/2">
          <strong>Humidity:</strong> {humidity}%
        </li>
        <li className="w-1/2">
          <strong>UV:</strong> {Math.floor(uvi)}
        </li>
        <li className="w-1/2">
          <strong>Dew Point:</strong> <Temp temp={dew_point} />
        </li>
      </ul>
      <div>
        <Celestial text="Sunrise" time={sunrise} iconFile="sunrise.png" />
        <Celestial text="Sunset" time={sunset} iconFile="sunset.png" />
      </div>
    </div>
  );
};

export default AdditionalInfo;

import React, { useContext } from "react";
import { WeatherData } from "../../../pages";

const AdditionalInfo = () => {
  const data = useContext(WeatherData).current;
  console.log("AdditionalInfo -> data", data);
  return (
    <div>
      <ul></ul>
    </div>
  );
};

export default AdditionalInfo;

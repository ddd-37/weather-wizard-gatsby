import React, { useContext } from "react";
import { PropTypes } from "prop-types";
import moment from "moment";
import AdditionalInfo from "./AdditionalInfo";

import { WeatherData } from "./../../../pages/index";
import Temp from "../../UI/Temp";

const Sidebar = ({ location, changeUnit }) => {
  const data = useContext(WeatherData).current;

  return (
    <div>
      <h2 className="text-2xl">{location}</h2>
      <h3>{moment().format("MMMM D, h:mm")}</h3>
      <div className="flex justify-around">
        <div className="flex flex-1 items-center">
          <h3 className="text-5xl mx-2">
            <Temp temp={data.temp} />
          </h3>
          <div className="flex flex-col justify-center">
            <button onClick={() => changeUnit(true)}>F</button>
            <button onClick={() => changeUnit(false)}>C</button>
          </div>
        </div>
        <div className="flex flex-1 justify-center ">
          <img
            src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
          />
        </div>
      </div>
      <AdditionalInfo />
    </div>
  );
};

Sidebar.propTypes = {
  location: PropTypes.string.isRequired,
  changeUnit: PropTypes.func.isRequired,
};

export default Sidebar;

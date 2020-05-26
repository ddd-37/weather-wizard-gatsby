import React from "react";
import { PropTypes } from "prop-types";
import moment from "moment";

const Sidebar = ({ location, data, changeUnit }) => {
  return (
    <div>
      <h2 className="text-2xl">{location}</h2>
      <h3>{moment().format("MMMM D, h:mm")}</h3>
      <div className="flex justify-around">
        <div className="flex flex-1 items-center">
          <h3 className="text-5xl mx-2 ">{Math.floor(data.temp)}&deg;</h3>
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
    </div>
  );
};

Sidebar.propTypes = {
  location: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  changeUnit: PropTypes.func.isRequired,
};

export default Sidebar;

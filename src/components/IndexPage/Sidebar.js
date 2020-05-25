import React from "react";
import { PropTypes } from "prop-types";

const Sidebar = ({ location, data }) => {
  return (
    <div>
      <div className="text-center">
        <h2 className=" text-3xl">{location}</h2>
        <div className="flex justify-center items-center">
          <img
            src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
          />
          <h3 className="text-5xl mx-2">{Math.floor(data.temp)}</h3>
          <div className="flex flex-col">
            <span>F</span>
            <span>C</span>
          </div>
        </div>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  location: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
};

export default Sidebar;

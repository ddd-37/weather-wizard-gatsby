import React from "react";
import { PropTypes } from "prop-types";

const Temp = ({ temp }) => {
  return (
    <>
      <span>{Math.floor(temp)}&deg;</span>
    </>
  );
};

Temp.propTypes = {
  temp: PropTypes.number.isRequired,
};

export default Temp;

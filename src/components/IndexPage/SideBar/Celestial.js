import React from "react";
import moment from "moment";
import { PropTypes } from "prop-types";
import FixedImage from "../../UI/FixedImage";

const Celestial = ({ text, time, iconFile }) => {
  return (
    <div>
      <h3>
        <strong>{text}</strong>
      </h3>
      <div className="flex items-start">
        <div>
          {" "}
          <FixedImage
            filename={iconFile}
            alt={text}
            maxWidth={25}
            title={text}
          />
        </div>
        <span>{moment(time).format("h:mm a")}</span>
      </div>
    </div>
  );
};

Celestial.propTypes = {
  text: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
  iconFile: PropTypes.string.isRequired,
};

export default Celestial;

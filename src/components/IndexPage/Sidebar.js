import React from "react";
import { PropTypes } from "prop-types";

const Sidebar = ({ location, data }) => {
  console.log("Sidebar -> data", data);
  console.log("Sidebar -> location", location);
  return <div>{location}</div>;
};

Sidebar.propTypes = {
  location: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
};

export default Sidebar;

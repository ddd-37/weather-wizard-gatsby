import React from "react";
import { PropTypes } from "prop-types";

const Sidebar = ({ location }) => {
  console.log("Sidebar -> location", location);
  return <div>{location}</div>;
};

Sidebar.propTypes = {
  location: PropTypes.string.isRequired,
};

export default Sidebar;

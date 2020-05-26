import React from "react";
import PropTypes from "prop-types";

const Content = ({ data }) => {
  console.log("Content -> data", data);
  return <div>Content</div>;
};

Content.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Content;

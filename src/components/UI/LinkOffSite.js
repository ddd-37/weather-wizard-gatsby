import React from "react";
import PropTypes from "prop-types";

const LinkOffSite = ({ url, children }) => {
  return (
    <a
      className="font-bold no-underline"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

LinkOffSite.propTypes = {
  url: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default LinkOffSite;

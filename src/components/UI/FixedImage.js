import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { PropTypes } from "prop-types";

// Note: You can change "images" to whatever you'd like.

const FixedImage = ({ filename, alt, title }) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fixed(height: 50, width: 50) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const image = data.images.edges.find((n) => {
        return n.node.relativePath.includes(filename);
      });
      if (!image) {
        return null;
      }

      //const imageSizes = image.node.childImageSharp.sizes; sizes={imageSizes}
      return (
        <Img alt={alt} title={title} fixed={image.node.childImageSharp.fixed} />
      );
    }}
  />
);

FixedImage.propTypes = {
  filename: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default FixedImage;

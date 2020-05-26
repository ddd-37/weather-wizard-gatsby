import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { PropTypes } from "prop-types";

// Note: You can change "images" to whatever you'd like.

const Image = ({ filename, alt, maxWidth, title }) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
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
        <Img
          alt={alt}
          title={title}
          fluid={image.node.childImageSharp.fluid}
          style={{ maxWidth: maxWidth }}
        />
      );
    }}
  />
);

Image.propTypes = {
  filename: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  maxWidth: PropTypes.number,
};

export default Image;

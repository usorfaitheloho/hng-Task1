import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ src, alt, className }) => (
  <img src={src} alt={alt} className={className} />
);

Image.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

Image.defaultProps = {
  className: '',
};

export default Image;
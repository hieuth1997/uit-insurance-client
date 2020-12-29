import React from 'react';
import PropTypes from 'prop-types';
const Img = ({ src, alt, title, style, className }) => {
  return (
    <img
      className={className}
      src={src}
      title={title}
      style={style}
      alt={alt}
      onError={e => {
        e.target.onerror = null;
        e.target.src = '/static/image/fallbackImg.svg';
      }}
    />
  );
};

Img.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string
};

export default Img;

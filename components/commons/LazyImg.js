import React from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazy-load';
import Img from './Img';

const LazyImg = ({ src, alt, title, className, style, offset, height, debounce, throttle }) => {
  return (
    <LazyLoad className={className} offset={offset} height={height} debounce={debounce} throttle={throttle}>
      <Img className={className} src={src} alt={alt} title={title} style={style} />
    </LazyLoad>
  );
};

LazyImg.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  title: PropTypes.string,
  className: PropTypes.string,
  offset: PropTypes.number,
  height: PropTypes.number,
  throttle: PropTypes.number,
  debounce: PropTypes.bool
};

export default LazyImg;

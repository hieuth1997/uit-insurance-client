import React, { Component } from 'react';
import Swiper from 'swiper';

export default class extends Component {
  componentDidMount() {
    new Swiper('.swiper1', {
      effect: 'coverflow',
      autoplay: {
        delay: 5000
      },
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
      },
      pagination: {
        el: '.swiper-pagination'
      },
      preloadImages: false,
      lazy: {
        loadPrevNext: true,
        loadPrevNextAmount: 3
      }
    });
  }

  render() {
    return <div className='swiper-wrapper'>{this.props.children}</div>;
  }
}

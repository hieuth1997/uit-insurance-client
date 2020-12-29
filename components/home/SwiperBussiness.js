import React, { Component } from 'react';
import Swiper from 'swiper';

export default class extends Component {
  componentDidMount() {
    new Swiper('.swiper2', {
      slidesPerView: 3,
      spaceBetween: 60,
      autoplay: {
        delay: 5000
      },
      slidesPerGroup: 3,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: '.swiper-pagination-b',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      preloadImages: false,
      lazy: {
        loadPrevNext: true,
        loadPrevNextAmount: 3
      },
      breakpoints: {
        1024: {
          slidesPerGroup: 2,
          slidesPerView: 2,
          spaceBetween: 30
        },
        640: {
          slidesPerGroup: 1,
          slidesPerView: 1,
          spaceBetween: 20
        }
      }
    });
  }

  render() {
    return <div className='swiper-wrapper'>{this.props.children}</div>;
  }
}

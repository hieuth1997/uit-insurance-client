import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SwiperPersonal from './SwiperPersonal';
import { srcImg } from '../../helpers/setup';
import SwiperBussiness from './SwiperBussiness';
import { Link } from '../../server/routes';

const InsuranceCate = ({ home }) => {
  const { insuranceCate } = home;
  let personalInsurance = [],
    bussinessInsurance = [];
  if (insuranceCate.length)
    for (const el of insuranceCate) {
      el.type === 'Khách hàng cá nhân'
        ? personalInsurance.push(
            <Link route='bao-hiem' params={{ slug: el.slug }} key={el.slug}>
              <div data-background={srcImg(el.picture)} className='swiper-slide swiper-lazy cursor-pointer'>
                <a href={'/bao-hiem/' + el.slug}>
                  <div className='swiper-lazy-preloader' />
                  <h3 className='my_text_swiper'>{el.name}</h3>
                </a>
              </div>
            </Link>
          )
        : bussinessInsurance.push(
            <Link route='bao-hiem' params={{ slug: el.slug }} key={el.slug}>
              <div data-background={srcImg(el.picture)} className='swiper-slide swiper-lazy swiper-slide-b cursor-pointer'>
                <a href={'/bao-hiem/' + el.slug}>
                  <div className='swiper-lazy-preloader' />
                  <h3 className='my_text_slider_1'>{el.name}</h3>
                </a>
              </div>
            </Link>
          );
    }
  return (
    <>
      {
        <div className='my_bg_transparent_slider'>
          <div className='swiper-container swiper1'>
            <h2 className='my_title_new '>KHÁCH HÀNG CÁ NHÂN</h2>
            <SwiperPersonal children={personalInsurance} />
            <div className='swiper-pagination' />
          </div>
        </div>
      }
      <div className='my_bg_slider_parent'>
        <div className='container-fluid my_bg_khcn ' style={{ paddingBottom: '5%', overflow: 'hidden', background: '#dadada3d' }}>
          <h2 className='my_title_new text-dark'>KHÁCH HÀNG DOANH NGHIỆP</h2>
          <div className='swiper-container swiper-container-b swiper2'>
            <SwiperBussiness>{bussinessInsurance}</SwiperBussiness>
            <div className='swiper-pagination swiper-pagination-b' />
            <div className='swiper-button-next' />
            <div className='swiper-button-prev' />
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  home: state.home
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InsuranceCate);

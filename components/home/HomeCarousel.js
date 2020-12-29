import React, { useState } from 'react';
import { Carousel, Container } from 'react-bootstrap';
import { srcImg } from '../../helpers/setup';
import { connect } from 'react-redux';
import LazyImg from '../commons/LazyImg';
import { Link } from '../../server/routes';

const HomeCarousel = ({ home }) => {
  const [{ slide, direction }, setSlide] = useState({ slide: 0, direction: null });
  const { banners } = home;
  let content = banners.map((banner, key) => (
    <Carousel.Item className='w-100' key={key}>
      <p className='my_home_ins_cate'>{banner.description.toUpperCase()}</p>
      <Link route='chi-tiet' params={{ slug: banner.insuranceItemSlug }}>
        <a href={'/chi-tiet/' + banner.insuranceItemSlug}>
          <LazyImg src={srcImg(banner.picture)} alt={banner.alt} title={banner.title} className='d-block w-100 is-carousel-img' />
        </a>
      </Link>
    </Carousel.Item>
  ));
  return (
    <Container fluid>
      <div className='row '>
        <Carousel
          className='slide w-100'
          activeIndex={slide}
          direction={direction}
          onSelect={(select, e) =>
            setSlide({
              slide: select,
              direction: e.direction
            })
          }
        >
          {content}
        </Carousel>
      </div>
    </Container>
  );
};

const mapStateToProps = state => ({
  home: state.home
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeCarousel);

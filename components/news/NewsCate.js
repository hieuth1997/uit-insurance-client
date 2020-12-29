import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Row } from 'react-bootstrap';
import NewsItem from './NewsItem';
import Head from '../../components/Header';
import { srcHst } from '../../helpers/setup';

const NewsCate = ({ news }) => {
  const { list } = news;
  let content;
  if (list.length) content = list.map((el, key) => <NewsItem el={el} key={key} />);
  return (
    <>
      <Head
        url={srcHst('tin-tuc')}
        title={'Trang Tin tức - Thông tin - Bảo hiểm UITI'}
        description={'Trang tin tức, thông tin, cập nhật, chính sách mới nhất của bảo hiểm UITI đến khách hàng, người sử dụng bảo hiểm của chúng tôi'}
        ogImage={srcHst('/static/image/news.jpg')}
        canonicalUrl={srcHst('tin-tuc')}
      />
      <Container className='my_container '>
        <h1 className='my_title'>TIN TỨC</h1>
        <Row className='row row_center'>{content}</Row>
      </Container>
    </>
  );
};

const mapStateToProps = state => ({
  news: state.news
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsCate);

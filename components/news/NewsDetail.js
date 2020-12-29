import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Breadcrumb } from 'react-bootstrap';
import Head from '../Header';
import { srcImg, srcHst } from '../../helpers/setup';
import { Link } from '../../server/routes';

const NewsDetail = ({ news }) => {
  const { itemDetail } = news;
  return (
    <>
      <Head
        title={itemDetail.name}
        url={srcHst('tin-tuc/' + itemDetail.slug)}
        canonicalUrl={srcHst('tin-tuc/' + itemDetail.slug)}
        ogImage={srcImg(itemDetail.picture)}
        description={itemDetail.metaDescription}
        keywords={itemDetail.metaKeyword}
      />
      <Container className='bg-white '>
        <Breadcrumb className='is-breadcrumb'>
          <Link route='/'>
            <Breadcrumb.Item href='/' className='my_breadcum_item'>
              Trang chủ
            </Breadcrumb.Item>
          </Link>
          <Link route='tin-tuc'>
            <Breadcrumb.Item href='/tin-tuc' className='my_breadcum_item'>
              Tin tức
            </Breadcrumb.Item>
          </Link>
          <Breadcrumb.Item className='my_breadcum_item' active>
            {itemDetail.name}
          </Breadcrumb.Item>
        </Breadcrumb>
        <img src={srcImg(itemDetail.picture)} className='detail_image' />
        <br />
        <div className='my_name_sp'>{itemDetail.name}</div>
        <div className='ql-editor' dangerouslySetInnerHTML={{ __html: itemDetail.content }} />
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
)(NewsDetail);

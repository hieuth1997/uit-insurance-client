import React from 'react';
import PropTypes from 'prop-types';
import InsuranceItem from './InsuranceItem';
import Head from '../../components/Header';
import { srcImg, srcHst } from '../../helpers/setup';
import { connect } from 'react-redux';
import { Row, Container, Breadcrumb } from 'react-bootstrap';
import { Link } from '../../server/routes';

const InsuranceCate = ({ list, cate }) => {
  let content;
  if (list.length) {
    content = list.map((el, key) => <InsuranceItem key={key} el={el} />);
  }
  return (
    <>
      <Head
        title={cate.title}
        url={srcHst('bao-hiem/' + cate.slug)}
        canonicalUrl={srcHst('bao-hiem/' + cate.slug)}
        description={cate.metaDescription}
        ogImage={srcImg(cate.picture)}
        keywords={cate.metaKeyword}
      />
      <Container fluid className='my-bg-white '>
        <div className='my_container_detail'>
          <Breadcrumb className='is-breadcrumb'>
            <Link route='/'>
              <Breadcrumb.Item href='/' className='my_breadcum_item'>
                Trang chủ
              </Breadcrumb.Item>
            </Link>
            <Breadcrumb.Item className='my_breadcum_item' active>
              {cate.name}
            </Breadcrumb.Item>
          </Breadcrumb>
          <h1 className='my_name_sp_1'>{cate.name}</h1>
        </div>
      </Container>
      <div className='my_container-fluid '>
        <div className='my_pic_overflow'>
          <img title={cate.name} alt={cate.name} src={srcImg(cate.picture)} className='detail_image_1' />
        </div>
        <Container className='my_container'>
          <div className='row my_intro_detail pt-3 pb-0'>
            <p
              className='ql-editor'
              dangerouslySetInnerHTML={{
                __html: cate.description
              }}
            />
          </div>
          <h2 className='my_title'>SẢN PHẨM CỦA CHÚNG TÔI</h2>
          <Row className='row_center'>{content}</Row>
        </Container>
      </div>
    </>
  );
};
InsuranceCate.propTypes = {
  list: PropTypes.array.isRequired,
  cate: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  list: state.insurance.list,
  cate: state.insurance.cate
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InsuranceCate);

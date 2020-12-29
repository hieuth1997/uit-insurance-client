import React from 'react';
import PropTypes from 'prop-types';
import InsuranceItem from './InsuranceItem';
import Head from '../../components/Header';
import { srcImg, srcHst } from '../../helpers/setup';
import { connect } from 'react-redux';
import { Row, Container, Breadcrumb } from 'react-bootstrap';
import { Link } from '../../server/routes';


const InsuranceType = ({ list, type }) => {
  let content;
  const viType = type === 'bao-hiem-nhan-tho' ? 'Bảo hiểm nhân thọ' : 'Bảo hiểm phi nhân thọ';
  if (list && list.length) {
    content = list.map((el, key) => <InsuranceItem key={key} el={el} />);
  }
  return (
    <>
      <Head
        title={viType + '- Bảo hiểm UITI'}
        url={srcHst(type)}
        canonicalUrl={srcHst(type)}
        description={`Trang tất cả các sản phẩm của ${viType} được cung cấp bởi Bảo hiểm UITI`}
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
              {viType}
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </Container>
      <Container className='my_container'>
        <h1 className='my_title mt-0'>{viType}</h1>
        <Row className='row_center'>{content}</Row>
      </Container>
    </>
  );
};

const mapStateToProps = state => ({
  list: state.insurance.list
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InsuranceType);

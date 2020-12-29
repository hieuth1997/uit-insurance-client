import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Head from '../Header';
import { srcImg, srcHst } from '../../helpers/setup';
import { Link } from '../../server/routes';
import { Breadcrumb, Container, Row, Col } from 'react-bootstrap';
import { buyCateItem } from './actions';

const InsuranceDetail = ({ itemDetail, buyCateItem }) => {
  const onBuy = () => {
    buyCateItem(itemDetail._id);
  };
  return (
    <>
      <Head
        title={itemDetail.title}
        url={srcHst('chi-tiet/' + itemDetail.slug)}
        canonicalUrl={srcHst('chi-tiet/' + itemDetail.slug)}
        ogImage={srcImg(itemDetail.picture)}
        keywords={itemDetail.keywords}
        description={itemDetail.metaDescription}
      />
      <Container fluid className='my-bg-white '>
        <div className='my_container_detail'>
          <Breadcrumb className='is-breadcrumb'>
            <Link route='/'>
              <Breadcrumb.Item href='/' className='my_breadcum_item'>
                Trang chủ
              </Breadcrumb.Item>
            </Link>
            <Link route='bao-hiem' params={{ slug: itemDetail.insuranceCate.slug }}>
              <Breadcrumb.Item href={'/bao-hiem/' + itemDetail.insuranceCate.slug} className='my_breadcum_item'>
                {itemDetail.insuranceCate.name}
              </Breadcrumb.Item>
            </Link>
            <Breadcrumb.Item className='my_breadcum_item' active>
              {itemDetail.name}
            </Breadcrumb.Item>
          </Breadcrumb>
          <h1 className='my_name_sp_1'>{itemDetail.name}</h1>
        </div>
        <div className='my_pic_overflow'>
          <img title={itemDetail.name} alt={`cover ${itemDetail.name}`} src={srcImg(itemDetail.picture)} className='detail_image_1' />
        </div>
      </Container>
      <Container fluid className='my_content_detail'>
        <div className='my_container_detail'>
          <div className='my_intro_detail'>
            <span
              className='ql-editor text-center'
              dangerouslySetInnerHTML={{
                __html: itemDetail.introduction
              }}
            />
          </div>
          <Row className='row'>
            <Col md='7'>
              <div className='my_pic_overflow'>
                <img title={itemDetail.name} alt={`content ${itemDetail.name}`} src={srcImg(itemDetail.contentPicture)} className='detail_image_1' />
              </div>
            </Col>
            <Col md='5'>
              <h2 className='my_bar_title'>Đối tượng bảo hiểm </h2>
              <div className='my-content-detail'>
                <span
                  className='ql-editor'
                  dangerouslySetInnerHTML={{
                    __html: itemDetail.theInsured
                  }}
                />
              </div>
            </Col>
            <Col md='7'>
              <div className='my_group_pham_vi'>
                <h2 className='my_bar_title'>Phạm vi và quyền lợi bảo hiểm</h2>
                <div className='my-content-detail'>
                  <span
                    className='ql-editor'
                    dangerouslySetInnerHTML={{
                      __html: itemDetail.scopeBenefit
                    }}
                  />
                </div>
              </div>
              {itemDetail.otherInformation && itemDetail.otherInformation.trim() && itemDetail.otherInformation !== '<p><br></p>' && (
                <div className='my_group_pham_vi'>
                  <h2 className='my_bar_title'>Thông tin khác</h2>
                  <div className='my-content-detail'>
                    <span
                      className='ql-editor'
                      dangerouslySetInnerHTML={{
                        __html: itemDetail.otherInformation
                      }}
                    />
                  </div>
                </div>
              )}
              <div className='my_group_pham_vi'>
                <h2 className='my_bar_title'>Biểu mẫu</h2>
                <div className='my-content-detail'>
                  <a target='_blank' href={srcImg(itemDetail.form)}>
                    <img src='/static/pdf.svg' width='60' />
                  </a>
                  <p>hợp đồng</p>
                </div>
              </div>
            </Col>
            <div className='col-md-5'>
              <button onClick={onBuy} className='my_bar_buy'>
                <img src='/static/cart.svg' className='is-buy-icon' />
                THÊM VÀO GIỎ HÀNG
              </button>
              <div className='my_group_contact_form'>
                <div className='my_group_top_form'>
                  <p className='my_text_consultant'>Cho chúng tôi biết nhu cầu của bạn</p>
                  <div className='my_text_call'>1800 96 96 90 (miễn cước)</div>
                </div>
                <hr />
                <div className='my_group_bot_form'>
                  <p className='my_text_consultant'>Bạn cần tư vấn</p>
                  <p>Vui lòng nhập thông tin chúng tôi sẽ liên lạc với bạn</p>
                  <div className='form-group '>
                    <label className='my_label_form'>Họ và tên</label>
                    <input type='text' className='my_input' aria-describedby='helpId' placeholder=' Nhập họ và tên bạn' />
                  </div>
                  <label className='my_label_form'>Email</label>
                  <input type='email' className='my_input' aria-describedby='helpId' placeholder=' Nhập email' />
                  <div className='form-group '>
                    <label className='my_label_form'>Số điện thoại</label>
                    <input type='text' className='my_input' id='T' aria-describedby='helpId' placeholder=' Nhập số điện thoại' />
                  </div>
                  <button className='my_btn_login'>Gửi</button>
                </div>
              </div>
            </div>
          </Row>
        </div>
      </Container>
    </>
  );
};

const mapStateToProps = state => ({ itemDetail: state.insurance.itemDetail });

InsuranceDetail.propTypes = {
  itemDetail: PropTypes.object.isRequired,
  buyCateItem: PropTypes.func.isRequired
};

const mapDispatchToProps = {
  buyCateItem
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InsuranceDetail);

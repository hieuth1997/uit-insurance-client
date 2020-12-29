import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

const Footer = props => (
  <>
    <footer>
      <div className='container-fluid myfooter'>
        <div className='container'>
          <div className='row mt-3 pb-2 pt-4'>
            <div className='col-md-3  my_color_footer'>
              <div className='mauchu'>Giới thiệu </div>
              <p style={{ textAlign: 'justify' }}>
                UITI là công ty uy tín hàng đầu chuyên cung cấp cho khách hàng nhiều hình thức bảo hiểm đa dạng, chất lượng nhất hiện nay
              </p>
            </div>
            <div className='col-md-1' />
            <div className='col-md-5  my_color_footer '>
              <div className='mauchu'>Liên hệ với chúng tôi</div>
              <p className='lineheight-2px'>
                <FontAwesomeIcon icon={faMapMarker} className='ct-icon' />
                &nbsp; Địa chỉ: Tầng 8, Tòa nhà UIT, Linh Trung, Thủ Đức, Hồ Chí Minh
                <br />
                <FontAwesomeIcon icon={faPhone} className='ct-icon' />
                &nbsp; Điện thoại: 061 533 094
                <br />
                <FontAwesomeIcon icon={faEnvelope} className='ct-icon' />
                &nbsp; Email: baohiemuiti@gmail.com
              </p>
            </div>
            <div className='col-md-3 '>
              <div className='mauchu'>Về UITI</div>
              <div className='mb-2 '>
                <span>
                  <FontAwesomeIcon icon={faFacebook} className='my_icon' />
                </span>
                <span>
                  <FontAwesomeIcon icon={faYoutube} className='my_icon' />
                </span>
                <span>
                  <FontAwesomeIcon icon={faTwitter} className='my_icon' />
                </span>
              </div>
              <span className='a_footer my_color_footer '>Khách hàng cá nhân</span>
              <br />
              <span className='a_footer my_color_footer'>Khách hàng doanh nghiệp</span>
            </div>
          </div>
        </div>
      </div>
      <div className='container-fluid footer_bot'>
        <div className='row text-center'>
          <div className='col-md-12 my-2'>
            <span className='text-white'>© Copyright 2019 Tổng Công ty Cổ phần Bảo hiểm UITI </span>
          </div>
        </div>
      </div>
    </footer>
  </>
);

export default Footer;

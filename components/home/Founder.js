import React from 'react';
import { Container } from 'react-bootstrap';

export default function Founder() {
  return (
    <Container fluid style={{ background: '#003079fa' }}>
      <Container fluid />
      <div className='testimonials'>
        <div className='card1'>
          <div className='layer1' />
          <div className='content1'>
            <p>Anh Khoa</p>
            <div className='image1'>
              <img src='/static/image/ak.webp' alt={'anh-khoa'} title='Anh Khoa' />
            </div>
            <div className='details'>
              <br />
              <span>Website Desiger</span>
            </div>
          </div>
        </div>

        <div className='card1'>
          <div className='layer1' />
          <div className='content1'>
            <p>Trọng Hiếu</p>
            <div className='image1'>
              <img src='/static/image/th.webp' alt={'trong-hieu'} title='Trong Hieu' />
            </div>
            <div className='details'>
              <br />
              <span>Front End Developer</span>
            </div>
          </div>
        </div>

        <div className='card1'>
          <div className='layer1' />
          <div className='content1'>
            <p>Quan Đạo</p>
            <div className='image1'>
              <img src='/static/image/qd.webp' alt={'quan-dao'} title='Quan Đạo' />
            </div>
            <div className='details'>
              <br />
              <span>Back End Developer</span>
            </div>
          </div>
        </div>

        <div className='card1'>
          <div className='layer1' />
          <div className='content1'>
            <p>Công Minh</p>
            <div className='image1'>
              <img src='/static/image/mh.webp' alt={'cong-minh'} title='Công Minh' />
            </div>
            <div className='details'>
              <br />
              <span>Project Manager</span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

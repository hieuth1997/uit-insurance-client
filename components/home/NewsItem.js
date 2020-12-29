import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from '../../server/routes';
import { srcImg } from '../../helpers/setup';
import LazyImg from '../commons/LazyImg';

export default function NewsItem({ el }) {
  return (
    <Link route='tin-tuc/' params={{ slug: el.slug }}>
      <Col md='4' sm='12' className='col-md-4 col-sm-12 my_card_new cursor-pointer'>
        <a href={'/tin-tuc/' + el.slug}>
          <div className='my_overflow_img_tin_tuc'>
            <LazyImg src={srcImg(el.picture)} title={el.name} alt={el.name} />
          </div>
          <div className='my_card_new_text_overflow'>
            <h4>{el.name}</h4>
          </div>
        </a>
      </Col>
    </Link>
  );
}

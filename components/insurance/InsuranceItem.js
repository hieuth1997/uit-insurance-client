import React from 'react';
import { Link } from '../../server/routes';
import { srcImg } from '../../helpers/setup';
import { Card, Col } from 'react-bootstrap';

const InsuranceItem = ({ el }) => {
  return (
    <Col md='4' sm='12' className='p-0'>
      <Link route='chi-tiet' params={{ slug: el.slug }}>
        <a href={'/chi-tiet/' + el.slug}>
          <Card className='no_padding cursor-pointer'>
            <Card.Img className='is-card' src={srcImg(el.picture)} alt={el.picture} title={el.name} />
            <Card.ImgOverlay className='h-100 d-flex flex-column justify-content-end is-card-ovl'>
              <span className='is-card-vl'>
                <h3 className='card-title my_card_tittle'>{el.name}</h3>
              </span>
            </Card.ImgOverlay>
          </Card>
        </a>
      </Link>
    </Col>
  );
};

export default InsuranceItem;

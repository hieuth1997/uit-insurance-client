import React from 'react';
import PropTypes from 'prop-types';
import { Card, Col } from 'react-bootstrap';
import { Link } from '../../server/routes';
import { srcImg } from '../../helpers/setup';

function NewsItem({ el }) {
  return (
    <Col md='4' sm='12' className='p-0'>
      <Link route='tin-tuc/' params={{ slug: el.slug }}>
        <a href={'/tin-tuc/' + el.slug}>
          <Card className='no_padding cursor-pointer'>
            <Card.Img className='is-card' src={srcImg(el.picture)} alt={el.picture} title={el.name} />
            <Card.ImgOverlay className='h-100 d-flex flex-column justify-content-end is-card-ovl'>
              <span className='is-card-vl'>
                <h3 className='card-title text-news'>{el.name}</h3>
              </span>
            </Card.ImgOverlay>
          </Card>
        </a>
      </Link>
    </Col>
  );
}

NewsItem.propTypes = {};

export default NewsItem;

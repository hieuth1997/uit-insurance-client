import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Row } from 'react-bootstrap';
import { getNewsCate } from './actions';
import NewsItem from './NewsItem';

const NewsCate = ({ home }) => {
  const { news } = home;
  let content;
  if (news.length) content = news.map((el, key) => <NewsItem el={el} key={key} />);
  return (
    <Container fluid className='my_bg_fluid_tin_tuc'>
      <Container>
        <h2 className='my_title_new' style={{ color: '#000', padding: 0 }}>
          TIN TỨC
        </h2>
        <Row className='justify-content-center'>{content}</Row>
      </Container>
    </Container>
  );
};

const mapStateToProps = state => ({
  home: state.home
});

const mapDispatchToProps = {
  getNewsCate
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsCate);

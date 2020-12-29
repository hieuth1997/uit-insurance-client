import React from 'react';
import { connect } from 'react-redux';
import NewsDetail from '../../components/news/NewsDetail';
import { getNewsItemDetail } from '../../components/news/actions';

const newsDetailPage = () => (
  <>
    <NewsDetail />
  </>
);

newsDetailPage.getInitialProps = async ({ query, reduxStore }) => {
  await reduxStore.dispatch(getNewsItemDetail(query.slug));
  return {};
};

export default connect()(newsDetailPage);

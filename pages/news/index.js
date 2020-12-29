import React from 'react';
import NewsCate from '../../components/news/NewsCate';
import { connect } from 'react-redux';
import { getNewsList } from '../../components/news/actions';

const NewsPage = () => (
  <>
    <NewsCate />
  </>
);
NewsPage.getInitialProps = async ({ query, reduxStore }) => {
  await reduxStore.dispatch(getNewsList(query.slug));
  return {};
};

export default connect()(NewsPage);

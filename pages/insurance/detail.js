import React from 'react';
import InsuranceDetail from '../../components/insurance/InsuranceDetail';
import { getItemDetail } from '../../components/insurance/actions';
import { connect } from 'react-redux';

const InsuranceDetailPage = () => (
  <>
    <InsuranceDetail />
  </>
);

InsuranceDetailPage.getInitialProps = async ({ query, reduxStore }) => {
  await reduxStore.dispatch(getItemDetail(query.slug));
  return {};
};

export default connect()(InsuranceDetailPage);

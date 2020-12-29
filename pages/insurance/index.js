import React from 'react';
import InsuranceCate from '../../components/insurance/InsuranceCate';
import { connect } from 'react-redux';
import { getCateItem } from '../../components/insurance/actions';
const InsurancePage = () => (
  <>
    <InsuranceCate />
  </>
);

InsurancePage.getInitialProps = async ({ query, reduxStore }) => {
  await reduxStore.dispatch(getCateItem(query.slug));
  return {};
};

export default connect()(InsurancePage);

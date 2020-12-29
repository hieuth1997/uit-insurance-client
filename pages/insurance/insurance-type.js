import React from 'react';
import { connect } from 'react-redux';
import { getItemByType } from '../../components/insurance/actions';
import InsuranceType from '../../components/insurance/InsuranceType';
const InsuranceTypePage = ({ type }) => (
  <>
    <InsuranceType type={type} />
  </>
);

InsuranceTypePage.getInitialProps = async ({ req, asPath, reduxStore }) => {
  const type = req ? req.url.substring(1) : asPath.substring(1);
  await reduxStore.dispatch(getItemByType(type));
  return { type };
};

export default connect()(InsuranceTypePage);

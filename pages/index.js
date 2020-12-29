import React from 'react';
import Head from '../components/Header';
import HomeCarousel from '../components/home/HomeCarousel';
import InsuranceCate from '../components/home/InsuranceCate';
import NewsCate from '../components/home/NewsCate';
import { getInsuranceCate, getNewsCate, getBanner } from '../components/home/actions';
import { connect } from 'react-redux';
import Slogan from '../components/home/Slogan';
import Founder from '../components/home/Founder';
import { srcHst } from '../helpers/setup';
import InsuranceType from '../components/home/InsuranceType';

class Home extends React.PureComponent {
  render() {
    return (
      <>
        <Head
          title='Trang chủ - Hệ thống cung cấp bảo hiểm UITI'
          description='Hệ thống website cung cấp cho người dùng nhiều hình thức bảo hiểm đa dạng 
    như bảo hiểm khách hàng cá nhân và khách hàng doanh nghiệp về các lĩnh vực như bảo hiểm con người, 
    bảo hiểm ô ô, xe máy, bảo hiểm du lịch, bảo hiểm hàng hóa, bảo hiểm tài sản, bảo hiểm trách nhiệm
    '
          ogImage='/static/image/card/Person/Travel/travel3.jpg'
          url={srcHst('')}
          canonicalUrl={srcHst('')}
        />
        <HomeCarousel />
        <h1 className='h1-seo'>Bảo hiểm UITI</h1>
        <InsuranceCate />
        <InsuranceType />
        <NewsCate />
        <Slogan />
        <Founder />
      </>
    );
  }
}
Home.getInitialProps = async ({ reduxStore }) => {
  await Promise.all([reduxStore.dispatch(getInsuranceCate()), reduxStore.dispatch(getNewsCate()), reduxStore.dispatch(getBanner())]);
  return {};
};

export default connect()(Home);

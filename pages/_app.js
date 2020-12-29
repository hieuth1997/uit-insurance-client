import App, { Container } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import withRedux from '../redux/with-redux';
import getAuth from '../helpers/getAuth';
import NavBar from '../components/NavBar';
import Foot from '../components/Footer';
import Router from 'next/router';
import { ToastContainer } from 'react-toastify';
import { getInsuranceCateNameList } from '../components/home/actions';
import NProgress from 'nprogress';
import setup from '../helpers/setup';

setup();

Router.events.on('routeChangeStart', url => {
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

class MyApp extends App {
  componentWillMount() {
    const { reduxStore } = this.props;
    reduxStore.dispatch(getInsuranceCateNameList());
  }
  componentDidMount() {
    const { reduxStore } = this.props;
    getAuth(reduxStore);
  }
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Container>
        <Provider store={reduxStore}>
          <ToastContainer autoClose={2000} />
          <NavBar />
          <Component {...pageProps} />
          <Foot />
        </Provider>
      </Container>
    );
  }
}

export default withRedux(MyApp);

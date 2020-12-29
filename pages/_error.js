import React from 'react';
import Header from '../components/Header';
import { Card } from 'react-bootstrap';

class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
  }

  render() {
    return (
      <>
        <Header />
        <Card bg='warning' style={{ width: '19rem', margin: 'auto', marginTop: '8rem' }}>
          <Card.Img src='/static/404.svg' alt="404"/>
          <Card.Title>
            {this.props.statusCode
              ? `An error ${this.props.statusCode} occurred on server`
              : 'An error occurred on client'}
          </Card.Title>
        </Card>
      </>
    );
  }
}

export default Error;

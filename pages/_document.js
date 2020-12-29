import Document, { Head, Main, NextScript } from 'next/document';

export default class extends Document {
  render() {
    return (
      <html lang='vi'>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

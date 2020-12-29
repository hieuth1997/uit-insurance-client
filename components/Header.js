import React from 'react';
import NextHead from 'next/head';
import { string } from 'prop-types';

const defaultDescription = '';
const defaultOGURL = '';
const defaultOGImage = '';
const defaultKeywords = '';
const defaultCanonicalUrl = '/';

const Header = props => (
  <NextHead>
    <meta charSet='UTF-8' />
    <title>{props.title || ''}</title>
    <meta name='description' content={props.description || defaultDescription} />
    <meta name='keywords' content={props.keywords || defaultKeywords} />
    <meta name='viewport' content='width=device-width, initial-scale=1' />
    <link rel='icon' href='/static/favicon.ico' />
    <meta name='revisit-after' content='1 days' />
    <meta httpEquiv='Content-Language' content='vi' />
    <meta name='copyright' content='Tổng Công ty Cổ phần Bảo hiểm UITI' />
    <meta name='author' content='Tổng Công ty Cổ phần Bảo hiểm UITI' />
    <meta name='robots' content='index' />
    <meta property='og:url' content={props.url || defaultOGURL} />
    <meta property='og:title' content={props.title || ''} />
    <meta property='og:description' content={props.description || defaultDescription} />
    <meta name='twitter:site' content={props.url || defaultOGURL} />
    <meta name='twitter:card' content='summary_large_image' />
    <meta name='twitter:image' content={props.ogImage || defaultOGImage} />
    <meta property='og:image' content={props.ogImage || defaultOGImage} />
    <meta property='og:image:width' content='1200' />
    <meta property='og:image:height' content='630' />
    <link rel='shortcut icon' href='/favicon.ico' />
    <meta name='theme-color' content='#ffffff' />
    <link rel='manifest' href='/manifest.json' />
    {props.canonicalUrl && <link rel='canonical' href={props.canonicalUrl || defaultCanonicalUrl} />}
    <link href='https://fonts.googleapis.com/css?family=Nunito' rel='stylesheet' />
    <link
      rel='stylesheet'
      href='https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'
      integrity='sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T'
      crossOrigin='anonymous'
    />
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.min.css' />
    <link rel='stylesheet' type='text/css' href='/static/css/mystyle.min.css' />
    <link rel='stylesheet' type='text/css' href='/static/css/nprogress.min.css' />
    <link href='/static/css/quill.core.min.css' rel='stylesheet' />
    <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/react-toastify@5.1.0/dist/ReactToastify.min.css' />
    <link href='https://fonts.googleapis.com/css?family=Nunito' rel='stylesheet' />
    <script defer src='https://www.paypal.com/sdk/js?client-id=AaF-qHHKS7xuKza-6pDOZp5TKFsReK4a9F3s9P8cN1wudsD4MhPfT7D00U5hSXNYlQv3m0PnRjdyvPnz' />
  </NextHead>
);

Header.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string,
  keywords: string,
  canonicalUrl: string
};

export default Header;

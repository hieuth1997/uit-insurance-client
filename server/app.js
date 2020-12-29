const express = require('express');
const next = require('next');
const compression = require('compression');
const port = parseInt(process.env.PORT, 10) || 3030;
const dev = process.env.NODE_ENV !== 'production';
console.log(process.env.NODE_ENV, 'production');
const app = next({ dev });
const { join, resolve } = require('path');
const { parse } = require('url');
const cache = require('./cache');
const server = express();
const handle = app.getRequestHandler();
const sitemap = require('./sitemap');

app
  .prepare()
  .then(() => {
    server.use(compression());
    server.use(cache(app));
    server.use(async (req, res) => {
      const parsedUrl = parse(req.url, true);
      const { pathname } = parsedUrl;
      const rootStaticFiles = ['/robots.txt', '/manifest.json', '/sitemap.xml', '/favicon.ico', '/service-worker.js'];
      if (rootStaticFiles.includes(pathname)) {
        let filePath = join(__dirname, '..', 'static', pathname);
        if (pathname === '/sitemap.xml') {
          res.header('Content-Type', 'application/xml');
          res.send(await sitemap());
        }
        if (pathname === '/service-worker.js') filePath = join(__dirname, '..', '.next/static', pathname);
        app.serveStatic(req, res, filePath);
      } else {
        handle(req, res, parsedUrl);
      }
    });
    server.listen(port, err => {
      if (err) console.log(err);
      console.log(`> Ready on http://localhost:${port}`);
    });
  })
  .catch(err => console.log(err));

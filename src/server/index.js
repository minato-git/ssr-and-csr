import express from 'express';
import cors from 'cors';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router-dom';
import routes from '../shared/routes';
import App from '../shared/App';
import compression from 'compression';
import serialize from 'serialize-javascript';
import {getHomeData, getPdpData} from './../utils/utils';

const app = express();

app.use(compression({ filter: shouldCompress }));

function shouldCompress(req, res) {
  if (req.headers['x-no-compression']) {
    return false;
  }
  return compression.filter(req, res);
}

app.use(cors());
app.use(express.static('public'));

const getTemplate = (markup, initialData) => {
  return `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Tokopedia</title>
          <link rel="stylesheet" href="/css/main.css">
          <script src="/bundle.js" defer></script>
        </head>

        <body>
          <script>window.__initialData__=${serialize(initialData)}</script>
          <div id="root">${markup}</div>
        </body>
      </html>
 `;
};

const getMarkup = (url, context) => {
  return renderToString(
    <StaticRouter location={url} context={context}>
      <App />
    </StaticRouter>
  );
};

app.get('/', (req, res, next) => {
  getHomeData().then((initialData) => {
    const context = { initialData };
    const markup = getMarkup(req.url, context);
    res.send(getTemplate(markup, initialData));
  }).catch(next);
});

app.get('/pdp/:id', (req, res, next) => {
  getPdpData(req.params.id).then((initialData) => {
    const context = { initialData };
    const markup = getMarkup(req.url, context);
    res.send(getTemplate(markup, initialData));
  }).catch(next);
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is listening');
});

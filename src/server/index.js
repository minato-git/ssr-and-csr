import express from 'express';
import cors from 'cors';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router-dom';
import routes from '../shared/routes';
import App from '../shared/App';
import compression from 'compression';
import serialize from 'serialize-javascript';

const app = express();

app.use(compression({ filter: shouldCompress }));

function shouldCompress(req, res) {
  if (req.headers['x-no-compression']) {
    // don't compress responses with this request header
    return false;
  }

  // fallback to standard filter function
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
  const activeRoute = routes.find(route => matchPath(req.url, route));

  const requestInitialData =
    activeRoute &&
    activeRoute.component.requestInitialData &&
    activeRoute.component.requestInitialData();

  console.log('active', activeRoute);

  Promise.resolve(requestInitialData)
    .then(initialData => {
      const context = { initialData };
      // console.log('context', context);
      const markup = getMarkup(req.url, context);
      // console.log('markup ==> ', markup);
      // console.log('template ==> ', getTemplate(markup));
      res.send(getTemplate(markup, initialData));
    })
    .catch(next);
});

app.get('/pdp/:id', (req, res, next) => {
  const activeRoute = routes.find(route => matchPath(req.url, route));

  const requestInitialData =
    activeRoute &&
    activeRoute.component.requestInitialData &&
    activeRoute.component.requestInitialData(req.params.id);

  console.log('active', activeRoute);

  Promise.resolve(requestInitialData)
    .then(initialData => {
      const context = { initialData };
      console.log('context', context);
      const markup = getMarkup(req.url, context);
      res.send(getTemplate(markup, initialData));
    })
    .catch(next);
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is listening');
});

import React from 'react';
import { renderToString } from 'react-dom/server';
import ssrPrepass from 'react-ssr-prepass';
import getExtractor from './getExtractor';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from '../shared/containers';

const createJsx = async (req, store) => {
  let extractor = getExtractor();

  let context = {};

  let jsx = extractor.collectChunks(
    <Provider store={ store }>
      <StaticRouter location={ req.url } context={ context }>
        <App />
      </StaticRouter>
    </Provider>
  );

  if (context.url) {
    res.redirect(context.url);
    return;
  }

  await ssrPrepass(jsx);

  return renderToString(jsx);
};

export default createJsx;

import { Helmet } from 'react-helmet';
import serialize from 'serialize-javascript';
import getExtractor from './getExtractor';

const layout = (html, preloadedState) => {
  const helmet = Helmet.renderStatic();
  const extractor = getExtractor();
  const scriptTags = extractor.getScriptTags();
  const styleTags = extractor.getStyleTags();

  return (`
    <!DOCTYPE html>
      <html>
        <head>
          ${helmet.title.toString()}
          ${styleTags}
        </head>
        <body>
          <main id="app">${html}</main>
        </body>
        <script>window.__PRELOADED_STATE__=${serialize(preloadedState)}</script>
        ${scriptTags}
      </html>
  `);
};

export default layout;

import Express from 'express';
import configureStore from '../shared/store/configureStore';
import sendContent from './sendContent';
import getExternalData from './getExternalData'

const app = new Express();
const port = process.env.PORT || 8080;

app.use('/assets/node', Express.static('dist/node'));
app.use('/assets/web', Express.static('dist/web'));

app.get('*', async (req, res) => {
  const store = configureStore();

  getExternalData( req, res, store );

  await sendContent(req, store);

  store.close();
});

app.listen(port, error => {
  if (error) {
    console.log('error occurred: ', error);
  } else {
    console.log(`SERVER HAS STARTED ON ${port}`)
  }
});

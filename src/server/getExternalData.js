import rootSaga from '../shared/sagas/rootSaga';
import sendContent from './sendContent';

const getExternalData = async (req, res, store) => {
  store
    .runSaga(rootSaga)
    .toPromise()
    .then( () => sendContent(req, store) )
    .then( result => res.status(200).send(result) )
    .catch( e => res.status(500).send(e.message) );
};

export default getExternalData;

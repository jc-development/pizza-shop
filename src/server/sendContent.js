import layout from './layout';
import createJsx from './createJsx';

const sendContent = async (req, store) => {
  const result = await createJsx(req, store).catch(e => console.log('error in createJsx: ', e));
  return layout(result, JSON.stringify( store.getState() ));
};

export default sendContent;

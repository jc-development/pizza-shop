import path from 'path';
import { ChunkExtractor } from '@loadable/server';

const getExtractor = () => new ChunkExtractor({ statsFile: path.resolve(__dirname, '../web/loadable-stats.json') });

export default getExtractor;

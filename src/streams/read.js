import path from 'path';
import { createReadStream } from 'fs';

const WORK_PATH = path.join(process.cwd(), './src/streams/');
const FILE_PATH = './files/fileToRead.txt';

export const read = async () => {
  const readStream = createReadStream(path.join(WORK_PATH, FILE_PATH));
  readStream.on('data', chunk => process.stdout.write(chunk, 'utf8'));
};

read();

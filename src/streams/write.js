import path from 'path';
import { createWriteStream } from 'fs';

const WORK_PATH = path.join(process.cwd(), './src/streams/');
const FILE_PATH = './files/fileToWrite.txt';

export const write = async () => {
  const writeStream = createWriteStream(path.join(WORK_PATH, FILE_PATH));

  process.stdin.on('data', data => {
    writeStream.write(data, 'utf8');
  });
};

write();

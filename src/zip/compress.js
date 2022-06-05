import path from 'path';
import fs from 'fs';
import zlib from 'zlib';

const WORK_PATH = path.join(process.cwd(), './src/zip/');
const FILE_PATH = './files/fileToCompress.txt';
const FINAL_PATH = './files/archive.gz';

export const compress = async () => {
  const zip = zlib.createGzip();

  const read = fs.createReadStream(path.join(WORK_PATH, FILE_PATH));
  const write = fs.createWriteStream(path.join(WORK_PATH, FINAL_PATH));

  read.pipe(zip).pipe(write);
};

compress();

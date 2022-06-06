import path from 'path';
import fs from 'fs';
import zlib from 'zlib';

const WORK_PATH = path.join(process.cwd(), './src/zip/');
const FILE_PATH = './files/archive.gz';
const FINAL_PATH = './files/fileToCompress.txt';

export const decompress = async () => {
  const unzip = zlib.createUnzip();

  const read = fs.createReadStream(path.join(WORK_PATH, FILE_PATH));
  const write = fs.createWriteStream(path.join(WORK_PATH, FINAL_PATH));
  
  read.pipe(unzip).pipe(write);
};

decompress();

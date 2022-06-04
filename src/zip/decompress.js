import path from 'path';
import fs from 'fs';
import zlib from 'zlib';

const WORK_PATH = path.join(process.cwd(), './src/zip/');
const FILE_PATH = './files/archive.gz';
const FINAL_PATH = './files/fileToCompress.txt';

export const decompress = async () => {
  //file-name : compress-file-using-zlib.js
  // Including the required modules
  var unzip = zlib.createUnzip();

  var read = fs.createReadStream(path.join(WORK_PATH, FILE_PATH));
  var write = fs.createWriteStream(path.join(WORK_PATH, FINAL_PATH));
  //Transform stream which is zipping the input file
  read.pipe(unzip).pipe(write);
};

decompress();

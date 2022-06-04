import { readdir, readFile } from 'fs/promises';
import path from 'path';

import * as util from './util.js';

const FILE_NAME = 'fileToRead.txt';

export const read = async () => {
  try {
    const files = await readdir(util.FOLDER_PATH).catch(err => {
      throw new Error(util.ERROR_MESSAGE);
    });

    if (!files.includes(FILE_NAME)) {
      throw new Error(util.ERROR_MESSAGE);
    }
    const fileContent = await readFile(path.join(util.FOLDER_PATH, FILE_NAME), { encoding: 'utf8' });
    console.log(fileContent);
  } catch (err) {
    throw err;
  }
};

read();

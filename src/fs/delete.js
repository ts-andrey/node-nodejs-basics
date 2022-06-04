import { readdir, unlink } from 'fs/promises';
import path from 'path';

import * as util from './util.js';

const FILE_NAME = 'fileToRemove.txt';

export const remove = async () => {
  try {
    const files = await readdir(util.FOLDER_PATH).catch(err => {
      throw new Error(util.ERROR_MESSAGE);
    });

    if (!files.includes(FILE_NAME)) {
      throw new Error(util.ERROR_MESSAGE);
    }
    unlink(path.join(util.FOLDER_PATH, FILE_NAME));
  } catch (err) {
    throw err;
  }
};

remove();

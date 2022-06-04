import { readdir } from 'fs/promises';
import path from 'path';

import * as util from './util.js';

export const list = async () => {
  try {
    const files = await readdir(util.FOLDER_PATH).catch(err => {
      throw new Error(util.ERROR_MESSAGE);
    });

    console.log(files);

  } catch (err) {
    throw err;
  }
};

list();

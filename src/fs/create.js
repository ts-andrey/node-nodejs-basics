import { readdir, appendFile } from 'fs/promises';
import path from 'path';

import * as util from './util.js';

const FILE_NAME = 'fresh.txt';

export const create = async () => {
  try {
    const files = await readdir(util.FOLDER_PATH).catch(err => {
      throw new Error(util.ERROR_MESSAGE);
    });

    if (files.includes(FILE_NAME)) {
      throw new Error(util.ERROR_MESSAGE);
    }

    await appendFile(path.join(util.FOLDER_PATH, FILE_NAME), 'I am fresh and young');
  } catch (err) {
    throw err;
  }
};

create();


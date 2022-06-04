import { readdir, rename as fsRename } from 'fs/promises';
import path from 'path';

import * as util from './util.js';

const FILE_NAME_WRONG = 'wrongFilename.txt';
const FILE_NAME_RIGHT = 'properFilename.md';

export const rename = async () => {
  try {
    const files = await readdir(util.FOLDER_PATH).catch(err => {
      throw new Error(util.ERROR_MESSAGE);
    });

    if (files.includes(FILE_NAME_RIGHT)) {
      throw new Error(util.ERROR_MESSAGE);
    }
    if (!files.includes(FILE_NAME_WRONG)) {
      throw new Error(util.ERROR_MESSAGE);
    }
    await fsRename(path.join(util.FOLDER_PATH, FILE_NAME_WRONG), path.join(util.FOLDER_PATH, FILE_NAME_RIGHT));
  } catch (err) {
    throw err;
  }
};

rename();

import { readdir, stat } from 'fs/promises';
import path from 'path';

import * as util from './util.js';

export const list = async () => {
  const arr = [];
  async function getFiles(pathFolder = util.FOLDER_PATH) {
    try {
      const files = await readdir(pathFolder).catch(err => {
        throw new Error(util.ERROR_MESSAGE);
      });

      for (const file of files) {
        const stats = await stat(path.join(pathFolder, file));
        if (stats.isDirectory()) {
          await getFiles(path.join(pathFolder, file));
        } else {
          arr.push(file);
        }
      }
    } catch (err) {
      throw err;
    }
  }
  await getFiles();
  console.log(arr);
};

list();

import { readdir, mkdir, copyFile, stat } from 'fs/promises';
import path from 'path';

import * as util from './util.js';

const workPath = path.join(util.WORK_PATH, util.WORK_FOLDER);
const copyPath = path.join(util.WORK_PATH, util.COPY_FOLDER);

export const copy = async (pathFolder = workPath, copyPathFolder = copyPath) => {
  try {
    const files = await readdir(pathFolder).catch(err => {
      throw new Error(util.ERROR_MESSAGE);
    });

    await mkdir(path.join(copyPathFolder), { recursive: false }).catch(err => {
      throw new Error(util.ERROR_MESSAGE);
    });

    for (const file of files) {
      const stats = await stat(path.join(pathFolder, file));
      if (stats.isDirectory()) {
        await copy(path.join(pathFolder, file), path.join(copyPathFolder, file));
      } else {
        await copyFile(path.join(pathFolder, file), path.join(copyPathFolder, file));
      }
    }
  } catch (err) {
    throw err;
  }
};

copy();

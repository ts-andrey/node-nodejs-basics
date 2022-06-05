import { readFile } from 'fs/promises';
import crypto from 'crypto';

import { join } from 'path';

const WORK_PATH = join(process.cwd(), './src/hash/');
const FILE_PATH = './files/fileToCalculateHashFor.txt';

export const calculateHash = async () => {
  const data = await readFile(join(WORK_PATH, FILE_PATH));
  
  const hash = crypto.createHash('sha256').update(data).digest('hex');

  return hash;
};

console.log(await calculateHash());

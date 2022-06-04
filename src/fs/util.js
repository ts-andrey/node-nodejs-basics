import path from 'path';

export const WORK_FOLDER = 'files';
export const COPY_FOLDER = 'files_copy';

export const ERROR_MESSAGE = 'FS operation failed';

export const WORK_PATH = path.join(process.cwd(), './src/fs/');
export const FOLDER_PATH = path.join(WORK_PATH, WORK_FOLDER);


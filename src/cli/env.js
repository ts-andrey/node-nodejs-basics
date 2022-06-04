import { env } from 'process';

export const parseEnv = () => {
  let result = '';
  const vars = env.npm_lifecycle_script.split(' ').slice(2);
  vars.forEach(el => {
    if (el.startsWith('RSS_')) {
      if (result === '') {
        result += el;
      } else {
        result += `; ${el}`;
      }
    }
  });
  console.log(result);
};

parseEnv();

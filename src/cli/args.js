import { argv } from 'process';

export const parseArgs = () => {
  const args = argv.slice(2);
  let result = '';
  for (let i = 0; i <= args.length - 1; i += 2) {
    if (result === '') {
      result += `${args[i].slice(2)} is ${args[i + 1]}`;
    } else {
      result += `, ${args[i].slice(2)} is ${args[i + 1]}`;
    }
  }
  console.log(result);
};

parseArgs();

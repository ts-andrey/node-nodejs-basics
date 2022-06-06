export const transform = async () => {
  process.stdin.on('data', data => {
    process.stdout.write(`${data.reverse()}\n\n`, 'utf8');
  });
};

transform();

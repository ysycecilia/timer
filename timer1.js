const args = process.argv.slice(2);

for (let time of args) {
  if (time >= 0 && !isNaN(time))
    setTimeout(() => {
      process.stdout.write('beep');
    }, time * 1000);
}
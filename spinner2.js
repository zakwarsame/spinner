const spinner = function() {
  let timer = 100;
  let spinner = ["|", "/", "-", "\\", "|"];
  for (i = 0; i < 4; i++) {
    for (const item of spinner) {
      setTimeout(() => {
        process.stdout.write(`\r${item}   `);
      }, timer);
      timer += 200;
    }
  }
  setTimeout(() => {
    console.log();
  }, timer);
};

spinner();

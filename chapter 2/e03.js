var grid = '';

for(var i = 0; i < 8; i += 1) {
	for(var j = 0; j < 8; j += 1) {
    if (j % 2 == 0) {
      if (i % 2 == 0) {
        grid += ' ';
      } else {
        grid += '#';
      }
    } else {
      if (i % 2 == 0) {
        grid += '#';
      } else {
        grid += ' ';
      }
    }
  };
  grid += "\n";
};

console.log(grid);

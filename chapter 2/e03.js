for(var i = 0; i <= 8; i += 1)
	for(var j = 0; j <= 8; j += 1)
		if (j == 8)
			console.log(' ');
		else if (j % 2 == 0 && i % 2 == 0)
			process.stdout.write(" ");
		else
			process.stdout.write("#");


function multiply() {
	const value1 = document.getElementById('a').value;
	const value2 = document.getElementById('b').value;

	const c = calc(value1, value2);

	console.log(c);

	document.getElementById('resault').innerText = `
		Equasion: a * b = c
		a = ${value1}
		b = ${value2}
		please note that all "0" are automatically changed to "1"
		Resault: ${c}`;
}

var calc = (a, b) => {
	console.log(`before`)
	console.log(a)
	console.log(b)

	a = (a == 0 ? 1 : a);
	b = (b == 0 ? 1 : b);

	console.log(`after`)
	console.log(a)
	console.log(b)

	return a * b
};

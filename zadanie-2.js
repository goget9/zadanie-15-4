function multiply() {
	const value1 = document.getElementById('a').value;
	const value2 = document.getElementById('b').value;

	const c = calc(value1, value2);

	console.log(`Zadanie 2`);
	console.log(c);
	console.log(``);

	document.getElementById('resault').innerText = `
		Equasion: a * b = c
		a = ${value1}
		b = ${value2}
		please note that all "0" are automatically changed to "1"
		Resault: ${c}`;
}

var calc = (a, b) => {

	a = (a == 0 ? 1 : a);
	b = (b == 0 ? 1 : b);

	return a * b;
};

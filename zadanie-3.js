const numbers = [ 1, 5, 9, 3, 4 ];
const average = arr => arr.reduce( ( a, b ) => a + b, 0 ) / arr.length;
   
console.log(`zadanie 3`);
console.log(average(numbers));
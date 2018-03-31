const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

function averageGrade(...grds){grds.reduce((a,b)=>a+b) / grds.length};

console.log(`zadanie 4`);
console.log(average(grades));
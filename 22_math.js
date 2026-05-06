// MATHematics == Matemáticas

console.log(Math.PI);
console.log(Math.E);

console.log(Math.cos(90));

console.log(Math.min(1,2,3,4,-5, -6.78));
console.log(Math.max(1,2,3,4,-5));

console.log(Math.round(5.4));
console.log(Math.round(5.5));
console.log(Math.round(5.0));

console.log(Math.ceil(5.4));
console.log(Math.ceil(5.1));
console.log(Math.ceil(5.0));

console.log(Math.floor(5.9));

console.log(Math.trunc(5.9));

console.log(Math.random());
console.log(Math.random());

function random1to100() {
    return Math.floor(Math.random() * 100) + 1
}

console.log(random1to100());

function numAleatorioPorRango(num1, num2) {
    const min = Math.min(num1, num2)
    const max = Math.max(num1, num2)
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 0; i<1000; i++) {
    console.log(numAleatorioPorRango(5,1));
}
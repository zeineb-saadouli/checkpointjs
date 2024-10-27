//string functions
function inverseMot(chaine){

    let inverse= chaine.split('').reverse().join();
    console.log(inverse);
}
inverseMot("bonjour");

function countCharacters(ch) {
    return ch.length;
}
let exampleString = "Hello, world!";
let characterCount = countCharacters(exampleString);
console.log(`The number of characters is: ${characterCount}`);

function capitalizeWords(ch) {
    return ch.split(' ').map(mot => {
        return mot.charAt(0).toUpperCase() + mot.slice(1).toLowerCase();
    }).join(' ');
}
const sentence=capitalizeWords(" summer time");
console.log(sentence);
// array functions
function findMinimum(tab) {
  return Math.min(...tab);
}
// le maximum et le minimum d'un tableau
function findMaximum(tab) {
  return Math.max(...tab);
} 
// Exemple d'utilisation
const numbers = [5, 3, 9, 1, 7];
const min = findMinimum(numbers);
const max = findMaximum(numbers);
console.log(min,max);

//la somme des éléments d'un tableau
function sommetableau(Tab) {
    return Tab.reduce((acc, curr) => acc + curr, 0);
}
 //exemple d'utilisation
const numbers = [1, 2, 3, 4, 5];
const total = sommetableau(numbers);
console.log(total);

// filter un tableau 
function filterTab(tab, condition) {
    return tab.filter(condition);
}
const nombre = [1, 2, 3, 4, 5, 6, 9, 12];
const chaquenombre = filterTab(nombre, num => num % 3 === 0);
console.log(chaquenombre);
// mathematical functions
function factorial(n) {
    if (n < 0) return undefined; 
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
var b=factorial(19);
console.log(b);
var c=factorial(-3);
console.log(c);

function primeNumber(num) {
    if (num <= 1) return false; // 0 et  1 ne sont pas des nombres premiers
    if (num <= 3) return true;  // 2 et 3 sont des nombres premiers
    
    // on doit aussi eliminer les multiples de 2 et 3
    if (num % 2 === 0 || num % 3 === 0) return false;

    // verifier les nombres compris entre 5 et le racine carré du nombre (il ne doit pas etre un multiples des autres nombres premiers)
    for (let i = 5; i ** 2 <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true; 
}
var num= primeNumber(230);
console.log(num);
var b=primeNumber(103);
console.log(b);
var p= primeNumber(-13);
console.log(p);
 
function fibonacci(num) {
    const sequence = [];
    for (let i = 0; i < num; i++) {
        if (i === 0) {
            sequence.push(0);
        } else if (i === 1) {
            sequence.push(1);
        } else {
            sequence.push(sequence[i - 1] + sequence[i - 2]);
        }
    }
    return sequence;
}
console.log(fibonacci(102));


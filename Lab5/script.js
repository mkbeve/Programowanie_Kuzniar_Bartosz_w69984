// // zad 1
// let numbers = [];

// function getUserNumbers() {
//     for (let i = 0; i < 10; i++) {
//         let userInput = parseInt(prompt(`Podaj liczbę całkowitą (${i + 1}/10):`), 10);
//         while (isNaN(userInput)) {
//             userInput = parseInt(prompt(`Niepoprawna wartość. Podaj liczbę całkowitą (${i + 1}/10):`), 10);
//         }
//         numbers.push(userInput);
//     }
// }

// function displayNumbers(numbers) {
//     console.log("Podane liczby to:");
//     numbers.forEach((number, index) => {
//         console.log(`Liczba ${index + 1}: ${number}`);
//     });
// }

// function searchNumber(numbers) {
//     let searchValue = parseInt(prompt("Podaj liczbę całkowitą do wyszukania:"), 10);
//     while (isNaN(searchValue)) {
//         searchValue = parseInt(prompt("Niepoprawna wartość. Podaj liczbę całkowitą do wyszukania:"), 10);
//     }
//     let count = numbers.filter(number => number === searchValue).length;
//     console.log(`Liczba ${searchValue} występuje w tablicy ${count} razy.`);
// }

// getUserNumbers();
// displayNumbers(numbers);
// searchNumber(numbers);

//zad2

// let numbers = [1, 2, 3, 4, 5, 6];

// function displayNumbers(numbers) {
//     console.log("Obecna tablica:");
//     console.log(numbers.join(", "));
// }

// function insertNumberAtIndex(numbers) {
//     let newNumber = parseInt(prompt("Podaj liczbę całkowitą do wstawienia:"), 10);
//     while (isNaN(newNumber)) {
//         newNumber = parseInt(prompt("Niepoprawna wartość. Podaj liczbę całkowitą do wstawienia:"), 10);
//     }

//     let index = parseInt(prompt(`Podaj indeks, w którym chcesz wstawić liczbę (0-${numbers.length}):`), 10);
//     while (isNaN(index) || index < 0 || index > numbers.length) {
//         index = parseInt(prompt(`Niepoprawna wartość. Podaj indeks, w którym chcesz wstawić liczbę (0-${numbers.length}):`), 10);
//     }

//     numbers.splice(index, 0, newNumber); // Wstawienie nowej liczby w podanym indeksie

//     console.log(`Po wstawieniu liczby ${newNumber} na indeks ${index}:`);
//     displayNumbers(numbers);
// }

// displayNumbers(numbers);

// insertNumberAtIndex(numbers);

//zad3

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function reverseArray(arr) {
//     return arr.reverse();
// }

// let reversedNumbers = reverseArray(numbers);

// console.log("Odwrócony ciąg liczb:", reversedNumbers.join(', '));
// alert("Odwrócony ciąg liczb: " + reversedNumbers.join(', '));

//zad 4 

// function generateRandomNumbers() {
//     const arraySize = 10; // Rozmiar tablicy
//     const numbers = [];

//     for (let i = 0; i < arraySize; i++) {
//         const randomNum = Math.floor(Math.random() * 100) + 1; // Liczby od 1 do 100
//         numbers.push(randomNum);
//     }

//     displayNumbers(numbers);
// }

// function displayNumbers(numbers) {
//     const numbersDiv = document.getElementById('numbers');
//     numbersDiv.innerHTML = ''; // Wyczyść zawartość elementu

//     const ul = document.createElement('ul');
//     numbers.forEach(number => {
//         const li = document.createElement('li');
//         li.textContent = number;
//         ul.appendChild(li);
//     });

//     numbersDiv.appendChild(ul);
// }

//zad5

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let albumNumber = 69984; // Twój numer albumu
// let chosenValue = 3; // Wartość, której ilość wystąpień będziemy liczyć

// let sum = numbers.reduce((acc, val) => acc + val, 0);
// console.log("Suma wartości:", sum);

// let evenNumbers = numbers.filter(num => num % 2 === 0);
// console.log("Liczby parzyste:", evenNumbers);

// let multipliedByThree = numbers.map(num => num * 3);
// console.log("Wartości pomnożone razy 3:", multipliedByThree);

// numbers.push(albumNumber);
// let albumIndex = numbers.indexOf(albumNumber);
// console.log("Tablica po dodaniu numeru albumu:", numbers);
// console.log("Indeks numeru albumu:", albumIndex);


// let average = sum / numbers.length;
// console.log("Średnia arytmetyczna:", average);


// let maxNumber = Math.max(...numbers);
// console.log("Największa liczba:", maxNumber);


// let countOccurrences = numbers.filter(num => num === chosenValue).length;
// console.log(`Ilość wystąpień wartości ${chosenValue}:`, countOccurrences);

//zad 6


// function generateFibonacci(n) {
//     let fibonacci = [0, 1];
//     for (let i = 2; i < n; i++) {
//         fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
//     }
//     return fibonacci;
// }

// let fibonacciNumbers = generateFibonacci(100);
// console.log("Pierwsze 100 liczb ciągu Fibonacciego:", fibonacciNumbers);
//zad 7

// function sumOfTwoLargestNumbers(arr) {
//     if (arr.length < 2) {
//         throw new Error("Tablica musi zawierać co najmniej dwie liczby.");
//     }

//     arr.sort((a, b) => b - a);

//     return arr[0] + arr[1];
// }


// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let sum = sumOfTwoLargestNumbers(numbers);
// console.log("Suma dwóch największych liczb:", sum);


//zad 8


function removeDuplicates(arr) {
    
    return [...new Set(arr)];
}


let numbersWithDuplicates = [1, 2, 3, 3, 4, 5, 6, 6, 7, 7, 8, 9];
let uniqueNumbers = removeDuplicates(numbersWithDuplicates);
console.log("Tablica po usunięciu duplikatów:", uniqueNumbers);

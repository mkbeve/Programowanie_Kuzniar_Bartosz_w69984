//zad 1
// let count = 10;

// function zegar() {
//   console.log(count);
//   count--;


//   if (count < 0) {
//     clearInterval(odliczanie);
//     console.log("Happy New Year")
//   }
// }


// let odliczanie = setInterval(zegar, 1000);

//zad 2

// function silnia(n) {
//     if (n === 0 || n === 1) {
//       return 1;
//     } else {
//       let wynik = 1;
//       for (let i = 2; i <= n; i++) {
//         wynik *= i;
//       }
//       return wynik;
//     }
//   }
  

//   const liczba = prompt("Podaj liczbe: ");
//   console.log(`Silnia ${liczba} wynosi: ${silnia(liczba)}`);

//zad3

// var n = prompt("Podaj swój wiek: ")

// function wiek(n){
//     if (n < 18){
//         window.open("https://www.gry.pl/");
//     }
// }
// wiek(n)

//zad 4 - 6

var buttons = document.querySelectorAll(".color-button");
var lastClickedButton = null;

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        if (lastClickedButton !== null) {
            lastClickedButton.style.backgroundColor = "";
        }
        button.style.backgroundColor = "red"; 
        lastClickedButton = button;
    });
});

var toggleButton = document.getElementById("toggleButton");
var elementToToggle = document.getElementById("elementToToggle");

toggleButton.addEventListener("click", function() {

    if (elementToToggle.style.display === "none") {
        elementToToggle.style.display = "block";
    } else {
        elementToToggle.style.display = "none";
    }
});




//zad 8

function convertToCelsius() {
    var celsius = parseFloat(document.getElementById("celsiusInput").value);
    var fahrenheit = (celsius * 9/5) + 32;
    document.getElementById("resultToFahrenheit").innerHTML = celsius + "°C = " + fahrenheit.toFixed(2) + "°F";
}


function convertToFahrenheit() {
    var fahrenheit = parseFloat(document.getElementById("fahrenheitInput").value);
    var celsius = (fahrenheit - 32) * 5/9;
    document.getElementById("resultToCelsius").innerHTML = fahrenheit + "°F = " + celsius.toFixed(2) + "°C";
}

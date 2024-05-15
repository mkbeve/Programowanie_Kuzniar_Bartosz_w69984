// alert("Hello world") // zad2
// zad3
// var a = 10
// var b = 20
// var c = 23.2

// alert(a)
// alert(b)
// alert(c)

// console.log(a)
// console.log(b)
// console.log(c)

// document.getElementById("1").innerHTML = a;
// document.getElementById("2").innerHTML = b;
// document.getElementById("3").innerHTML = c;

// zad 4
// for(i=0;i<=100;i++){
//     console.log(i)
// }

//zad 5

// var a = 5
// var b = 6 
// var c = 9

// var p = (a + b + c) / 2

// var P = p * (p - a) * (p - b) * (p - c)
// var wynik = Math.sqrt(P)

// console.log("p jest równe " +p)
// console.log("P jest równe " +wynik)

// document.getElementById("1").innerHTML = p;
// document.getElementById("2").innerHTML = wynik;

//zad 6

// const name = prompt("Podaj imie: ");

// if(name){
//     alert("Witaj "+name)
// }

//zad 7

// var a = prompt("Podaj 1 liczbe")
// var b = prompt("Podaj 2 liczbe")

// a = parseInt(a)
// b = parseInt(b)

// var wynik = a + b

// document.write(wynik)


// console.log(wynik)


//zad 8

// var a = prompt("Podaj 1 liczbe")
// var b = prompt("Podaj 2 liczbe")
// var c = prompt("Podaj 3 liczbe")

// a = parseFloat(a)
// b = parseFloat(b)
// c = parseFloat(c)

// if(a > b && a > c){
//     console.log("Największą liczbą jest liczba 1: "+a)
//     document.getElementById("1").innerHTML = "Najwiekszą liczbą jest liczba 1: "+a
// }
// else if(b > a && b > c){
//     console.log("Największą liczbą jest liczba 2: "+b)
//     document.getElementById("2").innerHTML = "Najwiekszą liczbą jest liczba 2: "+b
// }
// else if(c > a && c > b){
//     console.log("Największą liczbą jest liczba 3: "+c)
//     document.getElementById("3").innerHTML = "Najwiekszą liczbą jest liczba 3: "+c
// }
// else{
//     console.log("Wszystkie liczby są równe ")
//     document.getElementById("1").innerHTML = "Wszystkie liczby są równe"
// }

// zad 9

 a=prompt("Podaj 1 liczbe")
b=prompt("Podaj 2 liczbe")
var reszta;
 a = parseFloat(a)
 b = parseFloat(b)
while (b) {
  reszta = a % b;
  a = b;
  b = reszta;
}

alert(a);
console.log("Najwiekszy wspólny dzielnik to: " +a)

//--------- FUNKCJA NWD ----------
function nwd(a, b) {
    var reszta;
    while (b) {
        reszta = a % b;
        a = b;
        b = reszta;
    }
    return a;
}

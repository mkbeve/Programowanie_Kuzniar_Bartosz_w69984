// zad 1
// let book = {
//     title: "Uczta dla wron",
//     author: "George R.R. Martin",
//     year: 2005
// };

// function bookInfo(book) {
//     return `${book.title} - ${book.author} (${book.year})`;
// }

// console.log(bookInfo(book));

//zad 2

// let student = {
//     imie: "Jan",
//     nazwisko: "Kowalski",
//     numerAlbumu: "w12345",
//     oceny: {
//         Programowanie: 4,
//         Matematyka: 3,
//         WF: 5
//     }
// };

// function obliczSrednia(student) {
//     let oceny = Object.values(student.oceny);
//     let suma = oceny.reduce((acc, ocena) => acc + ocena, 0);
//     let srednia = suma / oceny.length;
//     return srednia;
// }

// let sredniaOcen = obliczSrednia(student);

// console.log(`Średnia ocen studenta ${student.imie} ${student.nazwisko} (${student.numerAlbumu}): ${sredniaOcen}`);

//zad 3 - 5

class Trojkat {
    constructor(wysokosc, dlugoscPodstawy, nazwa) {
        this.wysokosc = wysokosc;
        this.dlugoscPodstawy = dlugoscPodstawy;
        this.nazwa = nazwa;
    }

   
    obliczPole() {
        return 0.5 * this.dlugoscPodstawy * this.wysokosc;
    }

    
    static porownajTrojkaty(trojkat1, trojkat2) {
        const poleTrojkat1 = trojkat1.obliczPole();
        const poleTrojkat2 = trojkat2.obliczPole();

        if (poleTrojkat1 > poleTrojkat2) {
            return trojkat1;
        } else if (poleTrojkat2 > poleTrojkat1) {
            return trojkat2;
        } else {
            return "Pola trójkątów są równe.";
        }
    }
}


class Trapez {
    constructor(wysokosc, podstawa1, podstawa2, nazwa) {
        this.wysokosc = wysokosc;
        this.podstawa1 = podstawa1;
        this.podstawa2 = podstawa2;
        this.nazwa = nazwa;
    }

   
    obliczPole() {
        return ((this.podstawa1 + this.podstawa2) / 2) * this.wysokosc;
    }

   
    zmienNazwe(nowaNazwa) {
        this.nazwa = nowaNazwa;
    }
}


function wypiszWiekszePole(figura1, figura2) {
    const poleFigury1 = figura1.obliczPole();
    const poleFigury2 = figura2.obliczPole();

    if (poleFigury1 > poleFigury2) {
        console.log(`Większe pole ma figura ${figura1.nazwa} (${poleFigury1})`);
    } else if (poleFigury2 > poleFigury1) {
        console.log(`Większe pole ma figura ${figura2.nazwa} (${poleFigury2})`);
    } else {
        console.log(`Pola obu figur są równe (${poleFigury1})`);
    }
}


let trojkat1 = new Trojkat(5, 10, "Trojkat 1");
let trojkat2 = new Trojkat(4, 8, "Trojkat 2");
let trojkat3 = new Trojkat(6, 12, "Trojkat 3");


let trapez1 = new Trapez(7, 5, 9, "Trapez 1");
let trapez2 = new Trapez(6, 4, 8, "Trapez 2");
let trapez3 = new Trapez(8, 6, 10, "Trapez 3");


wypiszWiekszePole(trojkat1, trapez1);
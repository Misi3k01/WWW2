/*
polimorfizm - zmiana np przeprogramować uruchomienie silnika
enkapsulacja
dziedziczenie
i cos czwartego :)
*/
var arr = new Array(10, 20, 30, 40, 50); //()to konstruktor w którym są jakies wartosci
document.write(arr[2]); //odwołanie do obiektu i wyswietlenie go na stronie
document.write(arr.length); //wyświetla długośc
for(let i = 0; i < arr.length; i++) {
    document.write(arr[i]);
} //wyswietla wszystkie elementy tablicy

arr.push(50); //dodaje element na koncu tablicy (50)

Array.prototype.showAll = function() {
    for(let i = 0; i < this.length; i++) {
        document.write(this[i]);
    }
}

arr.showAll();

var arr2 = new Array(a, b, d, s, g, h);

arr2.showAll();
document.write("Задание 1: <br>")

let n = 100;


nextPrime:
for (let i = 2; i <= n; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j == 0) continue nextPrime
    }
    document.write(i + "<br>");
}



document.write(" <br> Дано: <br> футболка - 300 рублей; <br> шорты - 400 рублей; <br> кроссовки - 500 рублей; <br> кепка - 250 рублей; <br> очки -150 рублей. <br>")
document.write("<br> Найти общую стоимость товаров используя массивы <br>")

let product1 = 300;
let product2 = 400;
let product3 = 500;
let product4 = 250;
let product5 = 100;
let product6 = 150;


let arr = [product1, product2, product3, product4, product5, product6];


function addProduct() {
    arr.push();
}

function delProduct() {
    arr.pop();
}


countBasketPrice()

function countBasketPrice() {
    let totalСost = 0;
    for (let i = 0; i < arr.length; i++) {
        totalСost += arr[i];
    }
    document.write(" <br> Общая стоимость товаров составляет: " + totalСost + " рублей");
}






alert("Задание 4");

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

a();


function a() {
    for (; alert(numbers););
}


alert("Задание 5");

let pyramid = [];

let letter = "x";

addLetter("x");

function addLetter(letter) {
    for (i = 0; i < 20; i++) {
        pyramid.push(letter);
        console.log(pyramid);
    }
}




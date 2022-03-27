'use strict'
const products = [

    {

        id: 3,

        price: 127,

        photos: [

            "1.jpg",

            "2.jpg",

        ]

    },

    {

        id: 5,

        price: 499,

        photos: []

    },

    {

        id: 10,

        price: 26,

        photos: [

            "3.jpg"

        ]

    },

    {

        id: 8,

        price: 78,

    },

];
let productsPhoto = products.filter(element => "photos" in element); // отфильтровывает и выводит в новый массив только элементы со значением photos

console.log(productsPhoto);
products.sort(function (price1, price2) { // сортирует элементы массива по цене продукта от меньшего к большему
    if (price2.price > price1.price) {
        return -1;
    }
    if (price1.price > price2.price) {
        return 1;
    }
    return 0;

});
console.log(products);
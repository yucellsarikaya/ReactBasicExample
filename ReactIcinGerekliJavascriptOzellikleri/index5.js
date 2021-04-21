const topla = (sayi1, sayi2 = 0) => { //sayi2 icin deger gelmez ise var saylian deger alınır
    return sayi1 + sayi2;
}

console.log(topla(4, 4));

const topla1 = (sayi1 = 2, sayi2 = 0) => {
    return sayi1 + sayi2;
}

console.log(topla1());
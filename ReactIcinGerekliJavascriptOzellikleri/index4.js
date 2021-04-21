const kullanici = {
    isim: "Yucel",
    yas: 35,
    adret: "Ankara",
    memleket: "Sivas",
    meslek: "Öğrenci"
};

//const { isim, yas } = kullanici;
//console.log(isim + " " + yas);

const { isim, ...kalanlar } = kullanici;
//"..."" -> rest operator
console.log(kalanlar);
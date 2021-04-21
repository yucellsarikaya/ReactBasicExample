//includes dahil etmek 
//bir string icinde verilen ifadenin olup olmadigini kontrol eder, buyuk kucuk harf duyarlidir
//includes().toLowerCase() buyuk/kucuk harf duyarlilgini konrtol etmez
//toLowerCase buyuk harfleri kucuk yapar
const isim = "Yucel";
console.log(isim.includes("Yuc"));
console.log(isim.includes("yuC"));
console.log(isim.toLowerCase().includes("yucel"));

let urunler = [
    { id: 1, name: "kalem", fiyat: 5 },
    { id: 2, name: "defter", fiyat: 6 },
    { id: 3, name: "Silgi", fiyat: 3 },
    { id: 4, name: "kalemtiras", fiyat: 10 }
];

//console.log(urunler.filter((urun) => urun.name.includes("silgi"))); //diziler icinde kucuk/buyuk harf duyarlilig vardir
console.log(
    urunler.filter((urun) => urun.name.toLowerCase().includes("silgi"))
);
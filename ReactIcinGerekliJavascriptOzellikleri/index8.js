const urunler = [
    { id: 1, name: "kalem", fiyat: 5 },
    { id: 2, name: "defter", fiyat: 6 },
    { id: 3, name: "silgi", fiyat: 3 },
    { id: 4, name: "kalemtiras", fiyat: 10 }
];

//find dizide elamani bulur ilk buludugu elemdan durur islem
console.log("find " + urunler.find((urun) => urun.fiyat > 5));

//some dizide istenilen deger donuyorsa true-false donuyor
console.log("some " + urunler.some((urun) => urun.fiyat < 3));

//every belirtlen kosul dizide ki tum elemanlar saglayığ saglamadıgıı konrtol eder
console.log("every " + urunler.every((urun) => urun.fiyat > 2));

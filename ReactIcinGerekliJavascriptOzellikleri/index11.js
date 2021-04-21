const urunler = [
    { id: 1, name: "kalem", fiyat: 5 },
    { id: 2, name: "defter", fiyat: 6 },
    { id: 3, name: "Silgi", fiyat: 3 },
    { id: 4, name: "kalemtiras", fiyat: 10 }
];

const urunOlusturucu = (urun) => `${urun.name} fiyatı ${urun.fiyat} liradir.`;
console.log(urunler.map(urunOlusturucu));

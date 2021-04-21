//reduce()

const urunler = [
    { id: 1, name: "Kalem", fiyat: 5 },
    { id: 2, name: "Defter", fiyat: 10 },
    { id: 3, name: "Silgi", fiyat: 2 },
    { id: 4, name: "Kalemtraş", fiyat: 7 },
];

const toplamuUrunFiyat = urunler.reduce((toplam, urun) => toplam += urun.fiyat, 0);
console.log({ toplamuUrunFiyat });

const toplamuUrunFiyat = urunler.reduce((toplam, urun) => toplam += urun.fiyat, 0);

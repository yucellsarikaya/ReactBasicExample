let kullanici = { isim: "Yucel", yas: 23, sehir: "İzmir" };

//kullanici.sehir = "ankara"; //false

kullanici = { ...kullanici, sehir: "Ankara" };

console.log(kullanici);

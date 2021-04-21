//Promises & async/await

const veriGetir = new Promise((basarili, basarisiz) => {
    const veriGeldiMi = true;
    if(veriGeldiMi){
        basarili("burada");
    }else{
        basarisiz("veriyi alamadik");
    }
});

veriGetir.then((cevap) => console.log(cevap));
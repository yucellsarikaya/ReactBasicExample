const fakt = (sayi) => {
    var x = 1;
    for (var i = 1; i <= sayi; i++) {
        x *= i;
    }
    return x;
}

console.log(fakt(4));

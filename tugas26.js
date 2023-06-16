let deret = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];

for (angka of deret) {
    if (isFinite(angka) == true) {
        console.log("Angka", angka, "NOT Infinity");
    } else {
        console.log("Angka", angka, "Infinity");
        
    }
}
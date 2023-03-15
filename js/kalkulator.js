function tambah() {
    var angka1 = parseFloat(document.getElementsByName("angka")[0].value);
    var angka2 = parseFloat(document.getElementsByName("angka2")[0].value);
    var hasil = angka1 + angka2;
    if (isNaN(angka1) || isNaN(angka2)) {
        alert("Maaf, angka belum terisi");
    }
    document.getElementsByName("hasil")[0].value = hasil;
}

function kurang() {
    var angka1 = parseFloat(document.getElementsByName("angka")[0].value);
    var angka1 = parseFloat(document.getElementsByName("angka")[0].value);
    var angka2 = parseFloat(document.getElementsByName("angka2")[0].value);
    var hasil = angka1 - angka2;
    if (isNaN(angka1) || isNaN(angka2)) {
        alert("Maaf, angka belum terisi");
    }
    document.getElementsByName("hasil")[0].value = hasil;
}

function kali() {
    var angka1 = parseFloat(document.getElementsByName("angka")[0].value);
    var angka2 = parseFloat(document.getElementsByName("angka2")[0].value);
    var hasil = angka1 * angka2;
    if (isNaN(angka1) || isNaN(angka2)) {
        alert("Maaf, angka belum terisi");
    }
    document.getElementsByName("hasil")[0].value = hasil;
}

function bagi() {
    var angka1 = parseFloat(document.getElementsByName("angka")[0].value);
    var angka2 = parseFloat(document.getElementsByName("angka2")[0].value);
    var hasil = angka1 / angka2;
    if (isNaN(angka1) || isNaN(angka2)) {
        alert("Maaf, angka belum terisi");
    }
    document.getElementsByName("hasil")[0].value = hasil;
}

function pangkat() {
    var angka1 = parseFloat(document.getElementsByName("angka")[0].value);
    var angka2 = parseFloat(document.getElementsByName("angka2")[0].value);
    var hasil = Math.pow(angka1, angka2);
    if (isNaN(angka1) || isNaN(angka2)) {
        alert("Maaf, angka belum terisi");
    }
    document.getElementsByName("hasil")[0].value = hasil;
}
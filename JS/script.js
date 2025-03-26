//# Ini JavaScript External
console.log(JavaScript is Working);

function tampilkan(id) {
    document.getElementById('persegi').classList.add('hidden');
    document.getElementById('persegiPanjang').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
}

// Fungsi untuk menghitung luas persegi
function hitungLuas() {
    let sisiLuas = document.getElementById("sisi-luas").value;

    if (sisiLuas === "" || sisiLuas <= 0) {
        document.getElementById("hasil-luas").innerText = "Masukkan nilai sisi yang valid!";
        document.getElementById("hasil-luas").style.color = "red";
        return;
    }

    let luas = sisiLuas * sisiLuas;
    document.getElementById("hasil-luas").innerText = `L = S × S\nL = ${sisiLuas} × ${sisiLuas}\nL = ${luas}`;
    document.getElementById("hasil-luas").style.color = "blue";
}

// Fungsi untuk menghitung keliling persegi
function hitungKeliling() {
    let sisiKeliling = document.getElementById("sisi-keliling").value;

    if (sisiKeliling === "" || sisiKeliling <= 0) {
        document.getElementById("hasil-keliling").innerText = "Masukkan nilai sisi yang valid!";
        document.getElementById("hasil-keliling").style.color = "red";
        return;
    }

    let keliling = 4 * sisiKeliling;
    document.getElementById("hasil-keliling").innerText = `K = 4 × S\nK = 4 × ${sisiKeliling}\nK = ${keliling}`;
    document.getElementById("hasil-keliling").style.color = "blue";
}

// Fungsi untuk mereset input dan hasil
function resetLuas() {
    document.getElementById("sisi-luas").value = "";
    document.getElementById("hasil-luas").innerText = "";
}

function resetKeliling() {
    document.getElementById("sisi-keliling").value = "";
    document.getElementById("hasil-keliling").innerText = "";
}


// Fungsi untuk menghitung luas persegi panjang
function hitungLuasPersegiPanjang() {
    let panjang = document.getElementById("panjang-luaspersegipanjang").value;
    let lebar = document.getElementById("lebar-luaspersegipanjang").value;
    let hasilLuas = document.getElementById("hasil-luaspersegipanjang");

    if (panjang === "" || lebar === "") {
        hasilLuas.innerHTML = "Masukkan panjang dan lebar!";
        return;
    }

    let luas = panjang * lebar;
    hasilLuas.innerHTML = `L = P × L <br> L = ${panjang} × ${lebar} <br> L = ${luas}`;
    document.getElementById("hasil-luaspersegipanjang").style.color = "blue";
}

// Fungsi untuk mereset input dan hasil luas
function resetLuasPersegiPanjang() {
    document.getElementById("panjang-luaspersegipanjang").value = "";
    document.getElementById("lebar-luaspersegipanjang").value = "";
    document.getElementById("hasil-luaspersegipanjang").innerHTML = "";
}

// Fungsi untuk menghitung keliling persegi panjang
function hitungKelilingPersegiPanjang() {
    let panjang = document.getElementById("panjang-kelilingpesegipanjang").value;
    let lebar = document.getElementById("lebar-kelilingpesegipanjang").value;
    let hasilKeliling = document.getElementById("hasil-kelilingpersegipanjang");

    if (panjang === "" || lebar === "") {
        hasilKeliling.innerHTML = "Masukkan panjang dan lebar!";
        return;
    }

    let keliling = 2 * (parseInt(panjang) + parseInt(lebar));
    hasilKeliling.innerHTML = `K = 2 × (P + L) <br> K = 2 × (${panjang} + ${lebar}) <br> K = ${keliling}`;
    document.getElementById("hasil-kelilingpersegipanjang").style.color = "blue";
}

// Fungsi untuk mereset input dan hasil keliling
function resetKelilingPersegiPanjang() {
    document.getElementById("panjang-kelilingpesegipanjang").value = "";
    document.getElementById("lebar-kelilingpesegipanjang").value = "";
    document.getElementById("hasil-kelilingpersegipanjang").innerHTML = "";
}

        
 

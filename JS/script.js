//# Ini JavaScript External
//#javascrip masih salah semua

// Fungsi untuk menghitung luas persegi
function hitungLuas() {
    let sisiLuas = document.getElementById("sisi-luas").value;

    if (sisiLuas === "" || sisiLuas <= 0) {
        document.getElementById("hasil-luas").innerText = "Masukkan nilai sisi yang valid!";
        document.getElementById("hasil-luas").style.color = "red";
        return;
    }

    let luas = sisiLuas * sisiLuas;
    document.getElementById("hasil-luas").innerText = "Luas Persegi: " + luas;
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
    document.getElementById("hasil-keliling").innerText = "Keliling Persegi: " + keliling;
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



        
 

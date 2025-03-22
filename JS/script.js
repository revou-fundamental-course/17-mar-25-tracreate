//# Ini JavaScript External
//#javascrip masih salah semua
function hitungKeliling() {
    let sisi = document.getElementById("sisi").value;
    if (sisi === "" || sisi <= 0) {
        alert("Masukkan nilai sisi yang valid!");
        return;
    }
    let keliling = 4 * sisi;
    document.getElementById("hasil").innerText = keliling;
}

function resetForm() {
    document.getElementById("sisi").value = "";
    document.getElementById("hasil").innerText = "-";
}
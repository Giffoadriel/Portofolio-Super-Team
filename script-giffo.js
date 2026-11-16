const fotoSurprise = [
    "img/giffo-surprise1.jpg",
    "img/giffo-surprise2.jpg",
    "img/giffo-surprise3.jpg"
];

const tombol = document.getElementById("btn-surprise");
const popup = document.getElementById("popup");
const hitung = document.getElementById("popup-hitung");
const foto = document.getElementById("popup-foto");
const teks = document.getElementById("popup-teks");
const tutup = document.getElementById("popup-tutup");

let timer = null;
let urutan = 0;

function mulaiHitungMundur() {
    let sisa = 5;
    foto.classList.remove("muncul");
    teks.textContent = "";
    hitung.textContent = sisa;
    popup.classList.add("tampil");

    clearInterval(timer);
    timer = setInterval(function () {
        sisa--;
        if (sisa > 0) {
            hitung.textContent = sisa;
        } else {
            // Countdown
            clearInterval(timer);
            hitung.textContent = "!!!";
            foto.src = fotoSurprise[urutan];
            urutan = (urutan + 1) % fotoSurprise.length;
            foto.classList.add("muncul");
            teks.textContent = "!!!";
        }
    }, 1000);
}

function tutupPopup() {
    clearInterval(timer);
    popup.classList.remove("tampil");
}

tombol.addEventListener("click", mulaiHitungMundur);
tutup.addEventListener("click", tutupPopup);

popup.addEventListener("click", function (e) {
    if (e.target === popup) {
        tutupPopup();
    }
});
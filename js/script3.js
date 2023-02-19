window.addEventListener("scroll", muncul);

function muncul() {
    let konten = document.querySelectorAll(".konten4");
    for (let i = 0; i < konten.length; i++) {
        let tinggi = window.innerHeight;
        let jarak = konten[i].getBoundingClientRect().top;
        let scroll = 0;
        if (jarak < tinggi - scroll) {
            konten[i].classList.add("konten4-tampil");
        } else {
            konten[i].classList.remove("konten4-tampil");
        }
    }
}
window.addEventListener("scroll", muncul);
window.addEventListener("scroll", muncul2);

function muncul() {
    let konten = document.querySelectorAll(".konten1");
    for (let i = 0; i < konten.length; i++) {
        let tinggi = window.innerHeight;
        let jarak = konten[i].getBoundingClientRect().top;
        let scroll = 0;
        if (jarak < tinggi - scroll) {
            konten[i].classList.add("konten1-tampil");
        } else {
            konten[i].classList.remove("konten1-tampil");
        }
    }
}
function muncul2() {
    let konten = document.querySelectorAll(".timeline");
    for (let i = 0; i < konten.length; i++) {
        let tinggi = window.innerHeight;
        let jarak = konten[i].getBoundingClientRect().top;
        let scroll = 200;
        if (jarak < tinggi - scroll) {
            konten[i].classList.add("timeline-tampil");
        } else {
            konten[i].classList.remove("timeline-tampil");
        }
    }
}
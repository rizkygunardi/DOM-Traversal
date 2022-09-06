// const tHapus = document.querySelector(".close");
// const card = document.querySelector(".card");
// tHapus.addEventListener("click", function () {
//   card.style.display = "none";
// });

//DOM Traversal

const tHapus = document.querySelectorAll(".close");

/*
for (let i = 0; i < tHapus.length; i++) {
  tHapus[i].addEventListener("click", function (e) {
    // tHapus[i].parentElement.style.display = "none";
    // karena yg dihapus itu dari tHapusnya itu sendiri maka bisa dengan
    // menambahkan sebuah parameter pada sebuah function click
    e.target.parentElement.style.display = "none";
  });
}
*/

// forEach sama seperti for cuman lebih ringkas karena tidak perlu memasukkan
// parameter terlebih dahulu
// tHapus.forEach(function (el) {
//   el.addEventListener("click", function (e) {
//     e.target.parentElement.style.display = "none";
//     e.preventDefault();
//     e.stopPropagation();
//   });
// });

// Prevent Default
/* yaitu agar menghentikan aksi default
pada kasus ini menggunakan tag <a> pada dasarnya
tag tersebut memiliki atribut href yang dimana fungsinya
adalah pada saat diklik maka akan pindah ke halaman lain, jika hrefnya
kosong maka akan balik lagi ke halaman awal/refresh SEHINGGA data yg tadi 
sudah dihapus kembali lagi normal. FUNGSI PREVENT DEFAULT ini merupakan cara agar
kita bisa mengubah/custom setiap kegiatan pada tag tertentu.
pada kasus ini hrefnya kosong maka halaman tidak akan merefresh ulang halaman */

//yg atas kalo closenya dipencet maka akan eksekusi yg tHapus
//yg bawah kalo cardnya dipencet maka akan eksekusi yg cards

// const cards = document.querySelectorAll(".card");
// cards.forEach(function (card) {
//   card.addEventListener("click", function (e) {
//     alert("ok");
//   });
// });

//ini yg paling efektif
const container = document.querySelector(".container");
container.addEventListener("click", function (e) {
  if (e.target.className == "close") {
    e.target.parentElement.style.display = "none";
  }
});

// Fungsi untuk menampilkan section sesuai tombol
function showSection(id) {
  // Ambil semua section
  const sections = document.querySelectorAll(".section");

  // Sembunyikan semua section
  sections.forEach(sec => sec.classList.remove("active"));

  // Tampilkan section sesuai id
  const target = document.getElementById(id);
  if (target) {
    target.classList.add("active");
  }
}
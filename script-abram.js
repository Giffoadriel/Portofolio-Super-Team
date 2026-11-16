const pesan = [
  "Bangunlah saat sore agar matahari yang terbenam melihatmu bersinar.",
];

const btn = document.getElementById("btn-surprise");
const modal = document.getElementById("modal");
const teks = document.getElementById("modal-teks");
const tutup = document.getElementById("modal-tutup");

btn.addEventListener("click", () => {
  const acak = Math.floor(Math.random() * pesan.length);
  teks.textContent = pesan[acak];
  modal.classList.add("show");
});

tutup.addEventListener("click", () => modal.classList.remove("show"));

modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.classList.remove("show");
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") modal.classList.remove("show");
});
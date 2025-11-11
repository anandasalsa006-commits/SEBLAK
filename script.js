/*
 * style.css
 * Gaya untuk Halaman Seblak (HTML & JS)
 */

/* ===========================
   1. Gaya Dasar & Layout
   =========================== */

body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f7f7f7; /* Latar belakang halaman */
    color: #333;
    line-height: 1.6;
}

.container {
    max-width: 800px;
    margin: 40px auto;
    background-color: #fff;
    padding: 25px 30px;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* ===========================
   2. Gaya Tipografi & Judul
   =========================== */

h1 {
    color: #c9302c; /* Merah menyala */
    text-align: center;
    padding-bottom: 10px;
    border-bottom: 3px solid #f0ad4e; /* Garis bawah oranye */
    margin-bottom: 25px;
    font-size: 2.5em;
}

h2 {
    color: #5cb85c; /* Hijau segar */
    margin-top: 30px;
    margin-bottom: 15px;
    font-size: 1.8em;
}

p {
    text-align: justify;
    margin-bottom: 15px;
}

hr {
    border: 0;
    height: 1px;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(201, 48, 44, 0.75), rgba(0, 0, 0, 0));
    margin: 30px 0;
}

/* ===========================
   3. Gaya Daftar Bahan (Dasar)
   =========================== */

.bahan-list {
    list-style-type: none; /* Menghilangkan bullet default */
    padding: 0;
    margin-top: 15px;
}

.bahan-list li {
    background: #fff8e1; /* Latar belakang kuning muda */
    border-left: 5px solid #ffcc33; /* Garis kuning di kiri */
    margin-bottom: 8px;
    padding: 10px 15px;
    border-radius: 4px;
    transition: background 0.3s, border-left-color 0.3s; /* Transisi untuk interaktivitas */
    cursor: pointer; /* Menandakan item bisa diklik */
}

.bahan-list li:hover {
    background: #ffe082; /* Perubahan warna saat di-hover */
}

/* ===========================
   4. Gaya JavaScript (Highlight)
   =========================== */

/* Gaya saat item diklik/dipilih oleh JS */
.bahan-list li.highlight {
    background-color: #d4edda; /*

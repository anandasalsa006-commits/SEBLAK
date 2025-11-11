/**
 * script.js
 * Fungsi interaktif untuk Halaman Seblak
 */

// 1. Fungsi untuk menampilkan pesan sambutan saat halaman dimuat
function sambutanAwal() {
    console.log("Halaman Seblak berhasil dimuat!");
    alert("Selamat datang di Halaman Seblak! Siap merasakan pedasnya?");
}

// 2. Fungsi untuk menangani klik pada setiap item bahan
function handleKlikBahan(event) {
    const itemYangDiklik = event.target;

    // Pastikan yang diklik adalah elemen <li> di dalam .bahan-list
    if (itemYangDiklik.tagName === 'LI') {
        const namaBahan = itemYangDiklik.textContent.split('(')[0].trim();
        
        // Menambahkan/menghilangkan kelas 'highlight'
        itemYangDiklik.classList.toggle('highlight');

        if (itemYangDiklik.classList.contains('highlight')) {
            console.log(`Bahan "${namaBahan}" dipilih!`);
            itemYangDiklik.innerHTML += ' <span class="badge">(✅ Sudah Dicek)</span>';
        } else {
            console.log(`Bahan "${namaBahan}" tidak dipilih.`);
            const badge = itemYangDiklik.querySelector('.badge');
            if (badge) {
                badge.remove();
            }
        }
    }
}

// 3. Menghubungkan fungsi ke elemen saat DOM siap
document.addEventListener('DOMContentLoaded', () => {
    // Panggil fungsi sambutan
    sambutanAwal();

    // Dapatkan elemen daftar bahan
    const bahanList = document.querySelector('.bahan-list');

    // Tambahkan event listener untuk mendeteksi klik
    if (bahanList) {
        bahanList.addEventListener('click', handleKlikBahan);
    }
});

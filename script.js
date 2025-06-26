document.addEventListener('DOMContentLoaded', () => {
    const profilePic = document.getElementById('profile-pic');
    // Ganti URL placeholder ini dengan link ke foto-foto Anda yang berbeda
    // Anda bisa menambahkan atau mengurangi jumlah gambar di array ini
    const imagePaths = [
        'https://via.placeholder.com/180/FFD700/000000?text=Rivanola+1', // Foto pertama
        'https://via.placeholder.com/180/ADD8E6/000000?text=Rivanola+2', // Foto kedua
        'https://via.placeholder.com/180/90EE90/000000?text=Rivanola+3'  // Foto ketiga
    ];
    let currentIndex = 0;

    // Tambahkan event listener untuk mengganti gambar saat diklik
    profilePic.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % imagePaths.length; // Pindah ke gambar berikutnya
        profilePic.src = imagePaths[currentIndex]; // Perbarui sumber gambar
    });
});
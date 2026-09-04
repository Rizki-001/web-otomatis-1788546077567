// Menunggu DOM Selesai Dimuat
document.addEventListener("DOMContentLoaded", () => {
    // 1. Logika Toggle Menu Seluler (Mobile Navigation)
    const menuBtn = document.getElementById("mobile-menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener("click", () => {
            mobileMenu.classList.toggle("hidden");
        });
    }

    // 2. Logika Penanganan Submit Form Kontak
    const contactForm = document.getElementById("contact-form");
    const formAlert = document.getElementById("form-alert");

    if (contactForm && formAlert) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();

            // Ambil Nilai Input
            const name = document.getElementById("name").value;

            // Tampilkan Pesan Sukses
            formAlert.classList.remove("hidden", "bg-red-100", "text-red-700");
            formAlert.classList.add("bg-emerald-100", "text-emerald-700");
            formAlert.textContent = `Terima kasih ${name}, pesan Anda berhasil dikirim! Tim kami akan segera menghubungi Anda.`;

            // Reset Form Input
            contactForm.reset();

            // Sembunyikan Notifikasi Setelah 5 Detik
            setTimeout(() => {
                formAlert.classList.add("hidden");
            }, 5000);
        });
    }
});
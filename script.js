// Mengambil elemen-elemen yang diperlukan
        const videoButton = document.getElementById('videoButton');
        const videoModal = document.getElementById('videoModal');
        const closeButton = document.getElementById('closeButton');
        const myVideo = document.getElementById('myVideo');
        
        // Menampilkan modal dan memutar video ketika tombol diklik
        videoButton.addEventListener('click', function() {
            videoModal.style.display = 'flex';
            myVideo.play(); // Otomatis memutar video
        });
        
        // Menutup modal dan menghentikan video ketika tombol tutup diklik
        closeButton.addEventListener('click', function() {
            videoModal.style.display = 'none';
            myVideo.pause(); // Menghentikan video
            myVideo.currentTime = 0; // Mengembalikan video ke awal
        });
        
        // Menutup modal juga ketika mengklik di luar area modal
        window.addEventListener('click', function(event) {
            if (event.target === videoModal) {
                videoModal.style.display = 'none';
                myVideo.pause();
                myVideo.currentTime = 0;
            }
        });
document.addEventListener('DOMContentLoaded', function() {
    //elemen pop-up video modal
    const modalHTML = `
        <div id="videoModal" 
            style="display:none; 
            position:fixed; 
            z-index:1000; 
            left:0; 
            top:0; 
            width:100%; 
            height:100%; 
            background-color:rgba(0,0,0,0.75); 
            justify-content:center; 
            align-items:center;">
            
            <div style="background:#fff; 
                padding:20px; 
                border-radius:12px; 
                max-width:560px; 
                width:90%; 
                text-align:center; 
                position:relative; 
                box-shadow: 0 10px 25px rgba(0,0,0,0.3);">

                <span id="closeModal" 
                    style="position:absolute; 
                    top:10px; right:15px; 
                    font-size:24px; 
                    font-weight:bold; 
                    cursor:pointer; 
                    color:#64748b;">×
                </span>
            
                <h3 style="margin-bottom:15px; 
                    color:#1e293b; 
                    font-size:1.2rem;">
                </h3>
                    
                <!-- Elemen pemutar video -->
                <video id="surpriseVideo" controls playsinline preload="metadata" style="width:100%; max-height:360px; border-radius:8px; background-color:#000;">
                    <source src="imgBene/surprais.mp4" type="video/mp4">
                </video>

                <p style="margin-top:15px; font-size:0.9rem; color:#475569;"></p>
            </div>
        </div>
    `;

    //sisipkan modal ke dalam body HTML jika belum ada
    if (!document.getElementById('videoModal')) {
        document.body.insertAdjacentHTML('beforeend', modalHTML);
    }

    const modal = document.getElementById('videoModal');
    const closeBtn = document.getElementById('closeModal');
    const videoPlayer = document.getElementById('surpriseVideo');
    const surpriseBtn = document.getElementById('surpriseBtn');

    if (surpriseBtn && videoPlayer) {
        surpriseBtn.addEventListener('click', function() {
            modal.style.display = 'flex';
            videoPlayer.currentTime = 0;
            
            const playPromise = videoPlayer.play();
            if (playPromise !== undefined) {
                playPromise.catch(function(error) {
                    console.warn("Autoplay diblokir browser, silakan klik tombol play manual:", error);
                });
            }
        });
    }

    //fungsi menutup modal dan menghentikan video
    function closeModalFunc() {
        modal.style.display = 'none';
        if (videoPlayer) {
            videoPlayer.pause();
            videoPlayer.currentTime = 0;
        }
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', closeModalFunc);
    }
    
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModalFunc();
        }
    });
});
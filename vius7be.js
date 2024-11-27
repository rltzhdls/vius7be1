$(document).ready(function () {
    const video = document.getElementById('vd');
    const source = document.getElementById('vds');
    let sourceChanged = false;

    video.oncanplaythrough = () => {
        if (!sourceChanged) { 
            setTimeout(() => {
                source.src = "https://vod.plaync.com/lineage/2024/1030/v2/main_BG.mp4"; 
                video.load(); 
                video.play(); 
                sourceChanged = true; 
            }, 5900); 
        }
    };
   });
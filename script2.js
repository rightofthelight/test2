function goachive() {
    document.getElementById('homepage').style.display = 'none';
    document.getElementById('achivepage').style.display = 'block';
}

function backhome() {
    document.getElementById('homepage').style.display = 'block';
    document.getElementById('achivepage').style.display = 'none';
    document.getElementById('moviepage').style.display = 'none';
}

function gocharacterpage() {
    document.getElementById('achivepage').style.display = 'none';
    document.getElementById('charapage').style.display = 'block';
}

function backachive() {
    document.getElementById('achivepage').style.display = 'block';
    document.getElementById('charapage').style.display = 'none';
}

function gomovie() {
    document.getElementById('homepage').style.display = 'none';
    document.getElementById('moviepage').style.display = 'block';
}
function showAndPlayVideo1() {
    document.getElementById('moviepage').style.display = 'none';
    const videoContainer1 = document.getElementById("video-container1");
    const video1 = document.getElementById("video1");
    videoContainer1.style.display = "block";
    video1.play();
    // 全画面モード
    if (video1.requestFullscreen) {
        video1.requestFullscreen();
    } else if (video1.webkitRequestFullscreen) { // Safari
        video1.webkitRequestFullscreen();
    } else if (video1.mozRequestFullScreen) { // Firefox
        video1.mozRequestFullScreen();
    } else if (video1.msRequestFullscreen) { // IE/Edge
        video1.msRequestFullscreen();
    }
    video1.onended = () => {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) { // Safari
            document.webkitExitFullscreen();
        } else if (document.mozCancelFullScreen) { // Firefox
            document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) { // IE/Edge
            document.msExitFullscreen();
        }
        videoContainer1.style.display = "none";
        document.getElementById('moviepage').style.display = 'block';
        video1.pause();
        video1.currentTime = 0;
    };
}
function showAndPlayVideo2() {
    document.getElementById('moviepage').style.display = 'none';
    const videoContainer2 = document.getElementById("video-container2");
    const video2 = document.getElementById("video2");
    videoContainer2.style.display = "block";
    video2.play();
    if (video2.requestFullscreen) {
        video2.requestFullscreen();
    } else if (video2.webkitRequestFullscreen) { // Safari
        video2.webkitRequestFullscreen();
    } else if (video2.mozRequestFullScreen) { // Firefox
        video2.mozRequestFullScreen();
    } else if (video2.msRequestFullscreen) { // IE/Edge
        video2.msRequestFullscreen();
    }
    video2.onended = () => {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) { // Safari
            document.webkitExitFullscreen();
        } else if (document.mozCancelFullScreen) { // Firefox
            document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) { // IE/Edge
            document.msExitFullscreen();
        }
        videoContainer2.style.display = "none";
        document.getElementById('moviepage').style.display = 'block';
        video2.pause();
        videoContainer2.currentTime = 0;
    };
}
function showAndPlayVideo3() {
    document.getElementById('moviepage').style.display = 'none';
    const videoContainer3 = document.getElementById("video-container3");
    const video3 = document.getElementById("video3");
    videoContainer3.style.display = "block";
    video3.play();
    if (video3.requestFullscreen) {
        video3.requestFullscreen();
    } else if (video3.webkitRequestFullscreen) { // Safari
        video3.webkitRequestFullscreen();
    } else if (video3.mozRequestFullScreen) { // Firefox
        video3.mozRequestFullScreen();
    } else if (video3.msRequestFullscreen) { // IE/Edge
        video3.msRequestFullscreen();
    }
    video3.onended = () => {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) { // Safari
            document.webkitExitFullscreen();
        } else if (document.mozCancelFullScreen) { // Firefox
            document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) { // IE/Edge
            document.msExitFullscreen();
        }
        videoContainer3.style.display = "none";
        document.getElementById('moviepage').style.display = 'block';
        video3.pause();
        video3.currentTime = 0;
    };
}

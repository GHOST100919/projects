let video = document.getElementById("video")
let para = document.getElementById("para")
let button = document.getElementById("button")

button.addEventListener('click', function(){
    if(video.paused){
        video.play()
        para.textContent = 'Tap on the pause button to stop'
        button.textContent = 'pause'
    }
    else{
        video.pause()
        para.textContent = 'Tap on the play button to continue'
        button.textContent = 'play'
    }
})

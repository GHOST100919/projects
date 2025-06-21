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

document.addEventListener("keydown", function(e){
    if(e.key === "p"){
        video.play()
        para.textContent = 'Tap on the pause button to stop'
        button.textContent = 'pause'
    }
    else if(e.key === "s"){
        video.pause()
        para.textContent = 'Tap on the play button to continue'
        button.textContent = 'play'
    }
    
})
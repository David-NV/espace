let backgroundVideo=document.querySelector("#backgroundVideo")
let telecommade=document.querySelector("#telecommade")


backgroundVideo.src="./images/planete.mp4" 
backgroundVideo.autoplay=true;
backgroundVideo.loop=true;
backgroundVideo.playbackRate = 0.5;
backgroundVideo.muted=true;

telecommade.addEventListener("click",()=>{
    console.log(telecommade.textContent)
    if(telecommade.textContent==="▶"){
        telecommade.textContent="‖"
        backgroundVideo.pause()
    }else if(telecommade.textContent==="‖"){
        telecommade.textContent="▶"
        backgroundVideo.play()
    }
})
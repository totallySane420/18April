
window.addEventListener("keydown",(e)=>{
    // console.log(e)
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`)
    console.log(audio)
});
function removeTransition(e){
    if (e.propertyname!='transform') return;
    e.target.classList.remove('playing')
}
function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`)
    if (!audio) {return};

    key.classList.add('playing')
    audio.currentTime = 0;
    audio.play()
}

const keys = Array.from(document.querySelectorAll(".key"))
keys.forEach(
    (key)=>{
        key.addEventListener('transitioned', removeTransition)
    }  
)
window.addEventListener('keydown', playSound);
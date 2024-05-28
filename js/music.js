
const audioEL = document.querySelector('#audio')
const backwardBtn = document.querySelector('#backward')
const playBtn = document.querySelector('#play')
const forwardBtn = document.querySelector('#forward')
const coverEl = document.querySelector('#cover') 
const titleEl = document.querySelector('#title')
const musicContainer = document.querySelector('#music-container')
const volumeEl = document.querySelector('#volume')
const volumeValue = document.querySelector('#volume-value')
const progressContainer = document.querySelector('#progress-container')
const progress = document.querySelector('#progress')

audioEL.volume = 0.5

volumeValue.textContent = '50'

const musics = [`ModernTalking-BrotherLouie`, `ModernTalking-CheriCherilady`, `ModernTalking-NoFaceNoNameNoNumber`, `ModernTalking-YoureMyHeartYoureMySoul`]

let currentSong = 0

const changeMusic = (curMuisc) => {
    coverEl.src = `/images/${curMuisc}.jpg`
    audioEL.src = `/sounds/${curMuisc}.mp3`
    titleEl.textContent = curMuisc
}

const playMusic = () => {
    musicContainer.classList.add('play')
    playBtn.innerHTML = `<i class="fa-solid fa-pause"></i>`
    audioEL.play()
}

const pauseMusic = () => {
    musicContainer.classList.remove('play')
    playBtn.innerHTML = `<i class="fa-solid fa-play"></i>`
    audioEL.pause()
}

const play = () => {
    const state = musicContainer.classList.contains('play')

    if(state) {
        pauseMusic()
    } else {
        playMusic()
    }
}

const next = () => {
    if(currentSong > musics.length - 2) {
        currentSong = 0
    } else {
        currentSong++
    }
    changeMusic(musics[currentSong])
    playMusic()
}

const prev = () => {
    if(currentSong == 0) {
        currentSong = musics.length - 1
    } else {
        currentSong--
    }
    changeMusic(musics[currentSong])
    playMusic()
}


const changeVolume = () => {
    audioEL.volume = volumeEl.value / 100
    volumeValue.textContent = volumeEl.value
}

const changeProgress = (e) => {
    let currentTime = e.target.currentTime
    let duration = e.target.duration
    // const width = progressContainer.offsetWidth

    progress.style.width = `${(currentTime / duration) * 100}%`
    // cur time
    // duration
    // width


}

const timeUpdate = function(e) {
    console.log(progressContainer.offsetWidth)
    console.log(e.clientX)
}


forwardBtn.addEventListener('click', next)
backwardBtn.addEventListener('click', prev)
playBtn.addEventListener('click', play)
volumeEl.addEventListener('input', changeVolume)
audioEL.addEventListener('timeupdate', changeProgress)
progressContainer.addEventListener('click', timeUpdate)
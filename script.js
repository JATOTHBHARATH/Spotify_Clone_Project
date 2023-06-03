console.log("Welcome to Spotify");

// Initialize the variables
let songindex = 0;
let audioelement = new Audio('songs/1.mp3');
let masterplay = document.getElementById('masterplay');
let MyProgressBar = document.getElementById('MyProgressBar');
let gif = document.getElementById('gif');
let mastersongname = document.getElementById('mastersongname');
let songitems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songname: "Let Me Love You", filepath: "songs/1.mp3", coverpath: "covers/1.jpg" },
    { songname: "Star Boy", filepath: "songs/2.mp3", coverpath: "covers/2.jpg" },
    { songname: "Blinding Lights", filepath: "songs/3.mp3", coverpath: "covers/3.jpg" },
    { songname: "Unforgettable", filepath: "songs/4.mp3", coverpath: "covers/4.jpg" },
    { songname: "Dandelions", filepath: "songs/5.mp3", coverpath: "covers/5.jpg" },
    { songname: "No Competetion", filepath: "songs/6.mp3", coverpath: "covers/6.jpg" },
    { songname: "Insane", filepath: "songs/7.mp3", coverpath: "covers/7.jpg" },
    { songname: "Running Up that Hill", filepath: "songs/8.mp3", coverpath: "covers/8.jpg" },
    { songname: "Shape of You", filepath: "songs/9.mp3", coverpath: "covers/9.jpg" },
    { songname: "Bharath Ane Nenu", filepath: "songs/10.mp3", coverpath: "covers/10.jpg" },
]

songitems.forEach((element, i) => {
    // console.log(element, i);
    element.getElementsByTagName('img')[0].src = songs[i].coverpath;
    element.getElementsByClassName('songname')[0].innerText = songs[i].songname;
})

// audioelement.play();

// handle play/pause click
masterplay.addEventListener('click', () => {
    if (audioelement.paused || audioelement.currentTime <= 0) {
        audioelement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else {
        audioelement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})

// listen to events
audioelement.addEventListener('timeupdate', () => {
    // update seekbar
    progress = parseInt((audioelement.currentTime / audioelement.duration) * 100);
    MyProgressBar.value = progress;
})

MyProgressBar.addEventListener('change', () => {
    audioelement.currentTime = MyProgressBar.value * audioelement.duration / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-cicle-play');
    })
}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
    element.addEventListener('clcik', (e) => {
        makeAllPlays();
        songindex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioelement.src = `songs/${songindex + 1}.mp3`;
        mastersongname.innerText = songs[songindex].songname;
        audioelement.currentTime = 0;
        audioelement.play();
        gif.style.opacity = 1;
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
    })
})

document.getElementById('next').addEventListener('click', () => {
    if (songindex >= 9) {
        songindex = 0;
    }
    else {
        songindex += 1;
    }
    audioelement.src = `songs/${songindex + 1}.mp3`;
    mastersongname.innerText = songs[songindex].songname;
    audioelement.currentTime = 0;
    audioelement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click', () => {
    if (songindex <= 0) {
        songindex = 0;
    }
    else {
        songindex -= 1;
    }
    audioelement.src = `songs/${songindex + 1}.mp3`;
    mastersongname.innerText = songs[songindex].songname;
    audioelement.currentTime = 0;
    audioelement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
})
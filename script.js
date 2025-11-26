let songs = document.querySelector('.second')
let play = document.querySelector('#play')

let arr = [
    { song: 'Sahiba', url: 'songs/Sahiba.mp3', poster: 'posters/Sahiba poster.jpg' },
    { song: 'São Paulo', url: 'songs/São Paulo.mp3', poster: 'posters/Sao Paulo poster.jpg' },
    { song: 'Skyfall', url: 'songs/Adele - Skyfall.mp3', poster: 'posters/Skyfall.jpg' },
    { song: 'Blinding lights', url: 'songs/The Weeknd - Blinding Lights.mp3', poster: 'posters/Blinding lights.jpg' },
    { song: 'Pal Pal - Talwiinder', url: 'songs/Afusic - Pal Pal Pal.mp3', poster: 'posters/Pal Pal poster.jpg' },
    { song: 'Sailor Song', url: 'songs/Gigi Perez - Sailor Song.mp3', poster: 'posters/Sailor song poster.jpg' },

]

let songpointer = 0;
let audio = new Audio();
const main = () => {

    let clutter = '';


    arr.forEach((elem, index) => {
        clutter += `<div id='${index}'><img src="${elem.poster}" alt="">${elem.song}</div>`

    })

    songs.innerHTML = clutter;
    audio.src = arr[songpointer].url;
    document.querySelector('.first').innerHTML = `<img src="${arr[songpointer].poster}" alt="">`
}
 


songs.addEventListener('click', (dets) => {
    songpointer = dets.target.id;
    
    main()
    audio.play();
    
    play.innerHTML = `<i class="ri-pause-mini-line"></i>`

    

})

main();
let flag = 0
play.addEventListener('click', () => {
    if (flag == 0) {
        audio.pause();
        play.innerHTML = `<i class="ri-play-mini-fill "></i>`
        flag = 1;
    } else {
        audio.play();
        play.innerHTML = `<i class="ri-pause-mini-line"></i>`
        flag = 0;
    }
})

document.querySelector('#forward').addEventListener('click', () => {
    if (songpointer >= (arr.length) - 1) {
        songpointer = 0;
        main();
        audio.play();
    } else {
        songpointer++;
        main();
        audio.play();
    }
})
document.querySelector('#backword').addEventListener('click', () => {
    if (songpointer > 0) {
        songpointer--;
        main();
        audio.play();
    } else {
        songpointer = (arr.length) - 1;
        main();
        audio.play();
    }
})




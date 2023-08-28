import VimeoPlayer from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.querySelector('iframe');
const player = new VimeoPlayer(iframe);
const KEY = "videoplayer-current-time";
const savedTime = localStorage.getItem(KEY);


player.on('timeupdate', throttle(e => {
    localStorage.setItem(KEY, e.seconds);
}, 1000));


if (savedTime !== null) {
    player.setCurrentTime(savedTime);
}


import { Howl } from "howler";
import music from '../../common/audio/Blind_Willie_Johnson-Dark_Was_The_Night_Cold_Was_The_Ground.mp3'
const playing = false;

function Audio() {
    var sound = new Howl({
        src: [music]
    });
    if (!playing) {
        sound.play();
    }else{
        sound.pause();
    }

} export default Audio

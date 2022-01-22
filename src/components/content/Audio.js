import { Howl } from "howler";
import music from '../../common/audio/Blind_Willie_Johnson-Dark_Was_The_Night_Cold_Was_The_Ground.mp3'


let playing =false
var sound = new Howl({
    src: [music]
});
function Audio() {
    if (!playing) {
        sound.play();
        playing=true;
    }else{
        sound.pause();
        playing=false;
    }
    return playing;

} export default Audio

import SpeakerOn from '../../assets/icons/speaker-on-icon.png'
import "./GuiVolume.css"

export function GuiVolume() {

    return (
        <div class="gui-volume-container">
            <div class="gui-volume-header">
                <img src={SpeakerOn} alt="Violin key icon" class="gui-header-icon"></img>
            </div>
            <div class="volume-element">
                <input type="range" min="0" max="100" value="50" class="volume-slider" id="js-gain-select">
                    <div class="percentages">
                        <div>0%</div>
                        <div>50%</div>
                        <div>100%</div>
                    </div>
                </input>
            </div>
        </div>
    );
}
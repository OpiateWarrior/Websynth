import { useState } from 'react';
import SpeakerOn from '../../assets/icons/speaker-on-icon.png'
import "./GuiVolume.css"

export function GuiVolume({userSettings, setUserSettings}) {
    const [volumeLevel, setVolumeLevel] = useState('50');

    const changeVolume = (event) => {
        setVolumeLevel(event.target.value);
        setUserSettings({
            ...userSettings,
            volume: volumeLevel
        })
        //console.log(userSettings);//for debugging purpouses.
    };

    return (
        <div className="gui-volume-container">
            <div className="gui-volume-header">
                <img src={SpeakerOn} alt="Violin key icon" className="gui-header-icon"></img>
            </div>
            <div className="volume-element">
                <input type="range" min="0" max="100" value={volumeLevel} className="volume-slider"
                    onChange={changeVolume}
                />

                <div className="percentages">
                    <div>0%</div>
                    <div>50%</div>
                    <div>100%</div>
                </div>
            </div>
        </div>
    );
}
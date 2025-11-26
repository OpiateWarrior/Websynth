import { use, useEffect, useState } from 'react';
import ViolinKey from '../../assets/icons/violin-key-icon.jpg'
import "./GuiScale.css"


export function GuiScale({userSettings, setUserSettings}) {
    const [selectedKey, setSelectedKey] = useState(userSettings.key);
    const [selectedScale, setSelectedScale] = useState(userSettings.scale);
    const [startingOctave, setStartingOctave] = useState(userSettings.startingOctave);
    const [rangeOfOctaves, setRangeOfOctaves] = useState(userSettings.rangeOfOctaves);

    const changeKey = (event) => {
        setSelectedKey(event.target.value);
        setUserSettings({
            ...userSettings,
            key: selectedKey
        })
        //console.log(userSettings);//for debugging purpouses.
    }

    const changeScale = (event) => {
        setSelectedScale(event.target.value);
        setUserSettings({
            ...userSettings,
            scale: selectedScale
        })
        //console.log(userSettings);//for debugging purpouses.
    }   

    const changeStartingOctave = (event) => {
        setStartingOctave(event.target.value);
        setUserSettings({
            ...userSettings,
            startingOctave: startingOctave
        })
        //console.log(userSettings);//for debugging purpouses.
    }

    const changeRangeOfOctaves = (event) => {
        setRangeOfOctaves(event.target.value);
        setUserSettings({
            ...userSettings,
            rangeOfOctaves: rangeOfOctaves
        })
        //console.log(userSettings);//for debugging purpouses.
    }

    return (
        <div className="gui-container">
            <div className="gui-header">
                <img src={ViolinKey} alt="Violin key icon" className="gui-header-icon"></img>
            </div>
            <div className="gui-element">
                <label>KEY:</label>

                <select 
                    className="dropdown-element" 
                    value={selectedKey}
                    onChange={changeKey}
                >
                    <option className="option-label" value="C">C</option>
                    <option className="option-label" value="C#">C#</option>
                    <option className="option-label" value="D">D</option>
                    <option className="option-label" value="D#">D#</option>
                    <option className="option-label" value="E">E</option>
                    <option className="option-label" value="F">F</option>
                    <option className="option-label" value="F#">F#</option>
                    <option className="option-label" value="G">G</option>
                    <option className="option-label" value="G#">G#</option>
                    <option className="option-label" value="A">A</option>
                    <option className="option-label" value="A#">A#</option>
                    <option className="option-label" value="B">B</option>
                </select>
            </div>

            <div className="gui-element">
                <label>SCALE:</label>

                <select 
                    className="dropdown-element"
                    value={selectedScale}
                    onChange={changeScale}
                >
                    <option value="chromatic">chromatic</option>
                    <option value="naturalMinor">natural Minor</option>
                    <option value="naturalMajor">natural Major</option>
                    <option value="pentatonicMinor">pentatonic Minor</option>
                    <option value="pentatonicMajor">pentatonic Major</option>
                    <option value="bluesMinor">blues Minor</option>
                    <option value="bluesMajor">blues Major</option>
                </select>
            </div>

            <div className="gui-element">
                <label>STARTING OCTAVE:</label>

                <select 
                    className="dropdown-element"
                    value={startingOctave}
                    onChange={changeStartingOctave}
                >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>

            <div className="gui-element">
                <label>RANGE OF OCTAVES:</label>

                <select 
                    className="dropdown-element"
                    value={rangeOfOctaves}
                    onChange={changeRangeOfOctaves}
                >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
        </div>
    )
}
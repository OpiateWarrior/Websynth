import { useEffect, useState } from 'react';
import ViolinKey from '../../assets/icons/violin-key-icon.jpg'
import "./GuiScale.css"


export function GuiScale({userSettings, setUserSettings}) {
    const [key, setKey]       = useState(userSettings.key);
    const [scale, setScale]   = useState(userSettings.scale);
    const [octave, setOctave] = useState(userSettings.octave);
    const [range, setRange]   = useState(userSettings.range);

    /*useEffect(()=>{
        console.log(userSettings);
    }, [userSettings]);*/

    const changeSettings = (event) => {
        const {name, value} = event.target;

        switch (name) {
            case 'key':
                setKey(value);
                setUserSettings({...userSettings, key: value});
                break;
            case 'scale':
                setScale(value);
                setUserSettings({...userSettings, scale: value});
                break;
            case 'octave':
                setOctave(value);
                setUserSettings({...userSettings, octave: Number(value)});
                break;
            case 'range':
                setRange(value);
                setUserSettings({...userSettings, range: Number(value)});
                break;
            deafult:
                break;
        }
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
                    name="key"
                    value={key}
                    onChange={changeSettings}
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
                    name="scale"
                    value={scale}
                    onChange={changeSettings}
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
                    name="octave"
                    value={octave}
                    onChange={changeSettings}
                >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select>
            </div>

            <div className="gui-element">
                <label>RANGE OF OCTAVES:</label>

                <select 
                    className="dropdown-element"
                    name="range"
                    value={range}
                    onChange={changeSettings}
                >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                </select>
            </div>
        </div>
    )
}
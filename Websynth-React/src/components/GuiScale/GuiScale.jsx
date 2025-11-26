import ViolinKey from '../../assets/icons/violin-key-icon.jpg'
import "./GuiScale.css"


export function GuiScale() {

    return (
        <div className="gui-container">
            <div className="gui-header">
                <img src={ViolinKey} alt="Violin key icon" className="gui-header-icon"></img>
            </div>
            <div className="gui-element">
                <label className="key-selector" >KEY:</label>

                <select id="js-key-select" name="key" className="dropdown-element">
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
                <label className="key-selector">SCALE:</label>

                <select id="js-scale-select" name="scale" className="dropdown-element">
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
                <label className="key-selector">STARTING OCTAVE:</label>

                <select id="js-octave-select" name="octave" className="dropdown-element">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
            <div className="gui-element">
                <label className="key-selector">RANGE OF OCTAVES:</label>

                <select id="js-range-select" name="octave-range" className="dropdown-element">
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
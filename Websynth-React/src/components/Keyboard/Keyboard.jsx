import { useEffect, useState } from 'react';
import { generateKeyboard } from '../../utils/generateKeyboard';
import './Keyboard.css';

export function Keyboard( {userSettings} ) {
    const [keyboard, setKeyboard] = useState(generateKeyboard(userSettings));
    const [mouseDown, setMouseDown] = useState(false);
    const [hoveredKey, setHoveredKey] = useState(null);

    useEffect(()=>{
        const newKeyboard = generateKeyboard(userSettings);
        setKeyboard(newKeyboard);
        console.log(newKeyboard);
    }, [userSettings]);

    return (
        <div 
            className  = "keyboard"
            onMouseDown={()=>{setMouseDown(true);}}
            onMouseUp={()=>{setMouseDown(false);}}
        >
            
            {keyboard.map((key)=>{
                const id = key.semitone + key.octave;
                const isHovered = hoveredKey === id;
                const isActive = mouseDown && isHovered;
                
                return(
                    <button 
                        key={id}
                        id={id}
                        className={`keyboardButton 
                            ${isHovered? "mouseover": ""}
                            ${isActive? "keyboardButtonActivated": ""}
                        `}
                        onMouseOver ={()=>{setHoveredKey(id);}}
                        onMouseOut  ={()=>{setHoveredKey(null);}}
                    >
				        {key.semitone}
			        </button>
                );
            })}
        </div>
    );
}
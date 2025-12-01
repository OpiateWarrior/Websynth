import { useEffect, useState } from 'react';
import './Keyboard.css'
import { newKeyboard } from '../../utils/newKeyboard';

export function Keyboard( {userSettings} ) {
    const [keyboard, setKeyboard] = useState(newKeyboard(userSettings));

    useEffect(()=>{
        setKeyboard(newKeyboard(userSettings))
    }, [userSettings]);

    return (
        <div className = "keyboard">
            {keyboard.map((key)=>{
                return(
                    <button 
                        className="keyboardButton"
                        key={key.semitone+key.octave}
                        id={key.semitone+key.octave}
                    >
				        {key.semitone}
			        </button>
                );
            })}
        </div>
    );
}
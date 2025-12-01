import { useEffect, useState } from 'react';
import './Keyboard.css'
import { newKeyboard } from '../../utils/newKeyboard';

export function Keyboard( {userSettings} ) {
    const [keyboard, setKeyboard] = useState();

    useEffect(()=>{
        console.log(userSettings);
        setKeyboard(newKeyboard(userSettings))
    }, [userSettings]);

    return (
        <div className = "keyboard">
            <button className="keyboardButton" >
				A
			</button>
        </div>
    );
}
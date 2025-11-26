import { Keyboard } from './components/Keyboard/Keyboard'
import { GuiScale } from './components/GuiScale/GuiScale'
import { GuiVolume } from './components/GuiVolume/GuiVolume'
import './App.css'
import { useState } from 'react'
import { deafultSettings } from './utils/deafultSettings'

function App() {
  const [userSettings, setUserSettings] = useState(deafultSettings);

  return (
    <>
      <GuiScale 
        userSettings={userSettings} 
        setUserSettings={setUserSettings}
      />
      <GuiVolume 
        userSettings={userSettings} 
        setUserSettings={setUserSettings}
      />
      <Keyboard 
        userSettings={userSettings} 
      />
    </>
  )
}

export default App

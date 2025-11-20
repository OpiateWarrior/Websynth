import { Keyboard } from './components/Keyboard/Keyboard'
import './App.css'
import { GuiScale } from './components/GuiScale/GuiScale'
import { GuiVolume } from './components/GuiVolume/GuiVolume'

function App() {

  return (
    <>
      <GuiScale />
      <Keyboard />
    </>
  )
}

export default App

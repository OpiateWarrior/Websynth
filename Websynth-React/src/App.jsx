import { Keyboard } from './components/Keyboard/Keyboard'
import { GuiScale } from './components/GuiScale/GuiScale'
import { GuiVolume } from './components/GuiVolume/GuiVolume'
import './App.css'

function App() {

  return (
    <>
      <GuiScale />
      <GuiVolume />
      <Keyboard />
    </>
  )
}

export default App

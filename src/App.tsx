import { useCallback } from 'react'
import { useLocalStorage } from 'usehooks-ts'
import './App.css'
import Intro from './features/Intro'
import MainTest from './features/MainTest'

function App() {
  const [introPassed, setIntroPassed] = useLocalStorage<boolean>("introPassed", false)

  const continueHandler = useCallback(() => setIntroPassed(true), []);

  return (
    introPassed ? <MainTest /> : <Intro continueHandler={continueHandler} />
  )
}

export default App

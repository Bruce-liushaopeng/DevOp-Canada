import { ThemeProvider } from '@emotion/react'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  console.log("app is rendered")
  return (
    <div>
        <Navbar />
        <h1>DevOp Canada</h1>
        <p> hi iam abhishek</p>
        <p> Iam in India </p>
    </div>
  )
}

export default App

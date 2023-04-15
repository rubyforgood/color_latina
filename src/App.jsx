import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button, Container } from '@mui/material/Button';



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Container maxWidth="sm">
          <Button variant="contained">Hello World</Button>
        </Container>
    </div>
  )
}

export default App

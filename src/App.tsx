import SakuraRescue from './features/SakuraRescue'
import { Box, Center, Container, Tag, Tooltip } from '@chakra-ui/react'
import SakuraHighScore from './features/SakuraHighScore'
import { useState } from 'react'
import './App.css'

function App() {
  const [egg, setEgg] = useState(false);
  return (
    <>
      <Box textAlign="right">
        <SakuraHighScore />
      </Box>
      <Center>
        <SakuraRescue />
      </Center>
      <Box className='footer' onMouseEnter={() => setEgg(true)} onMouseLeave={() => setEgg(false)}>
        {egg &&<Tooltip label='"Dedicated to Sale"'>
          &#9829;
        </Tooltip>}
      </Box>
    </>
  )
}

export default App

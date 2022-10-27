import SakuraRescue from './features/SakuraRescue'
import { Box, Center, Container } from '@chakra-ui/react'
import SakuraHighScore from './features/SakuraHighScore'

function App() {
  return (
    <>
      <Box textAlign="right">
        <SakuraHighScore />
      </Box>
      <Center>
        <SakuraRescue />
      </Center>
    </>
  )
}

export default App

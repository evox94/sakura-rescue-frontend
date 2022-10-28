import { Box, Center, Tooltip } from '@chakra-ui/react';
import { useState } from 'react'
import SakuraHighScore from '../SakuraHighScore';
import SakuraRescue from '../SakuraRescue';

export default function index() {
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

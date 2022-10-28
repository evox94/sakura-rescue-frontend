import { Alert, AlertIcon, AlertTitle, AlertDescription, VStack, Link } from '@chakra-ui/react'
import { useState } from 'react'
import { useTimeout } from 'usehooks-ts';
import { IntroProps } from './types';

export default function Success(props: IntroProps) {
  
  const [showLink, setShowLink] = useState(false);

  useTimeout(() => setShowLink(true), 10000);

  return (
    <VStack>
      <Alert
        status='success'
        variant='subtle'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        textAlign='center'
        height='200px'
      >
        <AlertIcon boxSize='40px' mr={0} />
        <AlertTitle mt={4} mb={1} fontSize='lg'>
          Test passed!
        </AlertTitle>
        <AlertDescription maxWidth='sm'>
          Thanks for participating. You can now continue with the practical test after you watch the final clip
        </AlertDescription>
      </Alert>
      {showLink && <Link onClick={props.continueHandler} fontWeight="bold" fontSize="2em">Click here to continue!</Link> }
    </VStack>

  )
}

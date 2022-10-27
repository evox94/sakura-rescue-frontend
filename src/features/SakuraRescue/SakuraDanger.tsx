import { Box, Button, Heading, HStack, Image, Input, VStack } from '@chakra-ui/react';
import { useState } from 'react'
import sakura_danger from './sakura_danger.png'
import { SakuraDangerProps } from './types'

export default function SakuraDanger(props: SakuraDangerProps) {
    var [username, setUsername] = useState(props.username);
    var [isInvalidUsername, setIsInvalidUsername] = useState(false);

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    }

    const trySaveSakura = () => {
        if (!username) {
            setIsInvalidUsername(true);
            return;
        }
        setIsInvalidUsername(false);
        props.attemptSavingHandler(username);
    }

    return (
        <VStack>
            <Heading>Sakura is Kidnapped!!!</Heading>
            <Box>
                <Image src={sakura_danger} alt='Sakura is in danger!' className='sakura_image sakura_image_danger' />
            </Box>
            <VStack>
                <Heading size="md">You have to save her</Heading>
                <HStack>
                    <Input isInvalid={isInvalidUsername} placeholder='Your Name' onChange={handleUsernameChange} value={username} />
                    <Button colorScheme="teal" onClick={trySaveSakura} disabled={props.disableButton}>Save Sakura</Button>
                </HStack>
            </VStack>
        </VStack>
    )
}
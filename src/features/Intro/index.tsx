import { QuestionIcon } from '@chakra-ui/icons'
import { Alert, AlertTitle, AspectRatio, Button, Center, Container, Heading, HStack, Input, VStack } from '@chakra-ui/react'
import { useState } from 'react'
import Success from './Success';
import { IntroProps } from './types';

const clips = {
    intro: "https://www.youtube.com/embed/X5o4AKyAdtk",
    wrong: "https://www.youtube.com/embed/JHBt19B_KpU",
    right: "https://www.youtube.com/embed/iA2-OZxAawE"
}

export default function IntroTest(props: IntroProps) {
    const [answer, setAnswer] = useState('');
    const [clip, setClip] = useState(clips.intro);

    const handleClick = () => {
        const normalizedAnswer = answer.trim().toLowerCase();
        if (normalizedAnswer == 'kakashi' || normalizedAnswer == "kakashi sensei") {
            setClip(clips.right);
        }
        else {
            setClip(clips.wrong);
        }
    }

    const isCorrect = clip == clips.right;

    return (
        <Center>
            <VStack>
                <Heading mt={5}>Chunin Exam</Heading>
                <AspectRatio minW="640px" ratio={16 / 9}>
                    <iframe
                        title='naruto'
                        src={clip}
                        allowFullScreen
                    />
                </AspectRatio>
                <VStack>
                    <Alert status='warning'>
                        <QuestionIcon />
                        <Container>
                            <AlertTitle>What is your sensei's name?</AlertTitle>
                        </Container>
                    </Alert>
                    <HStack>
                        <Input isDisabled={isCorrect} isInvalid={clip == clips.wrong} placeholder='Your Answer' value={answer} onChange={(e) => setAnswer(e.target.value)}></Input>
                        <Button isDisabled={isCorrect} onClick={handleClick}>Submit</Button>
                    </HStack>
                    {isCorrect && <Success continueHandler={props.continueHandler}/>}
                </VStack>
            </VStack>
        </Center>
    )
}

import { Button, Center, Spinner, useDisclosure } from "@chakra-ui/react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'
import Loadable from "../../components/Loadable";
import HighScoreTable from "./HighScoreTable";
import { useHighScores } from "./hooks";
import { HighScore } from "./types";

export default function SakuraRescue() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { highScores, error, isLoading } = useHighScores(isOpen);
    return (
        <>
            <Button onClick={onOpen}>Highscore</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Highscores</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Center>
                            <Loadable error={error} isLoading={isLoading}>
                                <HighScoreTable highscores={highScores} />
                            </Loadable>
                        </Center>

                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
import { Center, Heading, } from "@chakra-ui/react";
import { CounterProps } from "./types";

export default function SaveCounter(props: CounterProps) {

    return (
        <Center>
            <Heading >
                {props.username} has saved Sakura {props.count} times!
            </Heading>
        </Center>
    )
}
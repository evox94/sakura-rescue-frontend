import React from 'react'
import {
    Alert,
    AlertDescription,
    AlertIcon,
    AlertTitle,
    Box,
    Center,
    CloseButton,
    HStack,
    Tag,
    useDisclosure,
    VStack,
} from '@chakra-ui/react'
import { MissionReportProps } from './types'

export default function MissionReport(props: MissionReportProps) {
    const { report } = props;
    return (
        <Alert status='info'>
            <VStack m="auto">
                <Center>
                    <HStack>
                        <AlertIcon mr={0} />
                        <AlertTitle>Last mission report</AlertTitle>
                    </HStack>
                </Center>
                <Box>
                    <AlertDescription>
                        <VStack alignItems="flex-start">
                            <Box>
                                <HStack>
                                    <span>Jounin:</span>
                                    <Tag>{report.jounin}</Tag>
                                </HStack>
                            </Box>
                            <Box>
                                <HStack>
                                    <span>Genin:</span>
                                    {report.genins.map(x => <Tag key={x}>{x}</Tag>)}
                                </HStack>
                            </Box>
                        </VStack>
                    </AlertDescription>
                </Box>
            </VStack>
            <CloseButton
                    alignSelf='flex-start'
                    position='relative'
                    right={-1}
                    top={-1}
                    onClick={props.clearMissionReport}/>
        </Alert>
    )
}

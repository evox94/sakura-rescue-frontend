import {
    Alert,
    AlertDescription,
    AlertIcon,
    AlertTitle,
    Box,
    Center,
    CloseButton,
    Highlight,
    HStack,
    Tag,
    VStack,
} from '@chakra-ui/react'
import { MissionReportProps } from './types'

export default function MissionReport(props: MissionReportProps) {
    const { report } = props;

    const reportHeader = `Last mission report: ${report.success ? 'Sakura saved' : 'Sakura not saved :('}`
    const highlightColor = report.success ? 'green.100' : 'red.100'
    return (
        <Alert status='info'>
            <VStack m="auto">
                <Center>
                    <HStack>
                        <AlertIcon mr={0} />
                        <AlertTitle>
                            <Highlight query={["Sakura saved", "Sakura not saved :("]} styles={{ px: '1', py: '1', bg: highlightColor }}>
                                {reportHeader}
                            </Highlight>
                        </AlertTitle>
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
                                    {report.genin.map(x => <Tag key={x}>{x}</Tag>)}
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
                onClick={props.clearMissionReport} />
        </Alert>
    )
}

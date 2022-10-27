import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'

import { HighScoreTableProps } from "./types";

export default function HighScoreTable(props: HighScoreTableProps) {

    const rows = props.highscores.map(x => <Tr key={x.name}><Td>{x.name}</Td><Td>{x.count}</Td></Tr>)

    return (
        <TableContainer>
            <Table variant='simple'>
                <TableCaption>{'Top sakura rescuers <3'}</TableCaption>
                <Thead>
                    <Tr>
                        <Th>Name</Th>
                        <Th>Count</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {rows}
                </Tbody>
            </Table>
        </TableContainer>
    )
}
import React from 'react'
import { Flex, Heading, Table, TableContainer, Tbody, Td, Tr } from '@chakra-ui/react';

export function IngredientList({ ingredients, servingCount, calculateServingCount }) {

    return (
        <Flex >
            {!!!ingredients.length &&
                <Heading size='md' bg='blue.100' >Žádné ingredience.</Heading>
            }
            <TableContainer>
                <Table size='md'>
                    {ingredients.map((ingre) => (
                        <Tbody >
                            {ingre.isGroup

                                ?
                                <Tr bg='blue.100' >
                                    <Td></Td>
                                    <Td></Td>
                                    {ingre.name}
                                </Tr>
                                :
                                <Tr >{servingCount && calculateServingCount
                                    ? <Td>{Math.round((Number(ingre.amount) / servingCount * calculateServingCount) * 100) / 100}</Td>
                                    : <Td>{ingre.amount}</Td>
                                }
                                    <Td>{ingre.amountUnit}</Td>
                                    <Td >{ingre.name}</Td>
                                </Tr>
                            }
                        </Tbody>
                    ))}
                </Table>
            </TableContainer>
        </Flex >
    )
}

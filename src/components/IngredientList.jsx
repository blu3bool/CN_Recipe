import React from 'react'
import { Box, Flex, Heading, Table, TableContainer, Tbody, Td, Tr } from '@chakra-ui/react';

export function IngredientList({ ingredients, servingCount, calculateServingCount }) {

    return (
        <Box >
            {!!!ingredients.length &&

                <Heading textAlign='center' size='md' bg='blue.100' border='6px solid lightblue' w='400px'>Žádné ingredience.</Heading>


            }
            <TableContainer >
                <Table size='lg' >
                    {ingredients.map((ingre) => (
                        <Tbody key={ingre._id}>
                            {console.log(ingre)}
                            {ingre.isGroup

                                ?
                                <Tr border='3px solid lightblue' bg='blue.100'>
                                    <Td></Td>
                                    <Td>{ingre.name}</Td>
                                    <Td></Td>
                                </Tr>
                                :
                                <Tr >{servingCount && calculateServingCount && ingre.amount
                                    ? <Td>{Math.round((Number(ingre.amount) / servingCount * calculateServingCount) * 100) / 100} </Td>
                                    : <Td>{ingre.amount}{console.log(ingre.amount)}</Td>
                                }
                                    <Td>{ingre.amountUnit}</Td>
                                    <Td >{ingre.name}</Td>
                                </Tr>
                            }
                        </Tbody>
                    ))}
                </Table>
            </TableContainer>
        </Box >
    )
}

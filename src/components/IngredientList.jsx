import React from 'react'
import { Box, Heading, Table, TableContainer, Tbody, Td, Th, Tr } from '@chakra-ui/react';
import { IngredientsInFridge } from './IngredientsInFridge';


export function IngredientList({ ingredients, servingCount, calculateServingCount }) {

    return (
        <Box >
            {!!!ingredients.length &&

                <Heading textAlign='center' size='md' bg='lightblue' border='6px solid lightblue' w='400px'>Žádné ingredience.</Heading>


            }
            <TableContainer >
                <Table size='md' >
                    {ingredients.map((ingre) => (
                        <Tbody key={ingre._id}>
                            {ingre.isGroup
                                ?
                                <Tr border='3px solid lightblue' bg='blue.100'>
                                    <Th></Th>
                                    <Th></Th>
                                    <Th>{ingre.name}</Th>
                                    <Th></Th>
                                </Tr>
                                :
                                <>
                                    <Tr >
                                        <IngredientsInFridge ingre={ingre} servingCount={servingCount} calculateServingCount={calculateServingCount} />
                                        {servingCount && calculateServingCount && ingre.amount
                                            ? <Td>{Math.round((Number(ingre.amount) / servingCount * calculateServingCount) * 100) / 100} </Td>
                                            : <Td>{ingre.amount}</Td>
                                        }
                                        <Td>{ingre.amountUnit}</Td>
                                        <Td >{ingre.name}</Td>
                                    </Tr>
                                </>
                            }
                        </Tbody>
                    ))}
                </Table>
            </TableContainer>
        </Box >
    )
}

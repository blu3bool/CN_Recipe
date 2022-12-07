import React from 'react'
import { Box, Flex, Heading, Table, TableContainer, Tbody, Td, Text, Tr } from '@chakra-ui/react';
import { MdCheckCircle } from "react-icons/md";
import { useLocalStorage } from '../hooks/useLocalStorage';


export function IngredientList({ ingredients, servingCount, calculateServingCount }) {

    const [ingredientsStorage, setIngredientsStorage] = useLocalStorage("fridge", []);
    let isIngredientInFridge = false;
    return (
        <Box >
            {!!!ingredients.length &&

                <Heading textAlign='center' size='md' bg='blue.100' border='6px solid lightblue' w='400px'>Žádné ingredience.</Heading>


            }
            <TableContainer >
                <Table size='md' >
                    {ingredients.map((ingre) => (
                        <Tbody key={ingre._id}>
                            {ingre.isGroup
                                ?
                                <Tr border='3px solid lightblue' bg='blue.100'>
                                    <Td></Td>
                                    <Td>{ingre.name}</Td>
                                    <Td></Td>
                                </Tr>
                                :
                                <>
                                    <Tr >
                                        {ingredientsStorage.map((fridgeIngredient) =>

                                            <Box key={fridgeIngredient.id}>
                                                {Number(fridgeIngredient.amount) >= Math.round((Number(ingre.amount) / servingCount * calculateServingCount) * 100) / 100 &&
                                                    fridgeIngredient.name === ingre.name && fridgeIngredient.amountUnit === ingre.amountUnit &&
                                                    <>{isIngredientInFridge = true}</>
                                                }
                                                {Number(ingre.amount) === null && fridgeIngredient.name === ingre.name &&
                                                    <>{isIngredientInFridge = true}</>
                                                }

                                            </Box>
                                        )}
                                        {isIngredientInFridge === true
                                            ? <Td><MdCheckCircle color='green' />{isIngredientInFridge = false}</Td>
                                            : <Td><MdCheckCircle color='grey' /></Td>
                                        }

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

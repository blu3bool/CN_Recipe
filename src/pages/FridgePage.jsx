import { Box, Button, Heading, HStack, Input, Table, TableContainer, Tbody, Td, Th, Thead, Tr, VStack } from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';
import { useLocalStorage } from '../customHooks/useLocalStorage';

export function FridgePage() {
    const [amount, setAmount] = useState('');
    const [amountUnit, setAmountUnit] = useState('');
    const [name, setName] = useState('');
    const [ingredients, setIngredients] = useLocalStorage("fridge", []);
    function AddIngredient() {
        setIngredients([...ingredients, { name: name, amount: amount, amountUnit: amountUnit }])
    }
    return (
        <VStack>
            <Heading>Čo je v tvojej chladničke?</Heading>
            <TableContainer >
                <Table size='sm' >
                    <Thead>
                        <Tr>
                            <Th>Množstvo</Th>
                            <Th >Jednotka</Th>
                            <Th >Název</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {ingredients.map((ingre) =>
                            <Tr key={ingre.name}>
                                <Td >{ingre.amount}</Td>
                                <Td >{ingre.amountUnit}</Td>
                                <Td >{ingre.name}</Td>
                            </Tr>
                        )}
                    </Tbody>
                </Table>
            </TableContainer>
            <HStack>
                <Input placeholder='Množství' onChange={(e) => setAmount(e.currentTarget.value)} value={amount} />
                <Input placeholder='Jednotka' onChange={(e) => setAmountUnit(e.currentTarget.value)} value={amountUnit} />
            </HStack>
            <HStack>
                <Input placeholder='Název' onChange={(e) => setName(e.currentTarget.value)} value={name} />
                <Button onClick={AddIngredient}>Pridaj</Button>
            </HStack>
        </VStack>
    )
}

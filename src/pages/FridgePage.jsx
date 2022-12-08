import { Button, Heading, HStack, Input, Table, TableContainer, Tbody, Td, Th, Thead, Tr, VStack } from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { FaTrash } from "react-icons/fa";

export function FridgePage() {
    const [amount, setAmount] = useState('');
    const [amountUnit, setAmountUnit] = useState('');
    const [name, setName] = useState('');
    const [ingredients, setIngredients] = useLocalStorage("fridge", []);
    function AddIngredient() {
        const nextId = ingredients.length > 0 ? Math.max(...ingredients.map((ingre) => ingre.id)) + 1 : 0;
        setIngredients([...ingredients, { id: nextId, name: name, amount: amount, amountUnit: amountUnit }])
    }
    function removeIngredient(id) {
        const newIngredients = ingredients.filter((ingre) => ingre.id !== id);
        setIngredients(newIngredients)
    }
    return (
        <VStack>
            <Heading>Čo je v tvojej chladničke?</Heading>
            <TableContainer >
                <Table size='sm' >
                    <Thead>
                        <Tr>
                            <Th></Th>
                            <Th>Množstvo</Th>
                            <Th >Jednotka</Th>
                            <Th >Název</Th>
                        </Tr>
                    </Thead>
                    <Tbody>

                        {ingredients.map((ingre) =>
                            <Tr key={ingre.id}>
                                <Td ><Button onClick={() => removeIngredient(ingre.id)}><FaTrash /></Button></Td>
                                <Td >{ingre.amount}</Td>
                                <Td >{ingre.amountUnit}</Td>
                                <Td >{ingre.name}</Td>
                            </Tr>
                        )}
                    </Tbody>
                </Table>
            </TableContainer>
            <HStack>
                <Input type='number' placeholder='Množství' onChange={(e) => setAmount(e.currentTarget.value)} value={amount} />
                <Input placeholder='Jednotka' onChange={(e) => setAmountUnit(e.currentTarget.value)} value={amountUnit} />
            </HStack>
            <HStack>
                <Input placeholder='Název' onChange={(e) => setName(e.currentTarget.value)} value={name} />
                <Button onClick={AddIngredient}>Pridaj</Button>
            </HStack>
        </VStack>
    )
}

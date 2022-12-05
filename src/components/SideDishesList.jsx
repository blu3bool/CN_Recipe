import React, { useEffect, useState } from 'react'
import { FaQuestionCircle } from "react-icons/fa";
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Text
} from '@chakra-ui/react'
import { RecomendedRecipe } from '../components/RecomendedRecipe'
import { api } from '../api';
import { LoadingSpinner } from './LoadingSpinner';


export function SideDishesList({ sideDishes }) {
    const [recipes, setRecipes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    useEffect(() => {
        function getRecipes() {
            setIsLoading(true);
            api
                .get('/recipes')
                .then((response) => (
                    setRecipes(response.data)
                ))
                .catch((error) => setError(error))
                .finally(() => setIsLoading(false));
        }

        getRecipes();
    }, [])
    if (isLoading) {
        return <LoadingSpinner />;
    }
    if (error) {
        return <Text>{error}</Text>
    }

    return (
        <TableContainer w={300}>
            <Table size='sm' >
                <Thead>
                    <Tr>
                        <Th>Název</Th>
                        <Th >Čo k prílohe?</Th>
                    </Tr>
                </Thead>
                <Tbody >
                    {sideDishes.map((sideDish) =>
                        <Tr key={sideDish}>
                            <Td >{sideDish}</Td>
                            <Td ><RecomendedRecipe sideDish={sideDish} recipes={recipes} /></Td>
                        </Tr>
                    )}
                </Tbody>
            </Table>
        </TableContainer>

    )
}

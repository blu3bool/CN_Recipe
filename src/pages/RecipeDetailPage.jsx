import { Box, Heading, List, ListIcon, ListItem, Text, Button } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { api } from '../api';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { MdCheckCircle } from "react-icons/md";
import { Link as ReactRouterLink } from 'react-router-dom';
import { PreparationTime } from '../components/PreparationTime'
import { IngredientList } from '../components/IngredientList';
import { FormatDirections } from '../components/FormatDirections';
import { FormatDate } from '../components/FormatDate';
import { DeleteAlert } from '../components/DeleteAlert'


export function RecipeDetailPage() {

    const { slug } = useParams();
    const [detail, setDetail] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');


    useEffect(() => {
        function getRecipesDetail() {
            setIsLoading(true);
            api
                .get(`/recipes/${slug}`)
                .then((response) => setDetail(response.data))
                .catch((error) => setError(error))
                .finally(() => setIsLoading(false));
        }


        getRecipesDetail();
    }, [slug]);

    if (isLoading) {
        return <LoadingSpinner />;
    }
    if (error) {
        return <Text>{error}</Text>
    }
    return (
        <Box px={5}>
            {detail && (
                <>
                    <Heading mb={5}>{detail.title}</Heading>
                    <Box mb={10}>
                        <Text textAlign='right'>
                            <DeleteAlert value={detail} detail={detail} />
                            <Button as={ReactRouterLink} to={`/recept/${slug}/uprava`} >Upravit</Button>
                        </Text>
                        <Text  >
                            <PreparationTime preparationTimeVar={detail.preparationTime} />
                        </Text>

                    </Box>
                    <Box display='flex' mt={10} >
                        <Box w={400} >

                            <Heading mb={3} size='md'>
                                Ingrediencie:
                            </Heading>
                            {detail.ingredients && (
                                <List mb={20} spacing={3}>
                                    <Text ><b>Počet porcii :</b> {detail.servingCount}</Text>
                                    {detail.ingredients.length === 0 &&
                                        <Box >
                                            <Heading size='md' color='red.500'>
                                                Žádné ingredience.
                                            </Heading>
                                        </Box>
                                    }
                                    {detail.ingredients.map((ingredient) => (

                                        <ListItem key={ingredient._id}>
                                            <Box display="flex" gap={2}>
                                                <ListIcon as={MdCheckCircle} color='green.500' />
                                                <IngredientList ingredient={ingredient.amount} />
                                                <IngredientList ingredient={ingredient.amountUnit} />
                                                <IngredientList ingredient={ingredient.name} />
                                            </Box>
                                        </ListItem>
                                    ))}
                                </List>
                            )}
                            <Text>Naposledy upraveno:</Text>
                            <FormatDate date={detail.lastModifiedDate} />

                        </Box>
                        {detail.directions !== undefined
                            ? detail.directions.length !== 0
                                ?
                                <FormatDirections TextToSplit={detail.directions} />
                                : <Text bg='red.100'>Žádný postup.</Text>
                            : <Text bg='red.100'>Žádný postup.</Text>
                        }

                    </Box>
                </>
            )
            }
        </Box >
    )
}









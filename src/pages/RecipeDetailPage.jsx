import { Box, Heading, List, ListIcon, ListItem, Text, Button, HStack, Stack, VStack, ButtonGroup, Spacer, Grid, Flex, Center, InputGroup, InputLeftAddon, Input, Square } from '@chakra-ui/react'
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
import { NumberInputForm } from '../components/NumberInputForm';


export function RecipeDetailPage() {

    const { slug } = useParams();
    const [detail, setDetail] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [title, setTitle] = useState('');
    const [time, setTime] = useState(0);
    const [sideDish, setSideDish] = useState(null);
    const [servingCount, setServingCount] = useState(0);
    const [calculateServingCount, setCalculateServingCount] = useState(0);
    const [ingredients, setIngredients] = useState([]);
    const [directions, setDirections] = useState('');


    useEffect(() => {
        function getRecipesDetail() {
            setIsLoading(true);
            api
                .get(`/recipes/${slug}`)
                .then((response) =>
                (
                    setDetail(response.data),
                    setTitle(response.data.title),
                    setTime(response.data.preparationTime),
                    setSideDish(response.data.sideDish),
                    setServingCount(response.data.servingCount),
                    setDirections(response.data.directions),
                    setIngredients(response.data.ingredients),
                    setCalculateServingCount(response.data.servingCount)

                ))
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
        <Box px={5} >
            {detail && (
                <Box>
                    <HStack mb={10}>
                        <Box>
                            <Heading color='blue.500'>{detail.title}</Heading>
                        </Box>
                        <Spacer />
                        <Flex gap={2}>
                            <DeleteAlert value={detail} detail={detail} />
                            <Button as={ReactRouterLink} to={`/recept/${slug}/uprava`} >Upravit</Button>
                        </Flex>
                    </HStack>

                    <Box mb={3}>
                        <PreparationTime preparationTimeVar={time} />
                    </Box>

                    <HStack alignItems='left' >
                        <VStack alignItems='left'>
                            {servingCount && ingredients.length &&
                                <InputGroup>
                                    <InputLeftAddon bg='blue.100' children='Počet porcí' />
                                    <NumberInputForm inputValue={calculateServingCount} onInputValueChange={setCalculateServingCount} />
                                </InputGroup>
                            }
                            {console.log(ingredients)}
                            <IngredientList ingredients={ingredients} servingCount={servingCount} calculateServingCount={calculateServingCount} />
                        </VStack>
                        <Flex>
                            {directions
                                ? <FormatDirections directions={directions} />
                                : <Heading size='md' bg='blue.100' >Žádný postup.</Heading>
                            }
                        </Flex>
                    </HStack>
                    <Heading size='sm' mt={3}>Naposledy upraveno:</Heading>
                    <FormatDate date={detail.lastModifiedDate} />
                </Box>

            )}
        </Box>
    )
}









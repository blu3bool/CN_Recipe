import { Box, Heading, List, ListIcon, ListItem, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { api } from '../api';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { MdCheckCircle } from "react-icons/md";
import { TimeIcon } from '@chakra-ui/icons'
import { PreparationTime } from '../components/PreparationTime'



export function RecipeDetailPage() {

    const { slug } = useParams();
    const [detail, setDetail] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('')
    const span = <span> whatever your string </span>

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
                    <Heading>{detail.title}</Heading>
                    <Box display="flex" justifyContent="space-between" mt={10}>
                        <Box width={750} >
                            <Text mb={10}>
                                <PreparationTime preparationTimeVar={detail.preparationTime} />
                            </Text>
                            <Heading mb={3} size='md'>
                                Ingrediencie:
                            </Heading>
                            {span}
                            {detail.ingredients && (
                                <List mb={20} spacing={3}>
                                    {detail.ingredients.map((ingredient) => (

                                        <ListItem key={ingredient._id}>
                                            <Box display="flex">
                                                <ListIcon as={MdCheckCircle} color='green.500' />

                                                <Text>
                                                    {`${ingredient.amount} ${ingredient.amountUnit}   ${ingredient.name}`}
                                                </Text>

                                            </Box>
                                        </ListItem>
                                    ))}
                                </List>
                            )}
                            <Text>Naposledy upraveno:</Text>
                            <Text>{detail.lastModifiedDate}</Text>
                        </Box>
                        <Box >

                            {detail.directions && <Text ml={20}>{detail.directions}</Text>}

                        </Box>
                    </Box>
                </>
            )
            }
        </Box >
    )
}









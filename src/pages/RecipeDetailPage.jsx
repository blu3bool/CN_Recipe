import { Box, Heading, Text, Button, HStack, VStack, Spacer, Flex, InputGroup, InputLeftAddon } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import { LoadingSpinner } from '../components/LoadingSpinner';
import { Link as ReactRouterLink } from 'react-router-dom';
import { PreparationTime } from '../components/PreparationTime'
import { IngredientList } from '../components/IngredientList';
import { FormatDirections } from '../components/FormatDirections';
import { FormatDate } from '../components/FormatDate';
import { DeleteAlert } from '../components/DeleteAlert'
import { NumberInputForm } from '../components/NumberInputForm';
import '../module/style.css'
import { useRecipesDetail } from "../hooks/useRecipesDetail";
import { FaDrumstickBite } from 'react-icons/fa';


export function RecipeDetailPage() {

    const { slug } = useParams();
    const { detail, isLoading, error, title, time, sideDish, servingCount, calculateServingCount, setCalculateServingCount, ingredients, directions } = useRecipesDetail(slug);

    if (isLoading) {
        return <LoadingSpinner />;
    }
    if (error) {
        return <Text>{error}</Text>
    }

    return (
        <Box px={5} >
            {detail && (
                <Box >
                    <HStack mb={10}>
                        <Box>
                            <Heading color='blue.500'>{title}</Heading>
                        </Box>
                        <Spacer />
                        <Flex gap={2}>
                            <DeleteAlert title={title} id={detail._id} detail={detail} />
                            <Button as={ReactRouterLink} to={`/recept/${slug}/uprava`} bg={'blue.200'}>Upravit</Button>
                        </Flex>
                    </HStack>

                    <Box mb={3} gap={3} >
                        <HStack>
                            {time !== 0 &&
                                < PreparationTime preparationTimeVar={time} />
                            }
                            {sideDish &&
                                <>
                                    <FaDrumstickBite />
                                    <Text>{sideDish}</Text>
                                </>
                            }
                        </HStack>
                    </Box>

                    <HStack alignItems='left' >
                        <VStack alignItems='left' mr={5}>
                            {servingCount && ingredients.length &&
                                <InputGroup size='lg'>
                                    <InputLeftAddon bg='blue.100' children='Počet porcí' />
                                    <NumberInputForm inputValue={calculateServingCount} onInputValueChange={setCalculateServingCount} />
                                </InputGroup>
                            }
                            <IngredientList ingredients={ingredients} servingCount={servingCount} calculateServingCount={calculateServingCount} />
                        </VStack>
                        {directions
                            ? <FormatDirections directions={directions} />
                            : <Box w="100%" >
                                <Heading textAlign='center' size='md' bg='lightblue' border='6px solid lightblue' >Žádný postup.</Heading>
                            </Box>
                        }
                    </HStack>
                    <Heading size='sm' mt={3}>Naposledy upraveno:</Heading>
                    <FormatDate date={detail.lastModifiedDate} />
                </Box>

            )}
        </Box>
    )
}









import { Box, Card, CardBody, CardFooter, Heading, HStack, Image, Stack, Text } from '@chakra-ui/react';
import { useRecipes } from '../hooks/useRecipes';
import { useSideDish } from '../hooks/useSideDish';
import { LoadingSpinner } from './LoadingSpinner';
import { RecomendedRecipe } from './RecomendedRecipe';
import PlaceholderImage from '../images/sideDish.png'



export function SideDishList() {

    const { sideDishes, isLoading, error } = useSideDish();
    const { recipes } = useRecipes();

    if (isLoading) {
        return <LoadingSpinner />;
    }
    if (error) {
        return <Text>{error}</Text>
    }

    return (
        <Box display="flex" gap={10} flexWrap="wrap" justifyContent="center">
            {sideDishes.map((sideDish) =>
                <Card
                    direction={{ base: 'column', sm: 'row' }}
                    overflow='hidden'
                    variant='outline'
                    className='shadowbox'
                    key={sideDish}

                >
                    <Image
                        objectFit='cover'
                        maxW={{ base: '100%', sm: '200px' }}
                        src={PlaceholderImage}
                        alt='SideDish'
                    />
                    <Stack>
                        <CardBody>
                            <Heading size='md'>{sideDish}</Heading>
                        </CardBody>
                        <CardFooter display='block'>
                            <Heading size='sm' >Čo dobré by si si dal k prílohe?</Heading>
                            <HStack>
                                <Text>Tady máš naše odporučanie: </Text>
                                <RecomendedRecipe sideDish={sideDish} recipes={recipes} />
                            </HStack>
                        </CardFooter>
                    </Stack>
                </Card >
            )}
        </Box>


    );
}

import { Card, CardBody, Image, CardFooter, Text, Heading, Stack, HStack } from '@chakra-ui/react'
import { RecomendedRecipe } from '../components/RecomendedRecipe'
import { useRecipes } from '../hooks/useRecipes';
import PlaceholderImage from '../images/sideDish.png'


export function SideDishesList({ sideDish, recipes }) {


    return (
        <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
            className='shadowbox'

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

    )
}

import { Card, CardBody, Image, Divider, CardFooter, Text, Box, VStack, HStack, Heading } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import PlaceholderImage from '../images/food-placeholder.png'
import SideDishImage from '../images/food_icon.png'
import { PreparationTime } from './PreparationTime'
import '../module/style.css'



export function RecipeCard({ slug, title, preparationTime, sideDish }) {

    return (

        < Link to={`/recept/${slug}`
        }>
            <Card maxW='md' className='shadowbox'>
                <CardBody>
                    <Image
                        src={PlaceholderImage}
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                    />

                </CardBody>
                <Divider />
                <CardFooter >
                    <VStack align='left'>
                        <Text>{title}</Text>
                        <HStack>
                            {preparationTime !== 0 &&
                                <PreparationTime preparationTimeVar={preparationTime} />
                            }
                            {sideDish !== undefined &&
                                <Text display='flex' alignItems='baseline' gap={1} >
                                    <Image boxSize='3.5' src={SideDishImage}></Image>
                                    {sideDish}
                                </Text>
                            }
                            {preparationTime === 0 && sideDish === undefined &&
                                <Text > Žiadne udaje</Text>
                            }
                        </HStack>
                    </VStack>


                </CardFooter>
            </Card>
        </Link >
    )
}
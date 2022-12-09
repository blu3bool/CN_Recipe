import { Card, CardBody, Image, Divider, CardFooter, Text, VStack, HStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import PlaceholderImage from '../images/food-placeholder.png'
import { FaDrumstickBite } from 'react-icons/fa';
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
                            {sideDish &&
                                <Text display='flex' alignItems='baseline' gap={1} >
                                    <FaDrumstickBite />
                                    {sideDish}
                                </Text>
                            }
                            {preparationTime === 0 && sideDish === undefined &&
                                <Text color='blue.200'> Žiadne udaje</Text>
                            }
                        </HStack>
                    </VStack>


                </CardFooter>
            </Card>
        </Link >
    )
}
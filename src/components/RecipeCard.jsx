import { Card, CardBody, Image, Heading, Divider, CardFooter, Text, Box } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import PlaceholderImage from '../images/food-placeholder.png'
import SideDishImage from '../images/food_icon.png'
import { PreparationTime } from './PreparationTime'



export function RecipeCard({ slug, title, preparationTime, sideDish }) {

    return (

        < Link to={`/recept/${slug}`
        }>
            <Card maxW='md' >
                <CardBody>
                    <Image
                        src={PlaceholderImage}
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                    />

                </CardBody>
                <Divider />
                <CardFooter >
                    <Box >
                        <Text size='md'> {title} </Text>
                        <Box display='flex' alignItems='baseline' gap={3}  >
                            <PreparationTime preparationTimeVar={preparationTime} />
                            {sideDish !== undefined &&
                                <Text display='flex' alignItems='baseline' gap={1} >
                                    <Image boxSize='3.5' src={SideDishImage}></Image>
                                    {sideDish}
                                </Text>


                            }
                        </Box>

                    </Box>


                </CardFooter>
            </Card>
        </Link >
    )
}
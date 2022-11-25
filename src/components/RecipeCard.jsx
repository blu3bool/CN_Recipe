import { Card, CardBody, Image, Stack, Heading, Divider, CardFooter, ButtonGroup, Button, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import PlaceholderImage from '../images/food-placeholder.png'



export function RecipeCard({ slug, title, preparationTime }) {

    return (
        <Link to={`/recept/${slug}`}>
            <Card maxW='sm'>
                <CardBody>
                    <Image
                        src={PlaceholderImage}
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{title}</Heading>

                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <Text color='blue.600' fontSize='2xl'>
                        {preparationTime}
                    </Text>

                </CardFooter>
            </Card>
        </Link>
    )
}
import { Popover, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Button, Box, Heading } from '@chakra-ui/react'
import { FaQuestionCircle } from 'react-icons/fa'

export function RecomendedRecipe({ sideDish, recipes }) {

    return (
        <Popover >
            <PopoverTrigger>
                <Button variant='ghost'><FaQuestionCircle /></Button>
            </PopoverTrigger>
            <PopoverContent width='auto'>
                <PopoverCloseButton />
                <PopoverHeader color='blue.500'>Naše odporučania</PopoverHeader>

                <PopoverBody  >
                    <Box>
                        {recipes.map((recipe) => (
                            <Box key={recipe._id}>
                                {recipe.sideDish === sideDish &&
                                    <Heading size='sm'>{recipe.title}</Heading>
                                }
                            </Box>
                        )
                        )}
                    </Box>
                </PopoverBody>
            </PopoverContent>
        </Popover >
    )
}

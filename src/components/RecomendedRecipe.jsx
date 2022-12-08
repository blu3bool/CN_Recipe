import { Popover, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Button, Box, Heading } from '@chakra-ui/react'
import { number } from 'prop-types';
import { useState } from 'react';
import { FaQuestionCircle } from 'react-icons/fa'

export function RecomendedRecipe({ sideDish, recipes }) {
    let count = 0
    return (
        <Popover placement='left'>
            <PopoverTrigger>
                <Button variant='ghost'><FaQuestionCircle /></Button>
            </PopoverTrigger>
            <PopoverContent >
                <PopoverCloseButton />
                <PopoverHeader color='blue.500'>Naše odporučania</PopoverHeader>

                <PopoverBody >
                    {recipes.map((recipe) => (
                        <Box key={recipe._id} >
                            {recipe.sideDish === sideDish && count < 3 &&
                                (count++,
                                    < Heading size='sm' >{recipe.title}</Heading>
                                )
                            }
                        </Box>
                    ))}
                </PopoverBody>
            </PopoverContent>
        </Popover >
    )
}

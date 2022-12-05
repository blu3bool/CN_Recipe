import { Popover, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Button, Text, Box, Heading } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { FaQuestionCircle } from 'react-icons/fa'

export function RecomendedRecipe({ sideDish, recipes }) {

    return (
        <Popover >
            <PopoverTrigger>
                <Button variant='ghost'><FaQuestionCircle /></Button>
            </PopoverTrigger>
            <PopoverContent width='auto'>
                <PopoverCloseButton />
                <PopoverHeader color='#ADD8E6'>Naše odporučania</PopoverHeader>

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

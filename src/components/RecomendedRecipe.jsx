import { Popover, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Button, Text, Box, Heading } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { FaQuestionCircle } from 'react-icons/fa'
import { api } from '../api';
import { LoadingSpinner } from '../components/LoadingSpinner';

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
                            <>
                                {recipe.sideDish === sideDish &&
                                    <Heading size='sm'>{recipe.title}</Heading>
                                }
                            </>
                        )
                        )}
                    </Box>
                </PopoverBody>
            </PopoverContent>
        </Popover>
    )
}

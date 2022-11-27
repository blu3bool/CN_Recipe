import React from 'react'
import { Text } from '@chakra-ui/react';

export function IngredientList({ ingredient }) {

    return (
        <Text >
            {ingredient !== undefined &&
                ingredient
            }
        </Text>
    )
}

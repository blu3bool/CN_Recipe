import React from 'react'
import { Text, Box, List, ListItem } from '@chakra-ui/react';

export function FormatDirections({ TextToSplit }) {

    const splitedText = TextToSplit.split('\n');

    return (
        <List spacing={3}>
            {splitedText.map((split, index) => (
                < ListItem >
                    {Number.isInteger(parseInt(split)) === true && split.substring(1, 2) === '.' && split.substring(2, 3) === ' '
                        ? <Box display="flex" gap={3}>
                            <Text bg='red.100'>{split.substring(0, split.indexOf(' '))}</Text>
                            <Text>{split.substring(split.indexOf(' '))}</Text>
                        </Box>
                        : <Box>
                            <Text>
                                {split}
                            </Text>
                        </Box>

                    }
                </ListItem>)




            )
            }
        </List >
    )

}

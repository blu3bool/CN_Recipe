import React from 'react'
import { Text } from '@chakra-ui/react';
import { TimeIcon } from '@chakra-ui/icons'

export function PreparationTime({ preparationTimeVar }) {

    const hours = Math.floor(preparationTimeVar / 60);
    const minutes = preparationTimeVar % 60;
    return (
        <Text >
            {!!preparationTimeVar &&
                <Text>{preparationTimeVar % 60 !== 0 && hours !== 0 &&
                    <Text color='blue.600' fontSize='1xl'>
                        <TimeIcon /> {hours} h {minutes} min
                    </Text>
                }
                    {preparationTimeVar % 60 === 0 && hours !== 0 &&
                        <Text color='blue.600' fontSize='1xl' >
                            <TimeIcon /> {hours} h
                        </Text>
                    }

                    {hours === 0 &&
                        <Text color='blue.600' fontSize='1xl' >
                            <TimeIcon /> {minutes} min
                        </Text>
                    }</Text>
            }
        </Text>
    )
}

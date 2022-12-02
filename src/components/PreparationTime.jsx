import React from 'react'
import { Box, HStack } from '@chakra-ui/react';
import { TimeIcon } from '@chakra-ui/icons'

export function PreparationTime({ preparationTimeVar }) {

    const hours = Math.floor(preparationTimeVar / 60);
    const minutes = preparationTimeVar % 60;
    let onlyMinutes = hours === 0
    let onlyHours = minutes === 0
    console.log(preparationTimeVar)
    return (
        <>
            {preparationTimeVar &&
                <HStack color='blue.600' fontSize='1xl' gap={1}>
                    <TimeIcon />
                    {minutes
                        ? <>{`${minutes} min`} </>
                        : <>{onlyHours
                            ? `${hours} h`
                            : `${hours} h ${minutes} min`
                        }</>
                    }
                </HStack>
            }
        </>
    )
}

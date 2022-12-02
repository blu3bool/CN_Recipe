import { Button, Popover, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Text } from '@chakra-ui/react'
import { FormatDirections } from '../components/FormatDirections';
import React from 'react'

export function DirecionView({ directionsValue }) {
    return (
        <Popover >
            <PopoverTrigger>
                <Button>Náhled</Button>
            </PopoverTrigger>
            <PopoverContent width={1000} >
                <PopoverCloseButton />
                <PopoverHeader color='#ADD8E6'>Náhled postupu!</PopoverHeader>
                <PopoverBody  >
                    {directionsValue !== '' && directionsValue !== undefined
                        ? <FormatDirections directions={directionsValue} />
                        : `PRAZDNO`
                    }
                </PopoverBody>
            </PopoverContent>
        </Popover>
    )
}

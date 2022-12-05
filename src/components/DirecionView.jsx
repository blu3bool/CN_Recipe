import { Button, Popover, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger } from '@chakra-ui/react'
import { FormatDirections } from '../components/FormatDirections';
import React from 'react'

export function DirecionView({ directionsValue }) {
    return (
        <Popover >
            <PopoverTrigger>
                <Button>Náhled</Button>
            </PopoverTrigger>
            <PopoverContent width='auto' >
                <PopoverCloseButton />
                <PopoverHeader color='#ADD8E6'>Náhled postupu!</PopoverHeader>
                <PopoverBody  >
                    {directionsValue !== '' && directionsValue !== undefined
                        ? <FormatDirections directions={directionsValue} />
                        : `Nieje žiadný postup`
                    }
                </PopoverBody>
            </PopoverContent>
        </Popover>
    )
}

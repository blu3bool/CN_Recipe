import { Button, Popover, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger } from '@chakra-ui/react'
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
                <PopoverHeader color='blue.200'>Náhled postupu!</PopoverHeader>
                <PopoverBody  ><FormatDirections TextToSplit={directionsValue} /></PopoverBody>
            </PopoverContent>
        </Popover>
    )
}

import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Button,
} from '@chakra-ui/react';
import { useState } from 'react';

export function NumberInputForm({ onInputValueChange, placeholder, inputValue }) {
    return (
        <NumberInput
            min={1}
            value={inputValue}
            onChange={(val) => onInputValueChange(val)}
        >
            <NumberInputField placeholder={placeholder} />
            <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
            </NumberInputStepper>
        </NumberInput>
    );
}

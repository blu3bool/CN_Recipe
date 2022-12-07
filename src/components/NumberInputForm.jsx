import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
} from '@chakra-ui/react';

export function NumberInputForm({ onInputValueChange, placeholder, inputValue }) {
    return (
        <NumberInput
            min={0}
            value={inputValue}
            onChange={(val) => onInputValueChange(val)}
            size='lg'
        >
            <NumberInputField placeholder={placeholder} />
            <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
            </NumberInputStepper>
        </NumberInput>
    );
}

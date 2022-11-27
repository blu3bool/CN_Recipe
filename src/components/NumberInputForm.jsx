import { NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, Button } from "@chakra-ui/react";
import { useState } from "react";
export function NumberInputForm(props) {
    return (
        <NumberInput min={1} >
            <NumberInputField time={props.inputValue}
                onChange={(e) => props.onInputValueChange(e.target.value)} />
            <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
            </NumberInputStepper>
        </NumberInput>
    )
}
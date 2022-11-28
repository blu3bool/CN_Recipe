import React, { useEffect, useState } from 'react'
import { Box, Button, HStack, Input, Spacer, Grid, Text, VStack, InputGroup, InputRightAddon, Stack, InputRightElement, Center, Heading, Select, } from "@chakra-ui/react";
import { NumberInputForm } from './NumberInputForm';
import { api } from '../api';



export function BasicInformation({ onInputValueChange, inputValue, inputValue2, onInputValueChange2 }) {


    const [servingCount, setServingCount] = useState(0);
    const [time, setTime] = useState(0);

    useEffect(() => {
        function SideDishes() {
            api.get('recipes/side-dishes').then(onFetchSuccess)
        }
        SideDishes();
    }, [])
    function onFetchSuccess({ data }) {
        setSidedishes({
            data
        });
    }
    const [sidedishes, setSidedishes] = useState([]);
    return (
        <VStack alignItems='left' >
            <Text fontSize='xl'>Základní údaje</Text>
            <Text >Doba přípravy</Text>
            <InputGroup >
                <NumberInputForm inputValue={inputValue2} onInputValueChange={onInputValueChange2} />
                <InputRightAddon children='min' />
            </InputGroup >
            <Text>Počet porcí</Text>
            <InputGroup>
                <NumberInputForm inputValue={servingCount} onInputValueChange={setServingCount} />
            </InputGroup>
            <Text>Příloha</Text>
            {sidedishes.length !== 0 &&
                <Select placeholder='Select option'

                    value={inputValue}
                    onChange={(val) => onInputValueChange(val.target.value)}

                >
                    {sidedishes.data.map((dish) =>
                        <option value={dish}
                        >{dish}</option>

                    )}

                </Select>
            }
        </VStack>
    )
}

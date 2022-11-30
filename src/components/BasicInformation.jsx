import React, { useEffect, useState } from 'react'
import { Box, Button, HStack, Input, Spacer, Grid, Text, VStack, InputGroup, InputRightAddon, Stack, InputRightElement, Center, Heading, Select, } from "@chakra-ui/react";
import { NumberInputForm } from './NumberInputForm';
import { api } from '../api';



export function BasicInformation({ inputValueForSideDish, onInputValueChangeForSideDish, inputValueForTime, onInputValueChangeForTime, inputValueForServingCount, onInputValueChangeForServingCount }) {

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
                <NumberInputForm inputValue={inputValueForTime} onInputValueChange={onInputValueChangeForTime} />
                <InputRightAddon children='min' />
            </InputGroup >
            <Text>Počet porcí</Text>
            <InputGroup>
                <NumberInputForm inputValue={inputValueForServingCount} onInputValueChange={onInputValueChangeForServingCount} />
            </InputGroup>
            <Text>Příloha</Text>

            {sidedishes.length !== 0 &&
                <Select placeholder='Select option'
                    value={inputValueForSideDish}
                    onChange={(val) => onInputValueChangeForSideDish(val.target.value)} >

                    {sidedishes.data.map((dish) =>
                        <option value={dish}
                        >{dish}</option>

                    )}
                </Select>
            }

        </VStack>
    )
}

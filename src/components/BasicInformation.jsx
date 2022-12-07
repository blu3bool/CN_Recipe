import React, { useEffect, useState } from 'react'
import { Text, VStack, InputGroup, InputRightAddon, Select, HStack, Input, Button, Heading } from "@chakra-ui/react";
import { NumberInputForm } from './NumberInputForm';
import { api } from '../api';
import { FaCheck, FaTimes } from 'react-icons/fa';



export function BasicInformation({ inputValueForSideDish, onInputValueChangeForSideDish, inputValueForTime, onInputValueChangeForTime, inputValueForServingCount, onInputValueChangeForServingCount }) {
    const [count, setCount] = useState(0);
    function addNewSideDish() {
        if (count === 1) {

            setCount(0)
        }
        else {
            setCount(count + 1)

        }
        onInputValueChangeForSideDish('')
    }

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
                <>
                    {count !== 1
                        ? <>
                            <Select placeholder='Select option'
                                value={inputValueForSideDish}
                                onChange={(val) => onInputValueChangeForSideDish(val.target.value)} >
                                {sidedishes.data.map((dish) =>
                                    <option key={dish} value={dish}
                                    >{dish}</option>

                                )}
                                { }
                            </Select>
                            <Heading size='sm'>Nepáči sa ti žiadná odporúčaná príloha?</Heading>
                        </>
                        :
                        <>
                            {count === 1 &&
                                <Input placeholder='Názov novej prílohy'
                                    value={inputValueForSideDish}
                                    onChange={(val) => onInputValueChangeForSideDish(val.target.value)} />
                            }
                        </>
                    }
                    <Button onClick={addNewSideDish} colorScheme='green'>
                        {count === 1
                            ?
                            <FaTimes />
                            : <Text>Zadaj vlastnú prílohu</Text>
                        }
                    </Button>

                </>
            }

        </VStack>
    )
}

import { Box, Button, HStack, Input, Spacer, Grid, Text, VStack, InputGroup, InputRightAddon, Stack, InputRightElement, Center, } from "@chakra-ui/react";
import { Link, Link as ReactRouterLink } from 'react-router-dom';
import { FaSave } from "react-icons/fa";
import { useState } from "react";
import { NumberInputForm } from "../components/NumberInputForm";




export function NewRecipePage() {
    const [title, setTitle] = useState('');
    const [sideDish, setSideDish] = useState('');
    const [time, setTime] = useState('');
    const [servingCount, setServingCount] = useState('');

    function handleInputTitleChange(event) {
        setTitle(event.currentTarget.value)
    }
    function handleInputSideDishChange(event) {
        setSideDish(event.currentTarget.value)
    }
    function AddNewRecipe() {
        console.log(title)
        console.log(sideDish)
        console.log(time)
        console.log(servingCount)
    }
    return (
        <Box px={5} >


            <HStack mb={5}>
                <Box fontSize='5xl' color='blue.400'>
                    {title === ''
                        ? 'Nový recept'
                        : title
                    }
                </Box>
                <Spacer />
                <Box mb={10}  >
                    <HStack spacing={2} alignItems='end' >
                        <Button gap={1} bg='green.300' color='white' onClick={AddNewRecipe}><FaSave />Uložit</Button>
                        <Link as={ReactRouterLink} to="/">
                            <Button>Zrušit</Button>
                        </Link>
                    </HStack>
                </Box>
            </HStack >


            <Box>
                <Input isInvalid errorBorderColor='crimson' placeholder='Název' value={title} onChange={handleInputTitleChange} />
            </Box>
            <Box mb={2}>
                {title === ''
                    ? <Text color='red.400'>Název je povinný</Text>
                    : <Text></Text>
                }
            </Box>


            <Grid >
                <HStack gap={5}>
                    <VStack alignItems='left' >
                        <Text fontSize='xl'>Základní údaje</Text>
                        <Text >Doba přípravy</Text>
                        <InputGroup >
                            <NumberInputForm inputValue={time} onInputValueChange={setTime} />
                            <InputRightAddon children='min' />
                        </InputGroup >
                        <Text >Počet porcí</Text>
                        <InputGroup>
                            <NumberInputForm inputValue={servingCount} onInputValueChange={setServingCount} />
                        </InputGroup>
                        <Text>Příloha</Text>
                        <Input value={sideDish} onChange={handleInputSideDishChange} />
                    </VStack>
                    <VStack alignItems='left' width={600}>
                        <Text fontSize='xl'>Ingredience</Text>
                        <Text >Zatím žádné ingredience.</Text>
                        <Text >Přidat ingredienci</Text>
                        <HStack>
                            <NumberInputForm placeholder='Množství' />
                            <Input placeholder='Jednotka' />
                        </HStack>
                        <InputGroup >
                            <Input />
                            <Button>
                                + Přidat
                            </Button>
                        </InputGroup>
                        <Text >Přidat skupinu</Text>
                        <InputGroup >
                            <Input />
                            <Button>
                                + Přidat
                            </Button>
                        </InputGroup>

                    </VStack>
                    <VStack flex='1'>
                        <Text fontSize='xl'>Postup</Text>

                        <Input />
                    </VStack>
                </HStack>
            </Grid>

        </Box >
    )

}









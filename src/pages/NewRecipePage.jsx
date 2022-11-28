import { Box, Button, HStack, Input, Spacer, Grid, Text, VStack, InputGroup, InputRightAddon, Stack, InputRightElement, Center, Heading, Select, } from "@chakra-ui/react";
import { Link, Link as ReactRouterLink } from 'react-router-dom';
import { FaSave, FaTrash } from "react-icons/fa";
import { useEffect, useState } from "react";
import { NumberInputForm } from "../components/NumberInputForm";
import { api } from "../api";
import { BasicInformation } from "../components/BasicInformation";




export function NewRecipePage() {

    const [title, setTitle] = useState('');

    const [sideDish, setSideDish] = useState('');


    const [quantity, setQuantity] = useState('');
    const [amountUnit, setAmountUnit] = useState('');
    const [newIngredience, setNewIngredience] = useState();
    const [ingredients, setIngredients] = useState([]);

    const [newGroup, setNewGroup] = useState();


    const [test, setTest] = useState();


    function handleInputTitleChange(event) {
        setTitle(event.currentTarget.value)
    }
    function handleInputSideDishChange(event) {
        setSideDish(event.currentTarget.value);
        console.log(event.currentTarget.value)
    }
    function handleInputAmountUnitChange(event) {
        setAmountUnit(event.currentTarget.value)
    }
    function handleInputAmountUnitChange(event) {
        setAmountUnit(event.currentTarget.value)
    }


    function handleInputNewIngredienceChange(event) {
        setNewIngredience(event.currentTarget.value)
    }
    function handleAddNewIngredientChange() {
        setIngredients(arr => [...arr, [quantity, amountUnit, newIngredience, false]])
        setQuantity('');
        setAmountUnit('')
        setNewIngredience('')
    }
    function handleRemoveIngredient(event) {
        let index = event.currentTarget.value;
        ingredients.splice(index, 1);
        setIngredients(arr => [...arr])
    }


    function handleInputNewGroupChange(event) {
        setNewGroup(event.currentTarget.value)
    }
    function handleAddNewGroupChange() {
        setIngredients(arr => [...arr, [newGroup, true]])
        setNewGroup('')

    }

    function AddNewRecipe() {
        console.log(title)
        console.log('sideDish')
        console.log(sideDish)
        console.log('time')
        console.log(test)
        //console.log(servingCount)
        console.log(quantity)
        console.log(amountUnit)

        console.log('Ingrediencie')
        console.log(ingredients)
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

                    <BasicInformation inputValue={sideDish} onInputValueChange={setSideDish} />
                    <VStack alignItems='left' >
                        <Text fontSize='xl'>Ingredience</Text>
                        {!!!ingredients.length &&

                            < Text >Zatím žádné ingredience.</Text>
                        }
                        {ingredients.map((ingre, index) => (
                            <>
                                {ingre[ingre.length - 1] !== true
                                    ?
                                    <HStack >
                                        <Button variant='ghost' value={[index]} onClick={handleRemoveIngredient}>
                                            <FaTrash />
                                        </Button>

                                        <HStack >
                                            <Text>{ingre[0]}</Text>
                                            <Text>{ingre[1]}</Text>
                                            <Text>{ingre[2]}</Text>
                                        </HStack>
                                    </HStack>
                                    :
                                    <HStack bg='blue.100' alignItems='center'>
                                        <Button variant='ghost' value={[index]} onClick={handleRemoveIngredient}>
                                            <FaTrash />
                                        </Button>
                                        <Box>
                                            <Heading size='md'>{ingre[0]}</Heading>
                                        </Box>
                                    </HStack>

                                }
                            </>
                        ))

                        }

                        <Text >Přidat ingredienci</Text>
                        <HStack>
                            <NumberInputForm placeholder='Množství' inputValue={quantity} onInputValueChange={setQuantity} />
                            <Input placeholder='Jednotka' value={amountUnit} onChange={handleInputAmountUnitChange} />
                        </HStack>
                        <InputGroup >
                            <Input placeholder='Název' value={newIngredience} onChange={handleInputNewIngredienceChange} />
                            <Button onClick={handleAddNewIngredientChange}>
                                + Přidat
                            </Button>
                        </InputGroup>
                        <Text >Přidat skupinu</Text>
                        <InputGroup >
                            <Input placeholder='Nová skupina' value={newGroup} onChange={handleInputNewGroupChange} />
                            <Button onClick={handleAddNewGroupChange}>
                                + Přidat
                            </Button>
                        </InputGroup>

                    </VStack>
                    <VStack flex='1'>
                        <Text fontSize='xl'>Postup</Text>

                        <Input />
                    </VStack>
                </HStack>
            </Grid >

        </Box >
    )

}









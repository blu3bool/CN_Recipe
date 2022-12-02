import { Box, Button, HStack, Input, Spacer, Grid, Text, VStack, Textarea, } from "@chakra-ui/react";
import { Link, Link as ReactRouterLink, useNavigate } from 'react-router-dom';
import { FaSave } from "react-icons/fa";
import { useState } from "react";
import { api } from "../api";
import { BasicInformation } from "../components/BasicInformation";
import { Ingredients } from "../components/Ingredients";
import { DirecionView } from "../components/DirecionView";







export function NewRecipePage() {

    const [title, setTitle] = useState('');
    const [time, setTime] = useState(0);
    const [sideDish, setSideDish] = useState('');
    const [servingCount, setServingCount] = useState(0);
    const [quantity, setQuantity] = useState('');
    const [amountUnit, setAmountUnit] = useState('');
    const [name, setName] = useState('');
    const [ingredients, setIngredients] = useState([]);
    const [group, setGroup] = useState('');
    const [directions, setDirections] = useState('');

    const navigate = useNavigate();


    function handleInputTitleChange(event) {
        setTitle(event.currentTarget.value)
    }
    function SetFullIngredient() {
        ingredients.push({ name: name, amount: quantity, amountUnit: amountUnit, isGroup: false })
        setQuantity('');
        setAmountUnit('')
        setName('')
    }
    function RemoveIngredient(event) {
        let index = event.currentTarget.value;
        ingredients.splice(index, 1);
        setIngredients(arr => [...arr])
    }
    function AddGroupToIngredient() {
        ingredients.push({ name: group, isGroup: true })
        setGroup('')
    }
    function DirectionSet(event) {
        setDirections(event.currentTarget.value)
    }
    function AddNewRecipe() {
        api
            .post(`${api.getUri()}recipes/`, {
                title: title,
                servingCount: servingCount,
                sideDish: sideDish,
                preparationTime: time,
                directions: directions,
                ingredients: ingredients
            })
            .then((response) => {
                navigate(`/recept/${response.data._id}`)
            });


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

                    <BasicInformation
                        inputValueForSideDish={sideDish} onInputValueChangeForSideDish={setSideDish}
                        inputValueForTime={time} onInputValueChangeForTime={setTime}
                        inputValueForServingCount={servingCount} onInputValueChangeForServingCount={setServingCount} />


                    <Ingredients
                        inputValueForGroup={group}
                        onInputValueChangeForGroup={setGroup}
                        addGroupToIngredient={AddGroupToIngredient}
                        removeIngredient={RemoveIngredient}
                        inputValueForIngredients={ingredients}
                        onInputValueChangeForIngredients={SetFullIngredient}
                        inputValueForName={name} onInputValueChangeForName={setName}
                        inputValueForQuantity={quantity} onInputValueChangeForQuantity={setQuantity}
                        inputValueForAmountUnit={amountUnit} onInputValueChangeForAmountUnit={setAmountUnit} />

                    <VStack flex='1'>
                        <Text fontSize='xl'>Postup</Text>
                        <Textarea h={200} value={directions} onChange={DirectionSet} />
                        <DirecionView directionsValue={directions} />
                    </VStack>
                </HStack>
            </Grid >

        </Box >
    )

}









import { Box, Button, HStack, Input, Spacer, Grid, Text, VStack, Textarea, Flex, useToast } from "@chakra-ui/react";
import { Link, Link as ReactRouterLink, useNavigate, useParams } from 'react-router-dom';
import { FaSave } from "react-icons/fa";
import { useState } from "react";
import { api } from "../api";
import { BasicInformation } from "../components/BasicInformation";
import { Ingredients } from "../components/Ingredients";
import { DirecionView } from "../components/DirecionView";
import { LoadingSpinner } from '../components/LoadingSpinner';
import { useRecipesDetail } from "../hooks/useRecipesDetail";





export function EditRecipePage() {
    const { slug } = useParams();
    const [group, setGroup] = useState('');
    const [quantity, setQuantity] = useState('');
    const [amountUnit, setAmountUnit] = useState('');
    const [name, setName] = useState('');

    const {
        detail: data,
        isLoading,
        error, title,
        setTitle,
        time,
        setTime,
        sideDish,
        setSideDish,
        servingCount,
        setServingCount,
        ingredients,
        setIngredients,
        directions,
        setDirections
    } = useRecipesDetail(slug);

    const navigate = useNavigate();
    const toast = useToast();

    if (isLoading) {
        return <LoadingSpinner />;
    }
    if (error) {
        return <Text>{error}</Text>
    }

    function SetFullIngredient() {
        ingredients.push({ name: name, amount: quantity, amountUnit: amountUnit, isGroup: false })
        setQuantity('')
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

    function EditRecipee() {
        title
            ?
            api
                .post(`${api.getUri()}recipes/${data._id}`, {
                    title: title,
                    servingCount: servingCount,
                    sideDish: sideDish,
                    preparationTime: time,
                    directions: directions,
                    ingredients: ingredients
                })
                .catch((error) => {
                    toast({
                        description: "Nastala chyba, oml??vame sa ",
                        status: 'error',
                        duration: 4000,
                        isClosable: false
                    })
                })
                .then((response) => {
                    if (response) {
                        toast({
                            description: "Recept bol uspe??ne upraven??",
                            status: 'success',
                            duration: 4000,
                            isClosable: false
                        })
                        navigate(`/recept/${data._id}`)
                    }
                })
            : toast({
                description: "Pozor, mus???? zada?? n??zov",
                status: 'error',
                duration: 4000,
                isClosable: false
            })
    }
    return (
        <Box px={5} >

            <HStack mb={5}>
                <Box fontSize='5xl' color='blue.400'>
                    {title === ''
                        ? 'Editace receptu'
                        : title
                    }
                </Box>
                <Spacer />
                <Flex gap={2}  >
                    <Button gap={1} bg='green.300' color='white' onClick={EditRecipee}><FaSave />Ulo??it</Button>
                    <Link as={ReactRouterLink} to={`/recept/${slug}`}>
                        <Button>Zru??it</Button>
                    </Link>
                </Flex>
            </HStack >


            <Box>
                <Input isInvalid errorBorderColor='crimson' placeholder='N??zev' value={title} onChange={(e) => setTitle(e.currentTarget.value)} />
            </Box>
            <Box mb={2}>
                {title === ''
                    ? <Text color='red.400'>N??zev je povinn??</Text>
                    : <></>
                }
            </Box>


            <Grid >
                <HStack gap={5} alignItems='left'>

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
                        <Textarea h={200} value={directions} onChange={(e) => setDirections(e.currentTarget.value)} />
                        <DirecionView directionsValue={directions} />
                    </VStack>
                </HStack>
            </Grid >

        </Box >
    )

}
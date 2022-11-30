import { Box, Button, HStack, Input, Spacer, Grid, Text, VStack, Textarea } from "@chakra-ui/react";
import { Link, Link as ReactRouterLink, useParams } from 'react-router-dom';
import { FaSave } from "react-icons/fa";
import { useEffect, useState } from "react";
import { api } from "../api";
import { BasicInformation } from "../components/BasicInformation";
import { Ingredients } from "../components/Ingredients";
import { DirecionView } from "../components/DirecionView";
import { LoadingSpinner } from '../components/LoadingSpinner';




export function EditRecipePage() {
    const { slug } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [data, setData] = useState([]);
    const [title, setTitle] = useState('');
    const [time, setTime] = useState(0);
    const [sideDish, setSideDish] = useState(null);
    const [servingCount, setServingCount] = useState(0);
    const [quantity, setQuantity] = useState('');
    const [amountUnit, setAmountUnit] = useState('');
    const [name, setName] = useState('');
    const [ingredients, setIngredients] = useState([]);
    const [group, setGroup] = useState('');
    const [directions, setDirections] = useState('');

    useEffect(() => {
        function getRecipesDetail() {
            setIsLoading(true);
            api
                .get(`/recipes/${slug}`)
                .then((response) => (
                    setData(response.data),
                    setTitle(response.data.title),
                    setTime(response.data.preparationTime),
                    setSideDish(response.data.sideDish),
                    setServingCount(response.data.servingCount),
                    setDirections(response.data.directions),
                    setIngredients(response.data.ingredients)
                ))
                .catch((error) => setError(error))
                .finally(() => setIsLoading(false));
        }


        getRecipesDetail();
    }, [slug]);

    if (isLoading) {
        return <LoadingSpinner />;
    }
    if (error) {
        return <Text>{error}</Text>
    }
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
    function EditRecipee() {

        const requestOptions = {
            method: 'POST', // NEBUDE TAM PUT, KEDZE TO NIEJE Axios
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: title,
                servingCount: servingCount,
                sideDish: sideDish,
                preparationTime: time,
                directions: directions,
                ingredients: ingredients,
            })
        };
        fetch(`${api.getUri()}recipes/${data._id}`, requestOptions)
            .then(response => response.json())
            .then(data => this.setState({ postId: data.id }))
            .then(window.location.href = `/recept/${data._id}`);
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
                        <Button gap={1} bg='green.300' color='white' onClick={EditRecipee}><FaSave />Uložit</Button>
                        <Link as={ReactRouterLink} to={`/recept/${slug}`}>
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
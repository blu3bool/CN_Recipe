import { Button, HStack, Input, Text, VStack, InputGroup, Heading, Box } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";
import { NumberInputForm } from "../components/NumberInputForm";

export function Ingredients({ inputValueForQuantity, onInputValueChangeForQuantity, inputValueForAmountUnit, onInputValueChangeForAmountUnit,
    inputValueForName, onInputValueChangeForName, onInputValueChangeForIngredients, inputValueForIngredients, removeIngredient, onInputValueChangeForGroup, inputValueForGroup, addGroupToIngredient }) {

    return (
        <VStack alignItems='left' >
            <Text fontSize='xl'>Ingredience</Text>
            {!!!inputValueForIngredients.length &&

                < Text bg='lightblue' border='6px solid lightblue'> Zatím žádné ingredience.</Text>
            }
            {inputValueForIngredients.map((ingre, index) => (
                <Box key={ingre._id}>
                    {ingre.isGroup !== true
                        ?
                        <HStack >

                            <Button variant='ghost' value={[index]} onClick={removeIngredient}><FaTrash /></Button>
                            <HStack >
                                <Text>{ingre.amount}</Text>
                                <Text>{ingre.amountUnit}</Text>
                                <Text>{ingre.name}</Text>
                            </HStack>
                        </HStack>
                        :
                        <HStack bg='blue.100' alignItems='center'>
                            <Button variant='ghost' value={[index]} onClick={removeIngredient}><FaTrash /></Button>
                            <Heading size='md'>{ingre.name}</Heading>
                        </HStack>

                    }
                </Box >
            ))}

            <Text >Přidat ingredienci</Text>
            <HStack>
                <NumberInputForm placeholder='Množství' inputValue={inputValueForQuantity} onInputValueChange={onInputValueChangeForQuantity} />
                <Input placeholder='Jednotka'
                    value={inputValueForAmountUnit}
                    onChange={(val) => onInputValueChangeForAmountUnit(val.target.value)}
                />
            </HStack>
            <InputGroup >
                <Input placeholder='Název'
                    value={inputValueForName}
                    onChange={(val) => onInputValueChangeForName(val.target.value)} />
                <Button onClick={onInputValueChangeForIngredients}  >
                    + Přidat
                </Button>
            </InputGroup>
            <Text >Přidat skupinu</Text>
            <InputGroup >
                <Input placeholder='Nová skupina'
                    value={inputValueForGroup}
                    onChange={(val) => onInputValueChangeForGroup(val.target.value)} />

                <Button onClick={addGroupToIngredient}>
                    + Přidat
                </Button>
            </InputGroup>
        </VStack>
    )
}

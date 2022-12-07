import React from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { MdCheckCircle } from "react-icons/md";
import { Td, Text, Tooltip } from '@chakra-ui/react';

export function IngredientsInFridge({ ingre, servingCount, calculateServingCount }) {

    const [ingredientsStorage] = useLocalStorage("fridge", []);
    let isIngredientInFridge = false;
    let isAmountEquel = Math.round((Number(ingre.amount) / servingCount * calculateServingCount) * 100) / 100

    ingredientsStorage.map((fridgeIngredient) =>
        <>
            {servingCount && calculateServingCount && ingre.amount
                ? Number(fridgeIngredient.amount) >= isAmountEquel && fridgeIngredient.name === ingre.name && fridgeIngredient.amountUnit === ingre.amountUnit &&
                <>{isIngredientInFridge = true}</>
                : Number(fridgeIngredient.amount) >= Number(ingre.amount) && fridgeIngredient.name === ingre.name && fridgeIngredient.amountUnit === ingre.amountUnit &&
                <>{isIngredientInFridge = true}</>
            }
            {!Number(ingre.amount) && fridgeIngredient.name === ingre.name &&
                <>{isIngredientInFridge = true}</>
            }
        </>
    )

    return (
        <>

            {
                isIngredientInFridge === true
                    ?
                    <Td>
                        <Tooltip label='Výborne, túto ingredienciu máš v chladničke' >
                            <Text><MdCheckCircle color='green' /></Text>
                        </Tooltip>
                        {isIngredientInFridge = false}
                    </Td>
                    :
                    <Td>
                        <Tooltip label='Škoda, budeš musieť ist do obchodu' >
                            <Text><MdCheckCircle color='grey' /></Text>
                        </Tooltip>
                    </Td>
            }
        </>
    )
}

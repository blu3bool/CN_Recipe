import React, { useEffect, useState } from 'react'
import { FaQuestionCircle } from "react-icons/fa";
import { Card, CardBody, Image, Divider, CardFooter, Text, Box, VStack, HStack, Heading, CardHeader, Stack, StackDivider } from '@chakra-ui/react'
import { RecomendedRecipe } from '../components/RecomendedRecipe'
import { api } from '../api';
import { LoadingSpinner } from './LoadingSpinner';
import { useRecipes } from '../hooks/useRecipes';
import PlaceholderImage from '../images/sideDish.png'


export function SideDishesList({ sideDish }) {
    const { recipes } = useRecipes();

    return (
        <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
            className='shadowbox'

        >
            <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '200px' }}
                src={PlaceholderImage}
                alt='SideDish'
            />
            <Stack>
                <CardBody>
                    <Heading size='md'>{sideDish}</Heading>
                </CardBody>

                <CardFooter display='block'>
                    <Heading size='sm' >Čo dobré by si si dal k prílohe?</Heading>
                    <Text>Tady máš naše odporučanie:
                        <RecomendedRecipe sideDish={sideDish} recipes={recipes} />
                    </Text>
                </CardFooter>
            </Stack>
        </Card >

    )
}

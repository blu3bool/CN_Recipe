
import { Box, Button, Divider, Heading, HStack, Input, Spacer, Stack, Text, useToast } from '@chakra-ui/react';
import { useState } from 'react';
import { SideDishList } from '../components/SideDishList';
import { FaCheck, FaTimes } from "react-icons/fa";
import { api } from '../api';
import { useNavigate } from 'react-router-dom';

export function SideDishPage() {

    return (
        <Box px={5}>
            <Heading color="dodgerblue" mb={10}>Přílohy</Heading>
            <SideDishList />
        </Box>
    )

}









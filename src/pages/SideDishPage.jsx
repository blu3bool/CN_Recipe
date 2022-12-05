
import { Box, Heading } from '@chakra-ui/react';
import { SideDishList } from '../components/SideDishList';

export function SideDishPage() {
    return (
        <Box px={5}>
            <Heading color="dodgerblue" mb={10}>Přílohy</Heading>

            <SideDishList />
        </Box>
    )

}









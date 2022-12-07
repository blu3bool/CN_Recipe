import { Box, Button, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { api } from '../api';
import { useSideDish } from '../hooks/useSideDish';
import { LoadingSpinner } from './LoadingSpinner';
import { SideDishesList } from './SideDishesList';



export function SideDishList() {

    const { sideDishes, isLoading, error } = useSideDish();

    if (isLoading) {
        return <LoadingSpinner />;
    }
    if (error) {
        return <Text>{error}</Text>
    }

    return (
        <Box display="flex" gap={10} flexWrap="wrap" justifyContent="center">
            {sideDishes.map((sideDish) =>

                <SideDishesList sideDish={sideDish} />
            )}
        </Box>


    );
}

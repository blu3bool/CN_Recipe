import { Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { api } from '../api';
import { LoadingSpinner } from './LoadingSpinner';
import { SideDishesList } from './SideDishesList';



export function SideDishList() {
    const [sideDishes, setSideDishes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');



    useEffect(() => {
        function getSideDishList() {
            setIsLoading(true);
            api
                .get('/recipes/side-dishes')
                .then((response) => setSideDishes(response.data))
                .catch((error) => setError(error))
                .finally(() => setIsLoading(false));
        }
        getSideDishList();
    }, [])

    if (isLoading) {
        return <LoadingSpinner />;
    }
    if (error) {
        return <Text>{error}</Text>
    }

    return (
        <SideDishesList sideDishes={sideDishes} />
    );
}

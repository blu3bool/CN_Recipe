import { useEffect, useState } from 'react'
import { api } from '../api';

export function useSideDish() {
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
    return { sideDishes, setSideDishes, isLoading, error }
}

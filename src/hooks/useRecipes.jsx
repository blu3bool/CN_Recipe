import { useEffect, useState } from 'react'
import { api } from '../api';

export function useRecipes() {
    const [recipes, setRecipes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        function getRecipes() {
            setIsLoading(true);
            api
                .get('/recipes')
                .then((response) => (setRecipes(response.data)))
                .catch((error) => setError(error))
                .finally(() => setIsLoading(false));
        }
        getRecipes();
        console.log('vykonavam')
    }, [])
    return { recipes, setRecipes, isLoading, error }
}

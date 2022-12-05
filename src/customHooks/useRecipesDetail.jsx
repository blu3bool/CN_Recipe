import React, { useEffect, useState } from 'react'
import { api } from '../api';

export function useRecipesDetail(slug) {
    const [detail, setDetail] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [title, setTitle] = useState('');
    const [time, setTime] = useState(0);
    const [sideDish, setSideDish] = useState(null);
    const [servingCount, setServingCount] = useState(0);
    const [calculateServingCount, setCalculateServingCount] = useState(0);
    const [ingredients, setIngredients] = useState([]);
    const [directions, setDirections] = useState('');
    console.log('vykonávam')
    useEffect(() => {
        function getRecipesDetail() {
            setIsLoading(true);
            api
                .get(`/recipes/${slug}`)
                .then((response) =>
                (
                    setDetail(response.data),
                    setTitle(response.data.title),
                    setTime(response.data.preparationTime),
                    setSideDish(response.data.sideDish),
                    setServingCount(response.data.servingCount),
                    setDirections(response.data.directions),
                    setIngredients(response.data.ingredients),
                    setCalculateServingCount(response.data.servingCount)

                ))
                .catch((error) => setError(error))
                .finally(() => setIsLoading(false));
        }


        getRecipesDetail();
    }, [slug]);

    return { detail, isLoading, error, title, time, sideDish, servingCount, calculateServingCount, ingredients, directions, setTitle, setTime, setSideDish, setServingCount, setCalculateServingCount, setIngredients, setDirections }
}

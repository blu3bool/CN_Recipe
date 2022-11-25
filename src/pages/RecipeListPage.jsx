import { useEffect, useState } from 'react';
import { Heading, Box, Text, Input } from '@chakra-ui/react';
import { RecipeCard } from '../components/RecipeCard';
import { api } from '../api';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { ArrowUpIcon } from '@chakra-ui/icons';
import { RecipeList } from '../components/RecipeList';


export function RecipeListPage() {

  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    function getRecipes() {
      setIsLoading(true);
      api
        .get('/recipes')
        .then((response) => setRecipes(response.data))
        .catch((error) => setError(error))
        .finally(() => setIsLoading(false));
    }

    getRecipes();
  }, [])

  function handleInputValueChange(event) {
    setSearchValue(event.currentTarget.value)
  }

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchValue.toLowerCase()),
  );


  return (
    <Box px={5}>
      <Heading my={4} color="dodgerblue">
        Recepty
      </Heading>
      <Input placeholder='Hladaj' value={searchValue} onChange={handleInputValueChange} />
      {isLoading && <LoadingSpinner />}
      {error && <Text>{error}</Text>}
      <RecipeList recipes={filteredRecipes} />
    </Box>

  );
}
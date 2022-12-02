import { useEffect, useState } from 'react';
import { Heading, Box, Text, Input, Button } from '@chakra-ui/react';
import { api } from '../api';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { RecipeList } from '../components/RecipeList';
import { Link as ReactRouterLink } from 'react-router-dom';


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
    recipe.title.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "").includes(searchValue.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, ""))
  );
  return (
    <Box px={5}>
      <Heading color="dodgerblue">
        Recepty
      </Heading>
      <Box textAlign='right' px={5} pb={6}>
        <Button as={ReactRouterLink} to="/novy-recept" className='ownbutton'>
          Nový recept
        </Button>
      </Box>
      <Input placeholder='Hladaj' value={searchValue} onChange={handleInputValueChange} />
      {isLoading && <LoadingSpinner />}
      {error && <Text>{error}</Text>}
      <RecipeList recipes={filteredRecipes} />
    </Box >

  );
}

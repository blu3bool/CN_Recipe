import { useState } from 'react';
import { Heading, Box, Text, Input, Button, RadioGroup, Radio, Stack } from '@chakra-ui/react';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { RecipeList } from '../components/RecipeList';
import { Link as ReactRouterLink } from 'react-router-dom';
import { useRecipes } from '../customHooks/useRecipes';


export function RecipeListPage() {

  const { recipes, isLoading, error } = useRecipes();
  const [sortedRecipes, setSortedRecipes] = useState([]);

  if (sortedRecipes.length === 0 && recipes.length !== 0) setSortedRecipes(recipes)


  const [searchValue, setSearchValue] = useState('')
  const [sortValue, setSortValue] = useState('1')


  function setSortBy(event) {
    setSortValue(event)
    if (event === "1") {
      setSortedRecipes(recipes)
    }
    if (event === "2") {
      const strAscending = [...recipes].sort((a, b) =>
        a.lastModifiedDate > b.lastModifiedDate ? -1 : 1,);
      setSortedRecipes(strAscending)
    }
    if (event === "3") {
      const strAscending = [...recipes].sort((a, b) =>
        a.lastModifiedDate > b.lastModifiedDate ? 1 : -1,);
      setSortedRecipes(strAscending)
    }
  }


  function handleInputValueChange(event) {
    setSearchValue(event.currentTarget.value)
  }
  const filteredRecipes = sortedRecipes.filter((recipe) =>
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

      <RadioGroup onChange={setSortBy} defaultValue={sortValue} pb={3}>
        <Text>Zoradiť recepty podla:</Text>
        <Stack direction='row'>
          <Radio value='1'>Základu</Radio>
          <Radio value='2'>Najnovšieho</Radio>
          <Radio value='3'>Najstaršího</Radio>
        </Stack>
      </RadioGroup>
      <RecipeList recipes={filteredRecipes} />
    </Box >

  );
}

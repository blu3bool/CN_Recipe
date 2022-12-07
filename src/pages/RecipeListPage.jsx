import { useState } from 'react';
import { Heading, Box, Text, Input, Button, RadioGroup, Radio, Stack, HStack, Spacer } from '@chakra-ui/react';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { RecipeList } from '../components/RecipeList';
import { Link as ReactRouterLink } from 'react-router-dom';
import { useRecipes } from '../hooks/useRecipes';


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
      const sortedByNewest = [...recipes].sort((a, b) =>
        a.lastModifiedDate > b.lastModifiedDate ? -1 : 1,);
      setSortedRecipes(sortedByNewest)
    }
    if (event === "3") {
      const sortedByOldest = [...recipes].sort((a, b) =>
        a.lastModifiedDate > b.lastModifiedDate ? 1 : -1,);
      setSortedRecipes(sortedByOldest)
    }
  }

  const filteredRecipes = sortedRecipes.filter((recipe) =>
    recipe.title.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "").includes(searchValue.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, ""))
  );

  return (
    <Box px={5}>
      <HStack pb={6}>
        <Heading color="dodgerblue">
          Recepty
        </Heading>
        <Spacer />
        <Button as={ReactRouterLink} to="/novy-recept" className='ownbutton'>
          Nový recept
        </Button>
      </HStack>
      <Input placeholder='Hladaj' value={searchValue} onChange={(e) => setSearchValue(e.currentTarget.value)} />
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

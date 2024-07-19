import React from 'react';
import { Box, Input, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import Header from '../components/Header';
import RecipeCard from '../components/RecipeCard';
import useRecipes from '../hooks/useRecipes';

const HomePage = () => {
  const { recipes, loading, error, setQuery } = useRecipes();

  const handleSearch = (event) => {
    setQuery(event.target.value);
  };

  return (
    <Box>
      <Header />
      <Box maxW="container.xl" mx="auto" mt={8}>
        <VStack spacing={8}>
          <Input
            placeholder="Search for recipes..."
            size="lg"
            onChange={handleSearch}
          />
          {loading && <Text>Loading...</Text>}
          {error && <Text color="red.500">{error}</Text>}
          <SimpleGrid columns={[1, 2, 3]} spacing={10}>
            {recipes.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                title={recipe.title}
                image={recipe.image}
                diets={recipe.diets}
              />
            ))}
          </SimpleGrid>
        </VStack>
      </Box>
    </Box>
  );
};

export default HomePage;
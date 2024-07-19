import React, { useState, useEffect } from 'react';
import { Box, Button, Input, SimpleGrid, Text, VStack, HStack, Select, Heading } from '@chakra-ui/react';
import RecipeCard from '../components/RecipeCard';
import useRecipes from '../hooks/useRecipes';

const HomePage = () => {
  const { recipes, loading, error, fetchRecipes, fetchRandomRecipes } = useRecipes();
  const [searchQuery, setSearchQuery] = useState('');
  const [dietFilter, setDietFilter] = useState('');
  const [cuisineFilter, setCuisineFilter] = useState('');

  useEffect(() => {
    fetchRandomRecipes(6); // Load some random recipes on initial load
  }, [fetchRandomRecipes]);

  const handleSearch = () => {
    fetchRecipes(searchQuery, dietFilter, cuisineFilter);
  };

  return (
    <Box>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl">Healthy Recipes</Heading>
        <Box width="100%">
          <HStack>
            <Input
              placeholder="Search for recipes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              size="lg"
            />
            <Select placeholder="Diet" onChange={(e) => setDietFilter(e.target.value)}>
              <option value="vegetarian">Vegetarian</option>
              <option value="vegan">Vegan</option>
              <option value="gluten-free">Gluten Free</option>
              <option value="ketogenic">Keto</option>
            </Select>
            <Select placeholder="Cuisine" onChange={(e) => setCuisineFilter(e.target.value)}>
              <option value="italian">Italian</option>
              <option value="mexican">Mexican</option>
              <option value="indian">Indian</option>
              <option value="chinese">Chinese</option>
            </Select>
            <Button onClick={handleSearch} colorScheme="green">Search</Button>
          </HStack>
        </Box>

        {loading && <Text>Loading...</Text>}
        {error && <Text color="red.500">{error}</Text>}
        
        <Heading as="h2" size="xl">Featured Recipes</Heading>
        <SimpleGrid columns={[1, 2, 3]} spacing={10}>
          {recipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              id={recipe.id}
              title={recipe.title}
              image={recipe.image}
              diets={recipe.diets || []}
            />
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  );
};

export default HomePage;
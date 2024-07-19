import React from 'react';
import { Box, Image, Text, Badge, Stack } from '@chakra-ui/react';

const RecipeCard = ({ title, image, diets }) => {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={image} alt={title} />
      <Box p="6">
        <Stack mt="1" spacing="3">
          <Text fontWeight="semibold" fontSize="xl" lineHeight="short">
            {title}
          </Text>
          <Stack direction="row">
            {diets.map((diet) => (
              <Badge key={diet} colorScheme="green">
                {diet}
              </Badge>
            ))}
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default RecipeCard;
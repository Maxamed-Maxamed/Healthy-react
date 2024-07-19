import React from 'react';
import { Box, Heading, Flex } from '@chakra-ui/react';

const Header = () => {
  return (
    <Box bg="green.500" py={4}>
      <Flex maxW="container.xl" mx="auto" alignItems="center" justifyContent="space-between">
        <Heading as="h1" size="lg" color="white">
          Healthy Recipes
        </Heading>
      </Flex>
    </Box>
  );
};

export default Header;
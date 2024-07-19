import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import HomePage from './pages/HomePage';
import '@fontsource/roboto';
import './App.css'; 

function App() {
  return (
    <ChakraProvider>
      <HomePage />
    </ChakraProvider>
  );
}

export default App;
import { useState, useEffect } from 'react';
import { searchRecipes } from '../api/spoonacularApi';

const useRecipes = (initialQuery = '') => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState(initialQuery);

  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true);
      try {
        const data = await searchRecipes(query);
        console.log('API Response:', data); // Add this line to log the API response
        setRecipes(data.results);
        setError(null);
      } catch (err) {
        setError(err.message);
        setRecipes([]);
      } finally {
        setLoading(false);
      }
    };

    if (query) {
      fetchRecipes();
    }
  }, [query]);

  return { recipes, loading, error, setQuery };
};

export default useRecipes;
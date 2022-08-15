import { useState, useCallback } from 'react';
import axios from 'axios';

function useFetchQuery(query) {
  const [Loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const [products, setProducts] = useState([]);

  const dataEmpty = !products || products.length === 0;

  const getQuery = useCallback((query) => {
    const url = `http://api.tvmaze.com/search/shows?q=${query}`;
    return encodeURI(url);
  }, []);

  const findItem = useCallback(async () => {
    if (!query || query.trim() === '') return;

    setLoading(true);
    setSearched(false);

    const URL = getQuery(query);

    const response = await axios.get(URL).catch((err) => {
      console.log('Error: ', err);
    });

    if (response) {
      if (response.data && response.data.length === 0) setSearched(true);
      setProducts(response.data);
    }
    setLoading(false);
  }, [getQuery, query]);

  return [
    Loading,
    searched,
    setLoading,
    setSearched,
    products,
    setProducts,
    dataEmpty,
    findItem,
  ];
}

export default useFetchQuery;

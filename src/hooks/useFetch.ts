import { useCallback } from 'react';
import useSWR from 'swr';

const useFetch = (key, swrOptions = {}) => {
  const fetcher = useCallback(() => fetch(key, {}), [key]);

  const { data, error, ...rest } = useSWR(key, fetcher, swrOptions);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
    ...rest // rest -> mutate, isValidating
  };
};

export default useFetch;

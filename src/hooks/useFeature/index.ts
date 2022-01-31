/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useMemo, useState } from 'react';
import { useAtom } from 'jotai';
// Entities
import Plan from '../../entities/Plan';
// Atoms
import { queryAtom, featuresAtom, startPageAtom } from '../../atoms/feature';
// Services
import { getFeatures } from '../../services/feature';

const useFeature = () => {
  const [ isLoading, setIsLoading ] = useState<boolean>(false);
  const [ query, setQuery ] = useAtom(queryAtom);
  const [ features, setfeatures ] = useAtom(featuresAtom);
  const [ startPage, setStartPage ] = useAtom(startPageAtom);
  const [ , setDidMount] = useState<boolean>(false);

  const onChangeQuery = (value: string): void => {
    setQuery(value);
  };

  const filtered = useMemo(() => features.filter(({ description }) =>
    query !== "" ? description.includes(query) : true
  ), [features, query]);

  const fetchFeatures = async (page = 1, limit = 20, activeLoadMore = false) => {
    try {
      setIsLoading(true);
      const newPage = (!activeLoadMore && page >= 1) ? 1 : page;
      const response: Plan[] | unknown = await getFeatures(query, newPage, limit);
      if (response instanceof Array) {
        setfeatures(response);
        if (activeLoadMore) {
          setStartPage(page);
        } else if(!activeLoadMore && page >= 1) {
          setStartPage(1);
        }
      } else {
        console.log('response', response);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setDidMount(true);
    fetchFeatures();
    return () => {
      setDidMount(false);
    }
  }, []);

  return [
    query,
    startPage,
    isLoading,
    features,
    filtered,
    onChangeQuery,
    fetchFeatures,
  ];
};

export default useFeature;
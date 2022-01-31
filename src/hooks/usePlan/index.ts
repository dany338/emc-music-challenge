/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAtom } from 'jotai';
import { queryAtom, plansAtom, startPageAtom, planSelectedAtom } from '../../atoms/plan';
import { getPlans } from '../../services/plan';
import Plan from '../../entities/Plan';
import { waitFor } from '../../utils/wait';

const usePlan = () => {
  const navigate = useNavigate();
  const [ isLoading, setIsLoading ] = useState(false);
  const [ query, setQuery ] = useAtom(queryAtom);
  const [ plans, setPlans ] = useAtom(plansAtom);
  const [ planSelected, setPlanSelected ] = useAtom(planSelectedAtom);
  const [ startPage, setStartPage ] = useAtom(startPageAtom);
  const [ , setDidMount] = useState<boolean>(false);

  const onChangeQuery = (value: string) => {
    setQuery(value);
  };

  const filtered = useMemo(() => plans.filter((plan: Plan) =>
    query !== "" ? plan.name.includes(query) : true
  ), [plans, query]);

  const onSelectPlan = async (plan: Plan) => {
    setPlanSelected(plan);
    await waitFor(100);
    navigate('/complete-order');
  };

  const fetchPlans = async (page = 1, limit = 9, activeLoadMore = false) => {
    try {
      setIsLoading(true);
      const newPage = (!activeLoadMore && page >= 1) ? 1 : page;
      const response: Plan[] | unknown = await getPlans(query, newPage, limit);
      if (response instanceof Array) {
        setPlans(response);
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
    fetchPlans();
    return () => {
      setDidMount(false);
    }
  }, []);

  return [
    query,
    startPage,
    isLoading,
    plans,
    filtered,
    planSelected,
    onChangeQuery,
    onSelectPlan,
    fetchPlans,
  ];
};

export default usePlan;
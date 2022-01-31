import usePlan from '../../hooks/usePlan';
import Plans from '../../components/Plans';
import { Container } from './styled';

const PlansView = () => {
  const [
    query,
    startPage,
    isLoading,
    plans,
    filtered,
    planSelected,
    onChangeQuery,
    onSelectPlan,
    fetchPlans,
  ] = usePlan();

  return (
    <Container>
      <Plans
        query={query}
        startPage={startPage}
        loading={isLoading}
        data={filtered}
        onChangeQuery={onChangeQuery}
        fetchData={fetchPlans}
      />
    </Container>
  );
};

export default PlansView;

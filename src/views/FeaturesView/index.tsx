import useFeature from '../../hooks/useFeature';
import Features from '../../components/Features';
import { Container } from './styled';
import useAuth from '../../hooks/useAuth';

const FeaturesView = () => {
  const [
    query,
    startPage,
    isLoading,
    features,
    filtered,
    onChangeQuery,
    fetchFeatures,
  ] = useFeature();
  const [ , isLoggedIn ] = useAuth();

  return (
    <Container>
      <Features
        query={query}
        startPage={startPage}
        loading={isLoading}
        data={filtered}
        onChangeQuery={onChangeQuery}
        fetchData={fetchFeatures}
        isLoggedIn={isLoggedIn}
      />
    </Container>
  );
};

export default FeaturesView;

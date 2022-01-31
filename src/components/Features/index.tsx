import React, { lazy } from 'react';
import SearchBar from '../../components/SearchBar';
import LoadMore from '../../components/LoadMore';
import {
  Container,
  Wrapper,
  ContainerCards
} from './styled';
import Feature from '../../entities/Feature';

const CardFeature = lazy(() => import('../../components/CardFeature'));
const NotFound = lazy(() => import('../../components/NotFound'));
const ButtonsPlan = lazy(() => import('../../components/ButtonsPlan'));

export interface IFeaturesProps {
  query: string | any;
  startPage: number | any;
  loading: boolean | any;
  data: Feature[] | any;
  onChangeQuery: ((value: string) => void) | any;
  fetchData: ((page: number, limit: number, activeLoadMore?: boolean) => void) | any;
  isLoggedIn: boolean | any;
}

const Features: React.FC<IFeaturesProps> = ({ query, startPage, loading, data, onChangeQuery, fetchData, isLoggedIn }) => (
  <Container>
    <Wrapper>
      <SearchBar fetchSearchByQuery={fetchData} placeholder="Search" value={query} onChangeValue={onChangeQuery} count={data.length} />
      {loading && <div>Loading...</div>}
      {data.length > 0 ? (
        <>
          <ContainerCards>
            {data.map((feature: Feature) => (
              <CardFeature key={feature.id} {...feature} />
            ))}
          </ContainerCards>
          {isLoggedIn && (
            <ButtonsPlan />
          )}
        </>
      ) : (
        <NotFound onChangeQuery={onChangeQuery} />
      )}
    </Wrapper>
  </Container>
)

export default Features;

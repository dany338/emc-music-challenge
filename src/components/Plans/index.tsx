import React, { lazy } from 'react';
import SearchBar from '../SearchBar';
import LoadMore from '../LoadMore';
import {
  Container,
  Wrapper,
  ContainerBlog
} from './styled';
import Plan from '../../entities/Plan';

const CardPlan = lazy(() => import('../../components/CardPlan'));
const NotFound = lazy(() => import('../NotFound'));

export interface IPlanProps {
  query: string | any;
  startPage: number | any;
  loading: boolean | any;
  data: Plan[] | any;
  onChangeQuery: ((value: string) => void) | any;
  fetchData: ((page: number, limit: number, activeLoadMore?: boolean) => void) | any;
}

const Plans: React.FC<IPlanProps> = ({ query, startPage, loading, data, onChangeQuery, fetchData }) => (
  <Container>
    <Wrapper>
      <SearchBar fetchSearchByQuery={fetchData} placeholder="Search" value={query} onChangeValue={onChangeQuery} count={data.length} />
      {loading && <div>Loading...</div>}
      {data.length > 0 ? (
        <>
          <ContainerBlog>
            {data.map((plan: Plan) => (
              <CardPlan key={plan.id} {...plan} />
            ))}
          </ContainerBlog>
          <LoadMore onClick={fetchData} startPage={startPage} />
        </>
      ) : (
        <NotFound onChangeQuery={onChangeQuery} />
      )}
    </Wrapper>
  </Container>
)

export default Plans;
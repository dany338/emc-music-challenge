import React, { lazy } from 'react';
import SearchBar from '../SearchBar';
import LoadMore from '../LoadMore';
import {
  Container,
  Wrapper,
  ContainerBlog
} from './styled';
import Payment from '../../entities/Payment';

const CardPayment = lazy(() => import('../../components/CardPayment'));
const NotFound = lazy(() => import('../NotFound'));

export interface IPaymentProps {
  query: string | any;
  startPage: number | any;
  loading: boolean | any;
  data: Payment[] | any;
  onChangeQuery: ((value: string) => void) | any;
  fetchData: ((page: number, limit: number, activeLoadMore?: boolean) => void) | any;
}

const Payments: React.FC<IPaymentProps> = ({ query, startPage, loading, data, onChangeQuery, fetchData }) => (
  <Container>
    <Wrapper>
      <SearchBar fetchSearchByQuery={fetchData} placeholder="Search" value={query} onChangeValue={onChangeQuery} count={data.length} />
      {loading && <div>Loading...</div>}
      {data.length > 0 ? (
        <>
          <ContainerBlog>
            {data.map((payment: Payment) => (
              <CardPayment key={payment.id} {...payment} />
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

export default Payments;

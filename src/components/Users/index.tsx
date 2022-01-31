import React, { lazy } from 'react';
import SearchBar from '../SearchBar';
import LoadMore from '../LoadMore';
import {
  Container,
  Wrapper,
  ContainerBlog
} from './styled';
import User from '../../entities/User';

const CardUser = lazy(() => import('../../components/CardUser'));
const NotFound = lazy(() => import('../NotFound'));

export interface IUserProps {
  query: string | any;
  startPage: number | any;
  loading: boolean | any;
  data: User[] | any;
  onChangeQuery: ((value: string) => void) | any;
  fetchData: ((page: number, limit: number, activeLoadMore?: boolean) => void) | any;
}

const Users: React.FC<IUserProps> = ({ query, startPage, loading, data, onChangeQuery, fetchData }) => (
  <Container>
    <Wrapper>
      <SearchBar fetchSearchByQuery={fetchData} placeholder="Search" value={query} onChangeValue={onChangeQuery} count={data.length} />
      {loading && <div>Loading...</div>}
      {data.length > 0 ? (
        <>
          <ContainerBlog>
            {data.map((user: User) => (
              <CardUser key={user.id} {...user} />
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

export default Users;
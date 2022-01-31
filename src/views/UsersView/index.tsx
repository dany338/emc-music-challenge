import useUser from '../../hooks/useUser';
import Users from '../../components/Users';
import { Container } from './styled';

const UsersView = () => {
  const [
    query,
    startPage,
    isLoading,
    users,
    filtered,
    onChangeQuery,
    fetchUsers,
  ] = useUser();

  return (
    <Container>
      <Users
        query={query}
        startPage={startPage}
        loading={isLoading}
        data={filtered}
        onChangeQuery={onChangeQuery}
        fetchData={fetchUsers}
      />
    </Container>
  );
};

export default UsersView;

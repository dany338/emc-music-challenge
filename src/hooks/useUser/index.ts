/* eslint-disable react-hooks/exhaustive-deps */
import { useAtom } from 'jotai';
import { useEffect, useMemo, useState } from 'react';
import { queryUsers, usersAtom, startPageAtom } from '../../atoms/user';
import { getUsers } from '../../services/user';
import User from '../../entities/User';

const useUser = () => {
  const [ isLoading, setIsLoading ] = useState(false);
  const [ query, setQuery ] = useAtom(queryUsers);
  const [ users, setUsers ] = useAtom(usersAtom);
  const [ startPage, setStartPage ] = useAtom(startPageAtom);
  const [ , setDidMount] = useState<boolean>(false);

  const onChangeQuery = (value: string) => {
    setQuery(value);
  };

  const filtered = useMemo(() => users.filter(({ name }) =>
    query !== "" ? name.includes(query) : true
  ), [users, query]);

  const fetchUsers = async (page = 1, limit = 9, activeLoadMore = false) => {
    try {
    setIsLoading(true);
    const newPage = (!activeLoadMore && page >= 1) ? 1 : page;
    const response: User[] | unknown = await getUsers(query, newPage, limit);
    if (response instanceof Array) {
      setUsers(response);
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
    fetchUsers();
    return () => {
      setDidMount(false);
    }
  }, []);

  return [
    query,
    startPage,
    isLoading,
    users,
    filtered,
    onChangeQuery,
    fetchUsers,
  ];
};

export default useUser;
import { useAtom } from 'jotai';
import { userAtom, isLoggedInAtom } from '../../atoms/user';
import { asyncLocalStorage } from '../../utils/localStorage';

const useAuth = () => {
  const [ user, setUser ] = useAtom(userAtom);
  const [ isLoggedIn, setIsLoggedIn ] = useAtom(isLoggedInAtom);

  const onLogout: any = () => {
    setUser(null);
    setIsLoggedIn(false);
    asyncLocalStorage.removeItem('user');
    asyncLocalStorage.removeItem('isLoggedIn');
  }

  return [
    user,
    isLoggedIn,
    onLogout
  ];
}

export default useAuth;
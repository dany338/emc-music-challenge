import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useAtom } from 'jotai';
import { getUserByCredentials , createAccount } from '../../services/user';
import { getPlans } from '../../services/plan';
import { userAtom, isLoggedInAtom } from '../../atoms/user';
import { plansAtom } from '../../atoms/plan';
import { waitFor } from '../../utils/wait';

const useFormSign = (values: any) => {
  const navigate = useNavigate();
  const [ , setUser ] = useAtom(userAtom);
  const [ , setIsLoggedIn ] = useAtom(isLoggedInAtom);
  const [ , setPlans ] = useAtom(plansAtom);
  const [ isLoading, setIsLoading ] = useState(false);

  const createUser: any = async () => {
    try {
      setIsLoading(true);
      const response: any = await createAccount(values);
      if (typeof response === 'object') {
        setUser(response);
        setIsLoggedIn(true);
        const responsePlans = await getPlans('', 1, 10);
        if (responsePlans instanceof Array) {
          setPlans(responsePlans);
        }
        await waitFor(100);
        navigate(-1);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const loginUser: any = async () => {
    try {
      setIsLoading(true);
      const response = await getUserByCredentials(values);
      if (Array.isArray(response) && response.length > 0) {
        setUser(response[0]);
        setIsLoggedIn(true);
        const responsePlans = await getPlans('', 1, 10);
        if (responsePlans instanceof Array) {
          setPlans(responsePlans);
        }
        await waitFor(100);
        navigate(-1);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return [
    createUser,
    loginUser,
    isLoading,
  ];
}

export default useFormSign;

import React, { useState, lazy } from 'react';
import useValidation from '../../hooks/useValidation';
import useFormSign from '../../hooks/useFormSign';
import { validateSignIn, validateSignUp } from '../../utils/validations';
import { Container } from './styled';
import ImageSign from '../../assets/images/image-sign.png';

const TextField = lazy(() => import('../TextField'));
const TextButton = lazy(() => import('../TextButton'));

type FormEventHandler = React.FormEvent<HTMLFormElement | HTMLInputElement | HTMLSpanElement | HTMLDivElement>;

const initialState = {
  role: '',
  alias: '',
  avatarUrl: '',
  notifications: 0,
  name: '',
  email: '',
  password: '',
};

const loginState = {
  email: '',
  password: '',
};

const FormSign = () => {
  const [changeFormSignUp, setChangeFormSignUp] = useState(false);

  const [
    errors,
    values,
    handleChange,
    handleSubmit
  ] = useValidation(changeFormSignUp ? initialState : loginState, changeFormSignUp ? validateSignUp : validateSignIn, () => changeFormSignUp ? createUser(): loginUser());

  const [
    createUser,
    loginUser,
    isLoading,
  ] = useFormSign(values);

  const handleChangeSignForm = (e: FormEventHandler) => {
    e.preventDefault();
    setChangeFormSignUp(!changeFormSignUp);
  };

  return (
    <Container image={ImageSign}>
      <div className="image" />
      <div className="form">
        <span className="title">{changeFormSignUp ? 'Sign Up' : 'Sign In'}</span>
        <span className="description">Simplify your reading in minutes.</span>
        <form onSubmit={handleSubmit} noValidate={true}>
          <TextField type="email" typeInput={'text'} name="email" placeholder="Your email" value={values.email} onChange={handleChange} errors={(errors.email && errors.email !== '') && (errors.email)} />
          {changeFormSignUp && (
            <>
              <TextField type="text" typeInput={'text'} name="role" placeholder="Role" value={values?.role ?? ''} onChange={handleChange} errors={(errors.role && errors.role !== '') && (errors.role)} />
              <TextField type="text" typeInput={'text'} name="name" placeholder="Name" value={values?.name ?? ''} onChange={handleChange} errors={(errors.name && errors.name !== '') && (errors.name)} />
              <TextField type="text" typeInput={'text'} name="alias" placeholder="Alias" value={values?.alias ?? ''} onChange={handleChange} errors={(errors.alias && errors.alias !== '') && (errors.alias)} />
              <TextField type="text" typeInput={'text'} name="avatarUrl" placeholder="Avatar url" value={values?.avatarUrl ?? ''} onChange={handleChange} errors={(errors.avatarUrl && errors.avatarUrl !== '') && (errors.avatarUrl)} />
            </>
          )}
          <TextField type="password" typeInput={'text'} name="password" placeholder="Password" value={values.password} onChange={handleChange} errors={(errors.password && errors.password !== '') && (errors.password)} />
          <div className="link">
            <span onClick={(e: FormEventHandler) => handleChangeSignForm(e)}>{changeFormSignUp ? 'Sign In' : 'Sign Up'}</span>
          </div>
          {isLoading ? <div><span>Loading...</span></div> : <TextButton width="18.438" text={changeFormSignUp ? 'Sign Up' : 'Sign In'} type={'submit'} />}
        </form>
      </div>
    </Container>
  );
};

export default FormSign;

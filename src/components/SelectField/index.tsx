import React from 'react';
import {
  Container,
  Wrapper,
  SearchBox,
} from './styled';

export interface IOptionsProps {
  id: number;
  name: string;
}

export interface ISelectFieldProps {
  value: string | number;
  name: string;
  options: IOptionsProps[];
  errors?: string | null;
  onChange: (e: React.FormEvent<HTMLSelectElement>) => void;
}

const SelectField: React.FC<ISelectFieldProps> = ({ name, value, options, errors = null, onChange }) => (
  <Container>
    <Wrapper>
      <SearchBox>
        <select title={name} name={name} onChange={onChange}>
          <option value="">Select {name}</option>
          {(options.length > 0) && (
            options.map(({ id, name }) => value === id ? <option key={`option-${id}`} value={id} selected>{name}</option> : <option key={`option-${id}`} value={id}>{name}</option>)
          )}
        </select>
        {errors && (
          <span className="errors">{errors}</span>
        )}
      </SearchBox>
    </Wrapper>
  </Container>
);

export default SelectField;

import React from 'react';
import {
  Container,
  Wrapper,
  SearchBox,
} from './styled';
import SearchIcon from '../../assets/icons/search.svg';

export interface ISearchBarProps {
  fetchSearchByQuery: (page: number, limit: number) => void;
  placeholder: string;
  value?: string;
  onChangeValue: (value: any) => void;
  count: number;
};

const SearchBar: React.FC<ISearchBarProps> = ({ fetchSearchByQuery, placeholder, value = '', onChangeValue, count }) => (
  <Container>
    <Wrapper>
      <SearchBox>
        <img
          src={SearchIcon}
          alt='Search...'
        />
        <input type="text" placeholder={ placeholder } value={value} onChange={e => onChangeValue(e.target.value)} />
        <div>
          <span>{count} results</span>
        </div>
        <button onClick={() => fetchSearchByQuery(1, 20)}>
          <span>Search</span>
        </button>
      </SearchBox>
    </Wrapper>
  </Container>
);

export default SearchBar;

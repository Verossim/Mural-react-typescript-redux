import React, { useState } from 'react';

import { Input, Button, Form } from './styles';

// Create interface for Props
interface Props {
  searchPosts: Function,
}

const PostSearch: React.FC<Props> = ({ searchPosts }: Props) => {
  const [ searchTerm, setSearchTerm ] = useState('');

  const onChangeHandler = (event: React.ChangeEvent) => {
    const input = (event.target as HTMLInputElement).value;
    setSearchTerm(input);
  }

  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    searchPosts(searchTerm);
  }

  return (
    <Form onSubmit={onSubmitHandler}>
      <Input
        type="search"
        placeholder="Busque aqui"
        aria-label="Search"
        value={searchTerm}
        onChange={onChangeHandler} />
      <Button type="submit">Pesquisar</Button>
    </Form>
  );
};

export default PostSearch;

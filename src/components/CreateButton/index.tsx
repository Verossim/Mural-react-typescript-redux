import * as React from 'react';

import { CreateButton } from './styles';

const Create: React.SFC<{}> = () => {
  return (
    <CreateButton href="/register">Faça a sua postagem!</CreateButton>
  );
}

export default Create;
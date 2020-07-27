import * as React from 'react';

import { FiBell } from 'react-icons/fi';
import { Head, Search, Form, Profile } from './styles';

const Header: React.SFC<{}> = () => {
  return (
    <Head>
        <a href="/">Curseduca</a>
        <Search>
          <input placeholder="Busque aqui" />
          <Form>
            <input type="checkbox" name="Autor" checked />
            <p>Autor</p>
            <input type="checkbox" name="Categoria" />
            <p>Categoria</p>
          </Form>
          <button type="submit">Pesquisar</button>
        </Search>
        <Profile>
          <FiBell size={20} />
          <img
            src="https://www.alliancerehabmed.com/wp-content/uploads/icon-avatar-default.png"
            alt="Avatar"
          />
        </Profile>
      </Head>
  );
};

export default Header;
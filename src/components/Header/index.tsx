import * as React from 'react';

import PostSearch from '../../containers/SearchPost';

import { FiBell } from 'react-icons/fi';
import { Head, Search, Profile } from './styles';

const Header: React.SFC<{}> = () => {
  return (
    <Head>
        <a href="/">Curseduca</a>
        <Search>
          <PostSearch searchPosts={PostSearch} />
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
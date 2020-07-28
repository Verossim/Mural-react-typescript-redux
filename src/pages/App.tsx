import React, { useContext } from 'react';

import Header from '../components/Header';
import CreateButton from '../components/CreateButton';

import PostList from '../containers/PostList';

import { AuthContext } from '../context/AuthContext';


const App: React.SFC<{}> = () => {
  const { signIn } = useContext(AuthContext);

  signIn({ email: 'dev1@curseduca.com', password: 'dev1' });

  return (
    <>
      <Header />
      <CreateButton />
      <PostList />
    </>
  );
};

export default App;

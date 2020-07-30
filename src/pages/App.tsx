import React from 'react';

import Header from '../components/Header';
import CreateButton from '../components/CreateButton';

import PostList from '../containers/PostList';

import { useAuth } from '../hooks/AuthContext';


const App: React.SFC<{}> = () => {

  const { signIn } = useAuth();
  signIn({email: 'dev1@curseduca.com', password: 'dev1'});

  return (
    <>
      <Header />
      <CreateButton />
      <PostList />
    </>
  );
};

export default App;

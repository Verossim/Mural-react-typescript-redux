import * as React from 'react';

import Header from '../components/Header';
import CreateButton from '../components/CreateButton';

import PostList from '../containers/PostList';


const App: React.SFC<{}> = () => {
  return (
    <>
      <Header />
      <CreateButton />
      <PostList />
    </>
  );
};

export default App;

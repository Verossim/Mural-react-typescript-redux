import * as React from 'react';

import Header from '../components/Header';

import CreatePost from '../containers/CreatePost';

const App: React.SFC<{}> = () => {
  return (
    <>
      <Header />
      <CreatePost />
    </>
  );
};

export default App;

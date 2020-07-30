import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { Store } from 'redux';

import configureStore, { AppState } from './store/Store';
import { getAllPosts } from './actions/FeedActions';

import Routes from './routes';
import { AuthProvider } from './hooks/AuthContext';

import GlobalStyles from './styles/global';

interface Props {
  store: Store<AppState>;
}

/* 
Create a root component that receives the store via props
and wraps the App component with Provider, giving props to containers
*/
const Root: React.SFC<Props> = props => {

  return (
    <AuthProvider>
      <Provider store={props.store}>
      <BrowserRouter>
        <Routes />
        <GlobalStyles />
      </BrowserRouter>
      </Provider>
    </AuthProvider>
  );
};

// Generate the Store
const store = configureStore();
store.dispatch(getAllPosts());

ReactDOM.render(<Root store={store} />, document.getElementById(
  'root'
  ) as HTMLElement);

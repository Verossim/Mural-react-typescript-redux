import { applyMiddleware, combineReducers, createStore, Store } from 'redux';

import thunk from 'redux-thunk';

import { postReducer, PostState } from '../reducers/FeedReducer';

// Create a interface for the application state
export interface AppState {
  postState: PostState;
}

// Create the root reducer
const rootReducer = combineReducers<AppState>({
  postState: postReducer,
});

// Create a configure store function of type AppState
export default function configureStore(): Store<AppState, any> {
  const store = createStore(rootReducer, undefined, applyMiddleware(thunk));
  return store;
}
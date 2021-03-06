import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

import api from '../services/api';

import { Post, PostState } from '../reducers/FeedReducer';

// Action Constants
export enum PostActionTypes {
  GET_ALL = 'GET_ALL',
}

// Interface to get all action type
export interface PostGetAllAction {
  type: PostActionTypes.GET_ALL;
  posts: Post[];
}

/* 
Combine the action types with a union (we assume there are more)
example: export type PostsActions = IGetAllAction | IGetOneAction ... 
*/
export type PostAction = PostGetAllAction;

/* Get All Action
<Promise<Return Type>, State Interface, Type of Param, Type of Action> */
export const getAllPosts: ActionCreator<
  ThunkAction<Promise<any>, PostState, null, PostGetAllAction>
> = () => {
  const TOKEN = localStorage.getItem('@curseduca:token');
  const AuthStr = 'Bearer '.concat(TOKEN || '{}')
  return async (dipatch: Dispatch) => {
    try {
      const response = await api.get('/posts', {
        headers: { Authorization: AuthStr }
      });
      dipatch({
        posts: response.data,
        type: PostActionTypes.GET_ALL,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

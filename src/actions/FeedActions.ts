import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios from 'axios';

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
  return async (dipatch: Dispatch) => {
    try {
      const response = await axios.get('http://localhost:3333');
      dipatch({
        posts: response.data.results,
        type: PostActionTypes.GET_ALL,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

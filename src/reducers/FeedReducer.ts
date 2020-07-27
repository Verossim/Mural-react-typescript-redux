import { Reducer } from 'redux';

import { PostAction, PostActionTypes } from '../actions/FeedActions';


// Define the Post type
export interface Post {
  titulo: string;
  categoria: number;
  conteudo: string;
}

// Define the Post state
export interface PostState {
  readonly posts: Post[]
}

// Define the initial state
const initalPostState: PostState = {
  posts: [{ titulo: 'TESTE', categoria: 1, conteudo: 'blablabla' }],
}

export const postReducer: Reducer<PostState, PostAction> = (
  state = initalPostState,
  action
) => {
  switch (action.type) {
    case PostActionTypes.GET_ALL: {
      return {
        ...state,
        posts: action.posts,
      };
    }
    default:
      return state;
  }
};

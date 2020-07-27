import * as React from 'react';
import { connect } from 'react-redux';

import { AppState } from '../../store/Store';

import { Post } from '../../reducers/FeedReducer';

import { FiChevronRight } from 'react-icons/fi';
import { Posts } from './styles';

// Create the containers interface
interface Props {
  posts: Post[];
}

class PostList extends React.Component<Props> {
  public render() {
    const { posts } = this.props;
    return (
      <Posts>
        <a href='/'>
          <img src='https://www.alliancerehabmed.com/wp-content/uploads/icon-avatar-default.png'
           alt='Usuario' />
          <div>
            {posts &&
            posts.map(post => {
              return (
              <strong key={post.titulo} >{post.titulo}</strong>
              );
            })
            }
            {posts &&
            posts.map(post => {
              return (
              <p key={post.categoria} >Categoria: {post.categoria}</p>
              );
            })
            }
            {posts &&
            posts.map(post => {
              return (
              <p key={post.conteudo} >{post.conteudo}</p>
              );
            })
            }
          </div>

          <FiChevronRight size={20} />
        </a>
      </Posts>
    );
  }
}

const mapStateToProps = (store: AppState) => {
  return {
    posts: store.postState.posts,
  };
};

export default connect(mapStateToProps)(PostList);

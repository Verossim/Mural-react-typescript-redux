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

const PostList: React.FC<Props> = ({ posts }) => (
  <Posts>
    {posts.map(post => (
      <a key={post.title} href='/'>
      <img src='https://www.alliancerehabmed.com/wp-content/uploads/icon-avatar-default.png'
      alt='Usuario' />
            <div>
              <strong>{post.title}</strong>
              <p>Categoria: {post.id_category}</p>
              <p>{post.text}</p>
            </div>

      <FiChevronRight size={20} />
    </a>
    ))}
  </Posts>
);

const mapStateToProps = (store: AppState) => {
  return {
    posts: store.postState.posts,
  };
};

export default connect(mapStateToProps)(PostList);

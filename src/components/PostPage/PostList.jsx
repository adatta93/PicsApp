import React from 'react';
import { connect } from 'react-redux';
import { fetchPostsAndUser } from '../../redux/posts/posts.action';
import UserDetail from './UserDetail';

class PostList extends React.Component {

  componentDidMount() {
    this.props.fetchPostsAndUser();
  }

  render() {
    const { posts } = this.props;
    console.log(this.props);
    return (
      <div className='ui segment'>
        <h1>Post List</h1>
        <div className='ui relaxed divided list'>
          {posts.map(post => (
            <div key={post.id} className='item'>
              <i className='large middle aligned icon user' />
              <div className='content'>
                <div className='description'>
                  <h2>{post.title}</h2>
                  <p>{post.body}</p>
                  <UserDetail id={post.userId} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPostsAndUser: () => dispatch(fetchPostsAndUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
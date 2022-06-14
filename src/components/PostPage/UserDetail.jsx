import React from 'react';
import { connect } from 'react-redux';

const UserDetail = ({ user }) => {

  return (
    <div className='header'>
      {user ? user.name : null}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.users.find(user => user.id === ownProps.id)
  };
};

export default connect(mapStateToProps)(UserDetail);
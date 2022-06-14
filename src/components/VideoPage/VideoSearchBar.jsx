import React from 'react';

class VideoSearchBar extends React.Component {
  state = { searchTerm: '' };

  handleVideoSearch = (e) => {
    e.preventDefault();
    this.props.onVideoSearch(this.state.searchTerm);
  }

  render() {
    return (
      <div className='video-search ui segment'>
        <form className='ui form' onSubmit={this.handleVideoSearch}>
          <div className='field'>
            <label>Search Video</label>
            <div className='ui small icon input'>
              <input
                type='text'
                value={this.state.searchTerm}
                onChange={(e) => this.setState({ searchTerm: e.target.value })} />
              <i className='search icon'></i>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default VideoSearchBar;
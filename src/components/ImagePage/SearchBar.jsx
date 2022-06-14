import React from 'react';

class SearchBar extends React.Component {

  state = { term: '' };

  handleSearch = (e) => {
    e.preventDefault();
    this.props.onImageSearch(this.state.term);
  }

  render() {
    return (
      <div className='ui segment'>
        <form className='ui form' onSubmit={this.handleSearch}>
          <div className='field'>
            <label>Search Image</label>
            <div className='ui small icon input'>
              <input
                type='text'
                autoFocus
                value={this.state.term}
                onChange={(e) => this.setState({ term: e.target.value })}
              />
              <i className='search icon'></i>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
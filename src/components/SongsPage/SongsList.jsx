import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../../redux/songs/songs.action';

class SongsList extends React.Component {

  render() {
    const { songs, selectSong } = this.props;
    return (
      <div>
        <h1 className='ui header'>Songs List</h1>
        <div className='ui divided list'>
          {songs.map((song, i) => (
            <div key={i} className='item'>
              <div className='right floated content'>
                <button className='ui small button primary' onClick={() => selectSong(song)}>Select</button>
              </div>
              <div className='content'>{song.title}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    songs: state.songs
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectSong: (song) => dispatch(selectSong(song))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SongsList);

import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ selectedSong }) => {
  return (
    <>
      {selectedSong ?
        (
          <div>
            <h3 className='ui header'>Song Detail:</h3>
            <p>
              Title: {selectedSong.title}
              <br />
              Duration: {selectedSong.duration}
            </p>
          </div>
        ) :
        null}
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    selectedSong: state.selectedSong
  }
};

export default connect(mapStateToProps)(SongDetail);
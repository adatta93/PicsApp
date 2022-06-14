import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';

const ImageList = ({ images }) => {
  return (
    <div>
      {images.length > 0 ?
        (
          <div className='ui segment'>
            <h2>Image List</h2>
            <div className='image-list'>
              {images.map(image => (
                <ImageCard key={image.id} image={image} />
              ))}
            </div>
          </div>
        ) : null
      }
    </div>
  );
}

export default ImageList;
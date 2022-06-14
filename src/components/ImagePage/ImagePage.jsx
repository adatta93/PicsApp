import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

const ImagePage = () => {
  const [images, setImages] = useState([]);

  const onImageSearch = async term => {
    console.log(term);
    const response = await axios.get(
      `https://api.unsplash.com/search/photos?client_id=baa2932e03c1069ffa4e6d5424afac276c3942158bcfbb8a2155cb6da38729db&query=${term}`
    );
    console.log(response.data);
    setImages(response.data.results);
  };

  return (
    <div>
      <SearchBar onImageSearch={onImageSearch} />
      <ImageList images={images} />
    </div>
  );
};

export default ImagePage;

import React from "react";

const ImageGalleryItem = ({ webformatURL, largeImageURL, searchQuery, onClick}) => {
return (
    <li className="ImageGalleryItem">
  <img src={webformatURL} alt={searchQuery} onClick={onClick} data-src={largeImageURL} className="ImageGalleryItem-image" />
</li>
)
} 

export default ImageGalleryItem
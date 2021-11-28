import React from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem"

const ImageGallery = ({collection, searchQuery, onClick}) => {
return (
    <ul className="ImageGallery">{collection.map(({id, webformatURL, largeImageURL}) => (
     < ImageGalleryItem key={id} 
     webformatURL={webformatURL}
     largeImageURL={largeImageURL}
     searchQuery={searchQuery}
     onClick={onClick} />
     ))}
    </ul>
     )}

export default ImageGallery
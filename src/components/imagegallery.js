import React from 'react'
import ImageGalleryItem from "./imagegalleryitem"

function ImageGallery({ images, takeItemFromId, onClose }) {

    return (
        <ul className="ImageGallery" onClick={onClose}>
          <ImageGalleryItem images={images} takeItem={takeItemFromId}/>
        </ul>
    )
}

export default ImageGallery
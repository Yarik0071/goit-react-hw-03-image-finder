import React from 'react'
import PropTypes from "prop-types"
import ImageGalleryItem from "./imagegalleryitem"

function ImageGallery({ images, takeItemFromId, onClose }) {

    return (
        <ul className="ImageGallery" onClick={onClose}>
          <ImageGalleryItem images={images} takeItem={takeItemFromId}/>
        </ul>
    )
}

ImageGallery.proptype = {
  images: PropTypes.arrayOf(PropTypes.object.isRequired),
  onClose: PropTypes.func.isRequired,
  takeItemFromId: PropTypes.func.isRequired
}

export default ImageGallery
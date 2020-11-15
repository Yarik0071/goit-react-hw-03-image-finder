import React from 'react'
import PropTypes from "prop-types"

function ImageGalleryItem({ images, takeItem }) {

  function changeItem(item) {
    takeItem(item)
  }
    return images.map((item) => (
        <li 
        className="ImageGalleryItem"
        key = {item.id}
        onClick={() => changeItem(item)}
        id={item.id}
        >
          <img 
          src={item.webformatURL}
          alt=''
          className="ImageGalleryItem-image" 
          />
        </li>
    ));
}

ImageGalleryItem.proptype = {
images: PropTypes.arrayOf(PropTypes.object.isRequired),
takeItem: PropTypes.object.isRequired
}

export default ImageGalleryItem
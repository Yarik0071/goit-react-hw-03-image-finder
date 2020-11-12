import React from 'react'


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

export default ImageGalleryItem
import React from 'react'


function Button({fetchImages}) {
    window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      })
    return (
        <button 
        className="Button"
        type="button"
        onClick={fetchImages}
        >load more</button>
    )
}

export default Button
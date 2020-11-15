import React from 'react'
import PropTypes from "prop-types"

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

Button.proptype = {
fetchImages: PropTypes.func.isRequired
}

export default Button
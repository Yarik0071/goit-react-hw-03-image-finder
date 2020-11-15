import React, { Component } from 'react'
import PropTypes from "prop-types"
class Modal extends Component {

  handleKeyDown = (e) => {
      if(e.code === "Escape") {
        this.props.onClose()
    }
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown)
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown)
  }

  render() {

    return (
      <div className="Overlay">
        <div className="Modal">
          <img src={this.props.img} alt="" />
        </div>
      </div>
    );
  }
}

Modal.proptype = {
  img: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired
}

export default Modal;
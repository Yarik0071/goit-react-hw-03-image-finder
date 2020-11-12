import React, { Component } from 'react'
const overlay = document.querySelector(".Overlay")

class Modal extends Component {

  handleKeyDown = (e) => {
      if(e.code === "Escape") {
        this.props.onClose()
    }
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown)
    const overlay = document.querySelector(".Overlay")
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown)
  }

  render() {
console.log(overlay)
    return (
      <div className="Overlay">
        <div className="Modal">
          <img src={this.props.img} alt="" />
        </div>
      </div>
    );
  }
}

export default Modal;
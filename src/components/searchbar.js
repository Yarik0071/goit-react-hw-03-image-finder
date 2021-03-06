import React, {Component} from 'react'
import PropTypes from "prop-types"


class Searchbar extends Component {

  state = {
    inputValue: ''
  }
    handleChange = (e) => {
      const { value } = e.target

      this.setState({
        inputValue: value
      })
    }

    handleSubmit = e => {
      e.preventDefault()
      const { handleSearch } = this.props

      handleSearch(this.state.inputValue)

      this.setState({ 
        inputValue: ''
      })
    }

render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.inputValue}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
}
}

Searchbar.proptype = {
  handleSearch: PropTypes.func.isRequired
}

export default Searchbar
import React, {Component} from 'react'
import ReactDOM from 'react-dom';

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

import Serchbar from "./components/searchbar.js"
import ImageGallery from "./components/imagegallery.js"
import Modal from "./components/modal.js"
import Button from "./components/button.js"
import imagesAPI from "./components/imagesAPI.js"
import Notification from "./components/notification.js"

import './styles.css'

class App extends Component {

  state = {
    images: [],
    query: '',
    loading: true,
    error: null,
    page: 1,
    showModal: false,
    image: ''
  }

  componentDidUpdate( prevProps, prevState ) {
    const prevQuery = prevState.query
    const nextQuery = this.state.query

    if(prevQuery !== nextQuery) {
      this.fetchImages()
    }
  }

  fetchImages = () => {
    const { query, page } = this.state

    this.setState({
      loading: true
    })

    imagesAPI
    .fetchImagesAPI({query, page})
    .then(images => this.setState(prevState => ({ images: [...prevState.images, ...images], page: prevState.page + 1 })))
    .catch(error => this.setState({ error }))
    .finally(() => this.setState({ loading: false }))
  }

  handleSearch = (queryvalue) => {
    this.setState({
      query: queryvalue,
      page: 1,
      images: []
    })
  }

  onClose = () => {
    this.setState(state => ({
      showModal: !state.showModal
    }))
  }

  takeItemFromId = (item) => {
    const { largeImageURL } = item
    this.setState({
      image: largeImageURL
    })
  }

render() {
const { images, error, loading, showModal, image } = this.state

  return (
    <>
      <Serchbar handleSearch={this.handleSearch} />

      {error && (
        <Notification
          massage={`Whoops, something went wrong: ${error.massage}`}
        />
      )} 
      {
        images.length > 0 && <ImageGallery images={images} takeItemFromId={this.takeItemFromId} onClose={this.onClose} />
      }
      {loading
      ? (<Loader
         type="ThreeDots"
         color="#3f51b5"
         height={80}
         width={80}
         timeout={3000}
       />) 
       : <Button fetchImages={this.fetchImages}/>
      }
      {
        showModal && <div className="Modal"><Modal img={image} onClose={this.onClose}/></div>
      }
    </>
  );
}

}

ReactDOM.render( <App />, document.getElementById("root"))
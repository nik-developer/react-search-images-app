import React, { Component } from "react";

import Searchbar from "./components/Searchbar/Searchbar"
import ImageGallery from "./components/ImageGallery/ImageGallery"
import Button from "./components/Button/Button";
import newsApi from "./services/NewsApi"
import Modal from "./components/Modal/Modal"




class App extends Component {
  state = {
    collection: [],
    searchQuery: "",
    currentPage: 1,
    isLoading: false,
    showModal: false,
    image: {},

    };

    componentDidUpdate(prevProps, prevState) {
      const {searchQuery, image} = this.state;
      if (prevState.searchQuery !== searchQuery) {
        this.fetchCollection();
      };
      if (prevState.image !== image) {
        this.toggleModal();
      }
    };

onChangeQuery = query => {
  this.setState({ searchQuery: query, currentPage: 1, collection: [] })
}
fetchCollection = () => {
  const {currentPage, searchQuery} = this.state
  const options = {searchQuery, currentPage}

  this.setState({isLoading: true});

     newsApi.fetchCollection(options).then(collection => {this.setState(prevState => ({
      collection: [...prevState.collection, ...collection],
      currentPage: prevState.currentPage + 1
    }));
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }).finally(() => this.setState({isLoading: false}))
};
openImage = ({target}) => {
  this.setState({
    image: {
      searchQuery:this.state.searchQuery,
      src: target.dataset.src,
    }
  })
}

toggleModal = () => {
  this.setState(({showModal}) => ({
    showModal: !showModal
  }))
}
 render() {
   const {collection, searchQuery, isLoading, showModal, image} = this.state

    return (
      <>

      <Searchbar onSubmit={this.onChangeQuery}/>
      <ImageGallery collection={collection} searchQuery={searchQuery} onClick={this.openImage}/>
      {isLoading && <div className="lds-hourglass"></div> }
      {collection.length > 0 && (<Button onClick={this.fetchCollection}/>)}
      {showModal && <Modal onClose={this.toggleModal} image={image}/>}
      
      </>
    )
  }
}

export default App;

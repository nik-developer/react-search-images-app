
import React, {Component} from "react"

class Searchbar extends Component {
    state = {searchQuery: ''};

    handleChange = e => {
        this.setState({searchQuery: e.currentTarget.value})
      }
      handleSubmit = e => {
        e.preventDefault();

        this.props.onSubmit(this.state.searchQuery)

        this.setState({searchQuery: ''});
      }
render() {
    return (
    <header className="Searchbar">
     <form className="SearchForm" onSubmit={this.handleSubmit}>
      <button type="submit" className="SearchForm-button">
       <span className="SearchForm-button-label">Search</span>
      </button>

    <input
      value={this.state.searchQuery}
      onChange={this.handleChange}
      className="SearchForm-input"
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
     </form>
    </header>
    )}}
    
    

export default Searchbar
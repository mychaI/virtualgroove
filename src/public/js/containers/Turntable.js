import React, { Component } from 'react';
import axios from 'axios';

/* Components */
import Search from '../presentation/Search';
import Enso from '../presentation/Enso';
import Results from '../presentation/Results';

class Turntable extends Component {

  constructor() {
	super();
	this.state = {
	  searchTerm: '',
	  searchResults: [],
	}

	this.onChange = this.onChange.bind(this);
	this.onSubmit = this.onSubmit.bind(this);

  }

  onChange(e) {
	this.setState({ [e.target.name] : e.target.value })
  }

  onSubmit(e) {
	e.preventDefault();
	console.log('Searching for: ', this.state.searchTerm);
	axios.post('/api/search/', { searchTerm: this.state.searchTerm })
	  .then( res => console.log(res) )
	  .catch( err => console.log(err) );
  }


  render() {
	return (
	  <div id='turntable'>
		<Search onChange={this.onChange} onSubmit={this.onSubmit} searchTerm={this.state.searchTerm} />
		<Enso />
		<Results searchTerm={this.state.searchTerm} />
	  </div>
	)
  }
}

export default Turntable;

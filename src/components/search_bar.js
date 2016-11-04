import React, { Component } from 'react';

//state is a plain javascript object that is used to record and react to events
//when state changes, a componnent immedietly rerenenders
//need to initialize state
//Always manipulate state with this.setState()s

//controlled field is an element whose value is set by the state
//controlled component has value set by state, not hte other way around
//value only changes when the state changes

export default class SearchBar extends Component {
	constructor(props) {
		super(props)
		this.state = { term: '' }
	}
	onInputChange(term) {
		this.setState({term})
		this.props.onSearchTermChange(term)
	}
	render() {
		return (
			<div className="search-bar">
				<input
					value={this.state.term}
					onChange={ e => this.onInputChange(e.target.value) } />
			</div>
		)
	}
}
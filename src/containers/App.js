import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import ErrorBoundry from '../components/ErrorBoundry';
import Scroll from '../components/Scroll';



class App extends Component {

	constructor(){	
		super()
		this.state = {
			robots: [],
			searchfield: ''
		}
	}


	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response =>{
		return response.json();
		})
		.then(users =>{
			this.setState({robots: users})
		});
		
	}


	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value });
	}


	render(){

	const filterrobots = this.state.robots.filter(robots =>{
		return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		})

	if (this.state.robots.length === 0){
		return <h1 className='tc'>Loading ......</h1>
	}
	else{
		return(

		<div className='tc'>
			<h1 className='f1'>Robo Friends</h1>
			<SearchBox 	searchChange = {this.onSearchChange}/>
			<hr/>
			<Scroll>
				<ErrorBoundry>
					<CardList robots={ filterrobots }/>
				</ErrorBoundry>
			</Scroll>
		</div>
	);
}
	}
}

export default App;
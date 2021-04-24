
import React from 'react';

class Intro extends React.Component {
	
	constructor(props){
		super(props);
		
		this.state = {};
	}
	render(){
		return(
			<div class="container">
				<div class="introduction">
					<div class="intro-text">
						<h1>Welcome to Clerkie</h1>
						<p>Your #1 partner in financial planning</p>
					</div>
				</div>
			</div>
		);
	}
}


export default Intro;
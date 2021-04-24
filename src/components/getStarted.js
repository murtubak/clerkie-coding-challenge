import React from 'react';

class GetStarted extends React.Component {
	constructor(props){
		super(props);
		
		this.state = {};
	}
	
	render(){
		return(
			<div class="container">
				<div class="get-started">
					<div>
						<h1>Get Started with Clerkie</h1>
					</div>
					<img src="assets/images/google-play-badge.png"/>
					<img src="assets/images/appstore-badge.svg"/>
				</div>
			</div>
		);
	}
}


export default GetStarted;
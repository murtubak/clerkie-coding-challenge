import React from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component {
	
	constructor(props){
		super(props);
		this.state = {};
	}
	
	render(){
		return(
            <div class="container">
			    <div class="website-header">
                    <div class="header-left">
						<img class="logo" src="assets/images/clerkie_logo.png"/>
				   		<h1>Clerkie</h1>
                    </div>
					<div class="header-right">
						<p>Home</p>
						<Link to="/login"><p>Log In</p></Link>
					</div>
			    </div>
            </div>
		);
	}
}


export default Header;
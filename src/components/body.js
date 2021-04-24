import React from 'react';

class Body extends React.Component {
	constructor(props){
		super(props);
		
		this.state = {};
	}
	
	render(){
		
		return(
			<div class="body-background">
				<div class="container">
					<div class="body row">
						<div class ="body-left">
						<div class="solve-debt">
							<h1>Debt Solutions</h1>
							<p>Achieve a 70% reduction in your debt</p>
						</div>
						<div class="loan-powered">
							<h1>Simple Loans</h1>
							<p>Borrow money when times are tough to cover expenses</p>
						</div>
					</div>
					<img src="assets/images/clerkie_phone_1.png"/>
					<div class = "body-right">
						<div class="advice-financial">
							<h1>Financial Advice</h1>
							<p>Get personalized and real-time answers for your finances</p>
						</div>
					</div>
				</div>
				</div>
			</div>
		);
	}
}


export default Body;
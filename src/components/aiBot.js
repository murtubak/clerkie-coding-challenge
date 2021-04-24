import React from 'react';
import Chatbot from 'react-chatbot-kit';
import socketIOClient from "socket.io-client";

import ActionProvider from './aibot_components/actionProvider';
import MessageParser from './aibot_components/messageParser';
import config from './aibot_components/config';

class AiBot extends React.Component {
	
	constructor(props){
		super(props);
		
		this.state = {
			endpoint: "http://127.0.0.1:3000"
		};
	}

	componentDidMount() {
		const socket = socketIOClient("http://127.0.0.1:3000");
		socket.on("chat message", (msg) => {
			console.log('message: ' + msg);
		  });
	}
	render(){
		return(
			<div class="container">
				<div class="chat-container">
				<Chatbot config={config} 
					actionProvider={ActionProvider} 	    
					messageParser={MessageParser} />
					</div>
			</div>
		);
	}
}

export default AiBot;
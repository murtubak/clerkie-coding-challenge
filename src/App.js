import React from 'react';
import './css/styles.css';
import Header from './components/header';
import Body from './components/body';
import Intro from './components/intro';
import AiBot from './components/aiBot';
import GetStarted from './components/getStarted'
import socketClient  from "socket.io-client";
const SERVER = "http://127.0.0.1:3000";

function App() {				
		return (
			<div className='App'>
				<Header></Header>
				<AiBot></AiBot>
				<Intro></Intro>
				<Body></Body>
				<GetStarted></GetStarted>
			</div>
		);
	}

export default App;

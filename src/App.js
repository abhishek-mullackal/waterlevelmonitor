import React, { useState,useEffect } from "react"
import { Row,Col } from "react-bootstrap";
import styles from './App.css'
import firebase from './firebase'


const App=()=> {

	const [percentage,setPercentage]=useState(10);
	var perc=percentage+'%';
	const surfaceArea=100;
	const height=2;

	useEffect(()=>{
		readValue();
	},[])

	const readValue=()=>
	{
	firebase.database().ref('pool1/distance').on('value',function(snapshot)
		{
			setPercentage(snapshot.val());
		})
	}

	return (
		<div className="App container">
			<div className="heading">Water level monitoring system</div>
			<Row>
				<Col md={4} lg={4} xs={2}></Col>
				<Col md={4} lg={4} xs={8}><div className="tank w-100 mt-4">
					<div className="water w-100" style={{height:perc}}>{percentage}%</div>
					
			</div></Col>
			<Col md={4} lg={4} xs={2}></Col></Row>
			<Row>
				<Col md={4} lg={4} xs={2}></Col>
				<Col md={4} lg={4} xs={8}>
					<div className="info">
						<h4>volume of water : {surfaceArea*height*percentage*10} litres</h4>

					</div>
				</Col>
				<Col md={4} lg={4} xs={2}></Col>

			</Row>
		</div>
	);
}

export default App	
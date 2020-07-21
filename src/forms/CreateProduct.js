import React, { Component } from 'react';

class CreateProduct extends Component {
	constructor(){
		super();
		this.state = {
			bloodType: "",
			componentType: "",
			drawDate: ""
		}
	}

	handleChange= (event) =>{
		const {name,value} = event.target
		this.setState({
			[name]: value
		})
	}
	render() {
		const {bloodType,componentType,drawDate} = this.state
		return (
			<div>
				<form>
					<div>	
						<label>Blood Type</label>
						<select onChange={this.handleChange} name="componentType" id="bloodType">
							<option>PLT </option>
							<option>RBC </option>
							<option>Whole Blood</option>
							<option>FFP</option>
							<option>CRYO </option>
						</select>
					</div>
					<br/>
					<div>
						<label>Component Type </label>
						<select name="componentType" id="bloodType">
							<option>O</option>
							<option>A</option>
							<option>B</option>
							<option>AB</option>
						</select>
					</div>
					<br/>
					<div>
						<label>Draw Date</label>
						<input type="date" id="dateDate"/>
					</div>
				</form>
			</div>
		);
	}
}

export default CreateProduct;

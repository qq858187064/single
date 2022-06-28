import React from 'react'
export default class clock extends React.Component{
	constructor(props)
	{super(props);
	this.state={
		date:new Date(),
		toggle:0
		};
		//this.handleClick=this.handleClick.bind(this);
	}
	componentDidMount(){
		this.timerId=setInterval(()=>this.tick(),1000);
	}
	componentWillUnmount(){
		clearInterval(this.timerId);
	}
	tick(){
		this.setState({date:new Date()})
	}
	/*
	handleClick(e){
		e.preventDefault();
		console.log("you clicked a"+this.state.toggle)
		this.setState(state=>({toggle:!this.state.toggle}));
	}*/
	handleClick=()=>{console.log(1,this)}
	render(){
		return(
		<h2 onClick={this.handleClick}>{this.state.date.toLocaleTimeString()}</h2>
		)
	}
	
}
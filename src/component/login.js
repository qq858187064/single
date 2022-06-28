import React from 'react'
import '../style/login.css';
export default class login extends React.Component{
	constructor(props)
	{
		super(props);
	this.state={
		date:new Date(),
		toggle:0,
		ut:1
		};
		//this.handleClick=this.handleClick.bind(this);
		this.uthandle=this.uthandle.bind(this);
	}

	login=()=>{
		let fm=document.getElementById("fm");
		console.log(fm.length)
		for(let i=0;i<fm.length;i++){
		console.log(fm.elements[i].name,fm.elements[i].value)}

	}
	uthandle(e){
		this.setState({ut:e.target.value});
	}
	render(){
		return(
		<form className="login" id="fm"><b onClick={this.props.toggle}>&#215;</b>
		<input type="text" name="nm" />
		<input type="password" name="pwd" />
		    <select value={this.state.ut} onChange={this.uthandle}>
            <option value="1">注册用户</option>
            <option value="2">管理员</option>
            <option value="3">超级管理员</option>
          </select>
		<a onClick={this.login}>登录/注册</a>
		</form>
		)
	}
	
}
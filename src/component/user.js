import React from 'react'
import Login from './login'
export default class user extends React.Component{
	constructor(props)
	{super(props);
	this.state={
		anony:1,
		show:0
		};
		//this.handleClick=this.handleClick.bind(this);
		this.toggle=this.toggle.bind(this);
	}
	toggle(){
		this.setState({show:this.state.show?0:1});
		console.log(this.state.show)
	}
	render(){
		
			let el=<p onClick={this.toggle}>登录/注册</p>;
			
			if(!this.state.anony)
			el=<p onClick={()=>{console.log(456)}}>用户信息</p>

		return <>
		
		{el}{ this.state.show===1&&<Login toggle={this.toggle} />}
		
		</>
	}
	
}
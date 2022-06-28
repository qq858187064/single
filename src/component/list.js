import {Component} from 'react'
import axios from 'axios'
export default class list extends Component {
	  constructor() {
    super();
	
	
		var a=[{"id":15183,"title":"cryan","body":"<p>iportal</p>","uid":2,"tm":"2019-09-11T10:12:25.733Z"},{"id":15184,"title":"ide","body":"<p>crayon</p>","uid":2,"tm":"2019-09-11T10:13:47.880Z"},{"id":17253,"title":"crayon","body":"<p>crayon1</p>","uid":2,"tm":"2019-12-02T10:55:11.143Z"},{"id":18259,"title":"政","body":"<p>1982</p>","uid":2,"tm":"2020-05-06T08:10:08.730Z"},{"id":18260,"title":"我们","body":"<p>永远</p>","uid":2,"tm":"2020-05-10T17:44:36.460Z"}];
	    this.state = {
			data: a,
			ipt:''
			};
		
	/*	
	axios.get('/api/list').then((res)=>{
	   this.setState({
        data: res.data,
      });
  }).catch(function(err){
    console.log(err);
  });*/
		
	  }
	  handlea(e){this.props.sdata(e.target.value);}
	  
	   render() {
		   return <div>{this.props.tit}
		   {
		          this.state.data.map((o,i) => (
				   //{o.body}
				    <div key={i} dangerouslySetInnerHTML={{__html: o.body}} />
				  ))
		   
	   }<input onChange={this.handlea.bind(this)} />
</div>
		   
	   }

}

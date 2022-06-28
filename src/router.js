import React,{ Component } from 'react'
import {Route, Routes,} from 'react-router-dom'
import Index from './index'
import About from './page/about'
import Service from './page/service'
import My from './page/my'

export default class Router extends Component {
    render(){
        return (
                <Routes>
					<Route path="/" exact element={ <>Index</> }></Route>
                    <Route path="/service" element={ Service } />
                    <Route path="/my" element={ My } />
					<Route path="/about" exact element={About }></Route>
					<Route  element={404} />
                </Routes>
        )
    }
}					/*<Route path="/list/:id" component={List} />*/

import React,{ Component } from 'react'
import {Route, Routes,BrowserRouter,Link} from 'react-router-dom'
import Index from '../index'
import My from '../page/my'

export default class Router extends Component {
    render(){
        return (
            <BrowserRouter>  <Link to="/my">my</Link>
                <Routes>
              
					<Route path="/" element={<Index /> } />
                    <Route path="/my" element={<My />} />
					<Route  element={404} />
                </Routes>
                </BrowserRouter>
        )
    }
}					/*<Route path="/list/:id" component={List} />*/

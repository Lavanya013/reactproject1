import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import Mainpage from "./Mainpage"
import Secondpage from "./Secondpage"
import Errorpage from "./Errorpage"
import Menu from "./Menu"
import Karack from './Karack';
import Kahome from './Kahome';
import Kacla from './Kacla';


const App = () => {

    return (

        <>
        <Menu />
        <Switch>

            <Route exact path='/' component={Mainpage}/>
            <Route exact path='/secondpage' component={Secondpage}/>
            <Route exact path='/karack' component={Karack}/>
            <Route exact path='/kahome' component={Kahome}/>
            <Route exact path='/kacla' component={Kacla}/>
            <Route component={Errorpage}/>

        </Switch>

        </>
       

    )
}


export default App;
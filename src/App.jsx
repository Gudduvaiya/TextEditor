import React, { useState } from "react";
import Counters from "./Counters";
import Navi from "./Navbar";
import Textbox from "./Textbox";
import About from "./About";
import Alerts from "./Alerts";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const App = () => {
  // const [alert,setalert]=useState()
  // const Showalert=(message,type)=>{
  //     setalert({
  //         msg: message,
  //         typ: type,
  //     })

  // }
  return (
    <React.Fragment>
      <Navi></Navi>
      <Alerts className="container" alrt={alert} />
      <Router>
        <Switch>
          <Route path="/">
            <div className="container my-3">
              <Textbox head="Enter Your Text here..." />
            </div>
          </Route>
          <Route exact path="/About">
            <About></About>
          </Route>
        </Switch>
      </Router>
     
    </React.Fragment>
  );
};
export default App;

import Aboutus from "./Aboutus"
import Contact from "./Contact"
import Stuff from "./Stuff"
import Home from "./Home"
import { Route,Switch } from "react-router-dom";
import Login from "./Login";
import Electronicdevices from "./component/web-component/Electronicdevices";
import Register from "./Register";
import Clothes from "./component/web-component/Clothes";
import Property from "./component/web-component/Property";
import Sports from "./component/web-component/Sports";
import Final from "./Final";
const All=()=>{
    return < div className="All">
        <Switch>
        <Route exact path ='/' component ={Home}/>
        <Route path ='/contact'component={Contact}/>
        <Route path ='/stuff'component={Stuff}/>
        <Route path ='/Aboutus'component={Aboutus}/>
        <Route path ='/login'component={Login}/>
        <Route path ='/register'component={Register}/>
        <Route path ='/logout'component={Logout}/>
        <Route path ='/electronicdevices'component={Electronicdevices}/>
        <Route path ='/clothes'component={Clothes}/>
        <Route path ='/property'component={Property}/>
        <Route path ='/sports'component={Sports}/>
        <Route path ='/final'component={Final}/>
        <Route component={Notfound}/>
        </Switch>
        </div>

}
const Notfound=()=>{
    return <>
    <h1>oOPS!! NO PAGE FOUND</h1>
   
    </>
}
const Logout = () => {
  localStorage.removeItem('user')
  window.location="/"
  
  
}
export default All;
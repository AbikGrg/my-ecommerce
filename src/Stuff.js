import Product from "./component/functional-component/Product";
import {Placeholder} from 'react-bootstrap'
import Img1 from "./image/pic.jpg"
const heading={
    color:"green"
}
const Stuff =()=>{

    return<>
     <img src= {Img1} width ="100%" height="320" alt="" />
 <>  
  <Placeholder xs={12} size="lg" bg="primary" />
 </>
 <h4 style={heading}> Category of our products:</h4>
    <Product/>
 
    </>
}
export default Stuff;
import { Component } from "react";

class Counter extends Component{
    constructor(){
        super()
        this.state = {count: 0}
        
    }
 static getDerivedStateFromProps(){
return null

 }

componentDidMount() {
console.log('componentdidmount')
}   
shouldComponentUpdate(){
    return true
}
increase() {
    this.setState({count:this.setState+1})
}
 render(){
  return <>
  <h1>count:{this.state.count}</h1>
  <button onClick={() => this.increase()}> Increase</button>
  </>
 }

}
 export default Counter;

 
     /*decrease(){
      
        console.log(this.state.count )

        this.setState({count: this.state.count -1})
     }*/
     
  {/*
  <button onClick={() => this.decrease()}> Decrease</button>*/}
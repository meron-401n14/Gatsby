//import React, {useState} from 'react'
import React from 'react'


/**
 * @constructor props  pass state 
 * @function  increment take no param and count start from 1
 * @function decrement take no param and decrease number by 1 
 */


class Counter extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      count:0,
    }
  }

  increment = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  decrement = () => {
    this.setState(prevState => ({ count: prevState.count -1}))
  }


  render(){
    return (
      <div>
        <button id="btn" onClick={this.increment}>Click to increment</button>
        <button onClick={this.decrement}>Click to decrement</button>
    <p>{this.state.count}</p>
      </div>
    )
  }

}





export default Counter;
//import React, {useState} from 'react'
import React from 'react'


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
        <button onClick={this.increment}>Click to increment</button>
        <button onClick={this.decrement}>Click to decrement</button>
    <p>{this.state.count}</p>
      </div>
    )
  }

}




// const Counter = () =>{
//     const [count, setCount] = useState(0)

//          increaseAndLog = () => {
//          setCount(count + 1)

//         console.log('we are console logging as well as updating!')
//     }

//    return (
//      <div>
//        <button onClick={increaseAndLog}>Click to increment</button>
//        <button onClick={()=> setCount(count -1)}>Click to decrement</button>
//        <p>{count}</p>
//      </div>
//    )


// }



export default Counter;
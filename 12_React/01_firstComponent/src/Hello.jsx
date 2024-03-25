
//Class based components also used props
// import React, {Component} from "react";

// class Hello extends Component{
//     render(){
//         return(
//             <div>
//                 <h1>Hello Guys</h1>
//                 <p>{this.props.greeting}</p>
//             </div>
//         )
//     }
// };

// export default Hello;

//Function based components
import React from 'react'

function Hello(props) {
  return (
    <div>
        <h1>Hello Guys</h1>
        <p>{props.greeting}</p>
    </div>
  )
}

export default Hello
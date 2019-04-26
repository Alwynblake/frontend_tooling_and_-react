import React from 'react';
import Header from './Header';
import { say } from 'cowsay-browser';
// import Faker from './faker';

export default class App extends React.Component {

  render() {


//   constructor(props) { // blake- think about props as html attributes
//     // blake - everything we add as an attribute in JSX will
//     // come here as a value in the props object
//     super(props); // blake - super is React.Component's constructor
//     this.state = {};
//     this.state.newMoos = 'FAKER';
//
//   }
//
// //     ///////////////
//     handleCounterIncrement = () => {
//       this.setState((previousState) => {
//         return {
//           counter: previousState.counter + 1,
//         };
//       });
//     };
//       /////////////
// newMoos = () => {
// this.state(() => {
//   return {
//
//   };
//   });
//     };

    return (
        <div>
          <Header/>
          {this.props.children}
          {/*<button onClick={this.newMoos}> click me</button>*/}
          <button id="reset"> Click Me</button>
          <pre> {(say({text: 'moo'}))} </pre>
        </div>
        // < button onClick = {this.newMoos} > click me < /button>
  )
      }
    };


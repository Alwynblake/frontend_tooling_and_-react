import React from 'react';
import Header from './Header';
import { say } from 'cowsay-browser';
import Faker from 'faker';

export default class App extends React.Component {
constructor(props) {
  super(props);
  this.state = {};
  this.state.content = Faker.lorem.sentence();

}
  render() {
const handleClick = () => window.location.reload();

    return (
        <div>
          <Header/>
          <button onClick={handleClick}> Click Me</button>
          <pre> {(say({text: this.state.content}))} </pre>
        </div>
  )
      }
    };


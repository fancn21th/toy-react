import { createElement, render, Component } from "./toy-react";

class Foo extends Component {
  render() {
    return (
      <div>
        <h1>Lorem ipsum dolor sit amet.</h1>
        {this.children}
      </div>
    );
  }
}

render(
  <Foo id="foo">
    <h1>hello world</h1>
    <h1>hello world</h1>
    <h1>hello world</h1>
  </Foo>,
  document.body
);

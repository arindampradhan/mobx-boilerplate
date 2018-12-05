import { observer, inject } from "mobx-react";
import React, { Component } from "react";

class Example extends Component {
  render() {
    return (
      <>
        <h1>Example</h1>
      </>
    );
  }
}

export default inject("routing")(observer(Example));

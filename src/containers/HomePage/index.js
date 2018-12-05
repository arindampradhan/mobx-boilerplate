import { observer, inject } from "mobx-react";
import React, { Component } from "react";

class HomePage extends Component {
  render() {
    return (
      <>
        <h1>HomePage</h1>
        <hr />
        <h3>
          <pre>
            match :&nbsp;
            {JSON.stringify(this.props.match, 0, 2)}
          </pre>
        </h3>
      </>
    );
  }
}

export default inject("routing")(observer(HomePage));

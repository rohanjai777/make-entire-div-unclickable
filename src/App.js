import "./styles.css";
import React, { Component } from "react";

class App extends Component {
  state = {
    disabled: false
  };
  handleClick = (buttonName) => {
    console.log(buttonName + " clicked");
  };

  handleChange = (e) => {
    console.log(e.currentTarget.value);
  };

  handleDisable = () => {
    this.setState({ disabled: true });
    console.log("disabled");
  };
  render() {
    const pointerEvent = this.state.disabled ? "none" : "auto";
    const cursorNotAllowed = this.state.disabled ? "not-allowed" : "";
    return (
      <div>
        <div
          style={{
            height: "100px",
            background: "yellow",
            cursor: cursorNotAllowed
          }}
        >
          <div style={{ pointerEvents: pointerEvent }}>
            <button onClick={() => this.handleClick("b1")}>b1</button>
            <button onClick={() => this.handleClick("b2")}>b2</button>
            <input onChange={(e) => this.handleChange(e)} />
          </div>
        </div>
        <button onClick={this.handleDisable}>Disable Div</button>
      </div>
    );
  }
}

export default App;

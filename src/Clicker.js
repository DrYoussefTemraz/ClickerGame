import React, { Component } from "react";

class Clicker extends Component {
  state = { num: 1 };

  genRandom = (e) => {
    // pick random number 1-10
    let rand = Math.floor(Math.random() * 10) + 1;
    //update state with new rand
    this.setState({ num: rand });
  };
  render() {
    return (
      <div>
        <h1>Number is: {this.state.num}</h1>
        {this.state.num === 7 ? (
          <h2 className="green">انت كسبان كيس شيبسي</h2>
        ) : (
          <button onClick={this.genRandom}>Random Number</button>
        )}
      </div>
    );
  }
}

export default Clicker;

import React from "react";
import "./App.css";
import "./counter.css";

class App extends React.Component {
  state = {
    counter: 0,
  };

  animate = () => {
    let counterA = document.querySelector(".counter");
    counterA.style.animationName = "counter";
    counterA.style.animationDuration = "150ms";
    setTimeout(() => {
      counterA.style.animation = "none";
    }, 150);
  };

  add = () => {
    this.animate();

    this.setState({
      counter: this.state.counter + 1,
    });
  };
  sub = () => {
    this.animate();
    this.setState({
      counter: this.state.counter - 1,
    });
  };
  render() {
    return (
      <div className="containerWrapper">
      <div className="container">
        <h1 className="mainHeading">Counter App</h1>
        <div className="counterContainer">
          <div className="counter">{this.state.counter}</div>
        </div>
        <div className="btnContainer">
          <button className="btn" onClick={this.add}>
            +
          </button>
          <button className="btn" onClick={this.sub}>
            -
          </button>
        </div>
      </div>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div>
//       <h1>Counter App</h1>
//       <h2>0</h2>
//       <button>+</button>
//       <button>-</button>
//     </div>
//   );
// }

export default App;

import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log("Initialized");
  }

  componentDidMount() {
    console.log("Mounted");
  }

  componentDidUpdate() {
    console.log("Updated");
  }

  componentWillUnmount() {
    console.log("Unmounted Soon");
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    console.log("Rendered!");
    return (
      <div>
        <h1 style={{ fontSize: "64px" }}>{this.state.count}</h1>
        <button
          style={buttonStyle}
          onClick={() => {
            this.handleClick();
          }}
        >
          +
        </button>
        <div>
          <button
            onClick={() => {
              this.props.finishGame();
            }}
            style={buttonStyle}
          >
            Finish Game
          </button>
        </div>
      </div>
    );
  }
}

const buttonStyle = {
  fontSize: "32px",
  width: "200px",
  height: "48px",
  borderRadius: "4px",
  marginRight: "24px",
  marginLeft: "24px",
  marginTop: "30px",
  color: "#fff",
  backgroundColor: "#66ccff"
};

export default Counter;

import React from "react";
import IconButton from "@mui/material/IconButton";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import "../App.css";

class Keyboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topRow: ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
      middleRow: ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
      bottomRow: ["Z", "X", "C", "V", "B", "N", "M", "←"],
      actionRow: ["Enter"],
    };
  }

  handleClick = (event) => {
    this.props.keyboardType(event.currentTarget.textContent);
  };

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          width: "340px",
          textAlign: "center",
          marginTop: "5px",
          marginBottom: "5px",
          letterSpacing: "2px",
          padding: "2px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            width: "100%",
          }}
        >
          {this.state.topRow.map((letter, idx) => (
            <div className="keyStyle" key={letter} onClick={this.handleClick}>
              {letter}
            </div>
          ))}
        </div>
        <br />
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",

            width: "100%",
          }}
        >
          {this.state.middleRow.map((letter, idx) => (
            <div className="keyStyle" key={letter} onClick={this.handleClick}>
              {letter}
            </div>
          ))}
        </div>
        <br />
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            width: "100%",
          }}
        >
          {this.state.bottomRow.map((letter, idx) => (
            <div className="keyStyle" key={letter} onClick={this.handleClick}>
              {letter}
            </div>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            width: "100%",
          }}
        >
          {this.state.actionRow.map((letter, idx) => (
            <div
              className="actionKeyStyle"
              key={letter}
              onClick={this.handleClick}
            >
              {letter}
            </div>
          ))}
          <div>
            <IconButton style={{ float: "left" }}>
              <RestartAltIcon
                sx={{ fontSize: "38px", color: "#43D312" }}
                onClick={this.props.resetGame}
              />
            </IconButton>
          </div>
        </div>
      </div>
    );
  }
}

export default Keyboard;

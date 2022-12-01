import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div>
        <div style={{ fontSize: "2.5em", color: "white" }}>
          🅆 🄾{" "}
          <span
            style={{
              fontSize: "80px",
              backgroundColor: "#282c34",
              color: "lightgreen",
            }}
          >
            🅁
          </span>{" "}
          🄳 🄸 🄴
          <br />
          <div>
            <p style={{ fontSize: "0.22em", color: "white" }}>
              By Ron's Fun & Games
            </p>
          </div>
        </div>
        <div style={{ color: "white" }}>{this.props.errorMessage}</div>
      </div>
    );
  }
}
export default Header;

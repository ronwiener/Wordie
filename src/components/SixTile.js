import React from "react";

class Tile1 extends React.Component {
  render() {
    let bgStyle = {
      width: "30px",
      backgroundColor: this.props.color,
      height: "30px",
      fontSize: "x-large",
      float: "left",
      border: "1px solid white",
      marginRight: "4px",
      marginTop: "4px",
      paddingBottom: "4px",
      color: "black",
      borderRadius: "5px",
      verticalAlign: "middle",
    };
    return <div style={bgStyle}>{this.props.letter}</div>;
  }
}
export default Tile1;

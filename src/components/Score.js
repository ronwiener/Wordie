import React from "react";
import IconButton from "@mui/material/IconButton";
import DeleteSweepOutlinedIcon from "@mui/icons-material/DeleteSweepOutlined";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import "../App.css";

class Score extends React.Component {
  render() {
    let percentWon = parseFloat(
      (this.props.gamesWon / this.props.gamesPlayed) * 100
    ).toFixed(1);
    if (isNaN(percentWon)) {
      percentWon = 0;
    }

    return (
      <div
        style={{
          verticalAlign: "middle",
          fontSize: "20px",
          float: "left",
          display: "inline-block",
        }}
      >
        <div
          style={{
            float: "left",
          }}
        >
          Score: <font style={{ color: "#C78FEF" }}>{this.props.score}</font>{" "}
          Played:{" "}
          <font style={{ color: "#C78FEF" }}>{this.props.gamesPlayed}</font>{" "}
          Won:{" "}
          <font style={{ color: "#C78FEF" }}>{this.props.gamesWon} -- </font>
          {percentWon}% <br />
          Current Win Streak:{" "}
          <font style={{ color: "orange" }}>
            {this.props.currentStreak}
          </font>{" "}
          Longest Streak:{" "}
          <font style={{ color: "orange" }}>{this.props.longestStreak}</font>
        </div>

        <IconButton style={{ float: "left" }} onClick={this.props.clearScores}>
          <DeleteSweepOutlinedIcon sx={{ fontSize: "40px", color: "red" }} />
          {/* alt= "Delete Scores?" title="Delete Scores" style={{display:"inline-block",verticalAlign:"middle",width:"48px",height:"48px",paddingBottom:"8px"}} onClick={this.props.clearScores} /> */}
        </IconButton>
        <IconButton style={{ float: "right" }}>
          <RestartAltIcon
            sx={{ fontSize: "40px", color: "#43D312" }}
            onClick={this.props.resetGame}
          />
        </IconButton>
      </div>
    );
  }
}

export default Score;

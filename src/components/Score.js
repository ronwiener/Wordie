import React from "react";
import IconButton from "@mui/material/IconButton";
import DeleteSweepOutlinedIcon from "@mui/icons-material/DeleteSweepOutlined";
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
          Score: {this.props.score} Played: {this.props.gamesPlayed} Won:{" "}
          {this.props.gamesWon} -- {percentWon}% <br />
          Current Streak: {this.props.currentStreak} Longest Streak:{" "}
          <font style={{ color: "orange" }}>{this.props.longestStreak}</font>
        </div>

        <IconButton style={{ float: "left" }} onClick={this.props.clearScores}>
          <DeleteSweepOutlinedIcon sx={{ fontSize: "45px", color: "red" }} />
          {/* alt= "Delete Scores?" title="Delete Scores" style={{display:"inline-block",verticalAlign:"middle",width:"48px",height:"48px",paddingBottom:"8px"}} onClick={this.props.clearScores} /> */}
        </IconButton>
      </div>
    );
  }
}

export default Score;
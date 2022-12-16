import React from "react";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import DeleteSweepOutlinedIcon from "@mui/icons-material/DeleteSweepOutlined";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import Filter5Icon from "@mui/icons-material/Filter5";
import Typography from "@mui/material/Typography";

import "../App.css";

class Buttons1 extends React.Component {
  render() {
    return (
      <div className="buttons">
        <IconButton onClick={this.props.clearScores}>
          <DeleteSweepOutlinedIcon
            style={{
              paddingRight: "45px",
              fontSize: "40px",
              color: "red",
            }}
          />
        </IconButton>

        <Link to="/" style={{ textDecoration: "none" }}>
          <Filter5Icon
            style={{ fontSize: "30px", color: "white", marginTop: "12px" }}
          />
          <Typography
            style={{
              lineHeight: "0.75em",
              fontSize: "20px",
              color: "white",
              paddingLeft: "6px",
              marginBottom: "5px",
            }}
          >
            letter game
          </Typography>
        </Link>

        <IconButton onClick={this.props.resetGame}>
          <RestartAltIcon
            style={{
              paddingLeft: "45px",
              fontSize: "40px",
              color: "#43D312",
            }}
          />
        </IconButton>
      </div>
    );
  }
}

export default Buttons1;

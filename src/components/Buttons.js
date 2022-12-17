import React from "react";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import Filter6Icon from "@mui/icons-material/Filter6Rounded";
import Typography from "@mui/material/Typography";

import "../App.css";

class Buttons extends React.Component {
  render() {
    return (
      <div className="buttons">
        <Link to="appsix" style={{ textDecoration: "none" }}>
          <Filter6Icon
            style={{
              paddingRight: "40px",
              fontSize: "30px",
              color: "white",
              marginTop: "12px",
            }}
          />
          <Typography
            style={{
              lineHeight: "0.75em",
              fontSize: "20px",
              color: "white",
              paddingRight: "30px",
              marginBottom: "15px",
            }}
          >
            letter game
          </Typography>
        </Link>

        <IconButton onClick={this.props.resetGame}>
          <RestartAltIcon
            style={{
              paddingLeft: "120px",
              fontSize: "40px",
              color: "#43D312",
            }}
          />
        </IconButton>
      </div>
    );
  }
}

export default Buttons;

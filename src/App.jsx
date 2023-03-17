// App.js
import "./App.css";
import { Data } from "./Data";
import { useContext } from "react";
import { Context } from "./Context";
import { CustomizedSnackbarsLike } from "./SnackbarLike";
import { CustomizedSnackbarsDislike } from "./SnackbarDislike";
import { RadioGroupRating } from "./Rating";
import * as React from "react";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";

function App() {
  const dogs = useContext(Context);

  return (
    <div className="globalContainer">
      <div className="dogContainer">
        <div className="header">
          <MenuIcon />
          <img
            src="https://repository-images.githubusercontent.com/207080146/d8098100-d257-11e9-9952-186df5374c28"
            alt=""
          />
          <Badge badgeContent={9199} color="primary">
            <MailIcon color="action" />
          </Badge>
        </div>

        <Data />
        <h3></h3>
        <div className="likeDislikeBtn">
          <CustomizedSnackbarsLike onClick={dogs.fetchData} />
          <CustomizedSnackbarsDislike onClick={dogs.fetchData} />
        </div>
      </div>
      <div className="rating">
        <RadioGroupRating />
      </div>
      <div className="ratingText">
        <h4>What do you think of this app?</h4>
      </div>
    </div>
  );
}

export default App;

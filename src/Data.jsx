import { useContext } from "react";
import { Context } from "./Context";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { randomName } from "./all-dog-names";
import { randomPlace } from "./places";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export const Data = () => {
  const context = useContext(Context);
  return (
    <div className="wrapper">
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm">
          <img className="image" src={context.data.message} alt="No image" />
          <Container className="info" maxWidth="sm">
            <div className="infoContainer">
              <p>
                <b>Name: </b>
                {randomName()}
              </p>
              <p>
                <LocationOnIcon /> {randomPlace()}
              </p>
            </div>
          </Container>
        </Container>
      </React.Fragment>
    </div>
  );
};

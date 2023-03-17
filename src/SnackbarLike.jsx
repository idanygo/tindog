import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Context } from "./Context";
import { useContext } from "react";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export function CustomizedSnackbarsLike(props) {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
    props.onClick();
    // const { data, setData } = useContext(Context);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <Stack spacing={2} sx={{ width: "50%" }}>
        <Button variant="outlined" onClick={handleClick}>
          <FavoriteBorderIcon />
        </Button>
        <Snackbar open={open} autoHideDuration={500} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
            Wow, you love this dog!
          </Alert>
        </Snackbar>
      </Stack>
    </>
  );
}

export default Snackbar;

import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export function CustomizedSnackbarsDislike(props) {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
    props.onClick();
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
          <ThumbDownOffAltIcon />
        </Button>
        <Snackbar open={open} autoHideDuration={500} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
            You dont like this dog?
          </Alert>
        </Snackbar>
      </Stack>
    </>
  );
}

export default Snackbar;

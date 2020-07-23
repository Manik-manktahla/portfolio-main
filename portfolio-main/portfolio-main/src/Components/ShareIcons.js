import React, { useState } from "react";

import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import IconButton from "@material-ui/core/IconButton";
import CallIcon from "@material-ui/icons/Call";
import EmailIcon from "@material-ui/icons/Email";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const ShareIcons = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {props.links.linkedIn && (
        <IconButton
          aria-label="add to favorites"
          className={props.className}
          href={props.links.linkedIn}
          target="_blank"
        >
          <LinkedInIcon className="icon__share" />
        </IconButton>
      )}
      {props.links.email && (
        <IconButton
          aria-label="share"
          className={props.className}
          onClick={() => {
            setOpen(true);
            navigator.clipboard.writeText(props.links.email);
          }}
        >
          <EmailIcon className="icon__share" />
        </IconButton>
      )}
      {props.links.instagram && (
        <IconButton
          aria-label="share"
          className={props.className}
          href={props.links.instagram}
          target="_blank"
        >
          <InstagramIcon className="icon__share" />
        </IconButton>
      )}
      {props.links.twitter && (
        <IconButton
          aria-label="share"
          className={props.className}
          href={props.links.twitter}
          target="_blank"
        >
          <TwitterIcon className="icon__share" />
        </IconButton>
      )}
      {props.links.fb && (
        <IconButton
          aria-label="share"
          className={props.className}
          href={props.links.fb}
          target="_blank"
        >
          <FacebookIcon className="icon__share" />
        </IconButton>
      )}
      {props.links.phone_number && (
        <IconButton
          aria-label="share"
          className={props.className}
          onClick={() => {
            setOpen(true);
            navigator.clipboard.writeText(props.links.phone_number);
          }}
        >
          <CallIcon className="icon__share" />
        </IconButton>
      )}

      <Snackbar open={open} autoHideDuration={6000} onClose={() => setOpen(false)}>
        <Alert onClose={() => setOpen(false)} severity="success">
         Copied
        </Alert>
      </Snackbar>
    </div>
  );
};

export default ShareIcons;

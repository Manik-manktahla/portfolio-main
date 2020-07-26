import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
// import Modal from "react-modal";
import Slider from "./Slider";
import Button from "./Button";
import Divider from "./Divider";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import TransitEnterexitIcon from "@material-ui/icons/TransitEnterexit";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import "./Modal.css";

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

// Modal.setAppElement('#root');

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: "45%",
    height: "80%",
    backgroundColor: theme.palette.background.paper,
    // border: 'unset',
    // boxShadow: theme.shadows[5],
    padding: 0,
    outline: "none",
    objectFit: "cover",
  },
}));

const images = [
  "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
  "https://images.unsplash.com/photo-1470341223622-1019832be824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2288&q=80",
  "https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80",
  "https://images.unsplash.com/photo-1534161308652-fdfcf10f62c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2174&q=80",
];

const SimpleModal = (props) => {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const Description = (props) => {
    return (
      <div className="modal__description">
        <h2>{props.name}</h2>
        <Divider className="description__divider" />
        <p>{props.description}</p>
        {props.live && (
          <a href={props.live} target="_blank">
            <Button className="description__button">
              <p className="description__p">View Live</p>
              <TransitEnterexitIcon className="external" />
            </Button>
          </a>
        )}
        <IconButton className="modal__close" onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </div>
    );
  };

  const handleOpen = () => {
    props.hoverDisable();
    setOpen(true);
  };

  const handleClose = () => {
    props.hoverDisable();
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <Slider slides={props.images} autoPlay={3} />
      <Divider className="modal__divider" />
      <Description
        name={props.name}
        description={props.description}
        live={props.live}
      />
    </div>
  );

  return (
    <div>
      <Button onClick={handleOpen}>LEARN MORE</Button>
      {/* <Modal
          isOpen={open}
          // onAfterOpen={afterOpenModal}
          onRequestClose={handleClose}
          style={customStyles}
          contentLabel="Example Modal"
          className="modal__main"
        >
 
        {body}
        </Modal> */}
      <Modal
        open={open}
        onClose={handleClose}
        className="modal__main"
        disableEnforceFocus={false}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 1500,
        }}
      >
        <Fade in={open}>{body}</Fade>
      </Modal>
    </div>
  );
};

export default SimpleModal;

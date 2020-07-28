import React from 'react';

import GetAppIcon from '@material-ui/icons/GetApp';
import IconButton from '@material-ui/core/IconButton'

import "./Download.css";

const Download = (props) => {
  return (
    <IconButton onClick={ () => window.open(require('../static/Resume_Manik.pdf'), '_none')} className="download">
      <GetAppIcon/>
      <p className="download__text">Resume</p>
    </IconButton>
  )
}

export default Download;
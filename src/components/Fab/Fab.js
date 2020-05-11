import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';

import "./Fab.css"
  
  export default function FloatingActionButtons() {
  
    return (
      <div className="add_item">
        <Fab color="primary" aria-label="add" id="add_button">
          <AddIcon />
        </Fab>
      </div>
    );
  }
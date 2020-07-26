import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from "axios"
import { v4 as uuidv4 } from 'uuid';

import "./Fab.css"
  
  export default function FloatingActionButtons() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const createplaylist = () => {
        var val = document.getElementById("name").value;
        console.log(val)

        const CID = JSON.parse(localStorage.getItem('email'));
        var playlst = {
            PID: uuidv4(),
            CID:CID,
            Title: val,
            creator: "Leon iden"
        }
        axios.post("https://0c67bf6eec81.ngrok.io/playlist/add", playlst)
        .then(res => console.log(res))
        setOpen(false);
        
        setTimeout(() => {
          window.location.reload();
        }, 1000);



    }
  
    return (
      <div className="add_item">
        <Fab color="primary" aria-label="add" id="add_button" onClick={handleClickOpen}>
          <AddIcon />
        </Fab>
        {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open form dialog
      </Button> */}
      <Dialog maxWidth="lg" fullWidth={true} open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Create a new Playlist</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Playlist name"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={createplaylist} color="primary">
            CREATE
          </Button>
        </DialogActions>
      </Dialog>
      </div>
    );
  }
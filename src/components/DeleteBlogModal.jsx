import React from "react";
import { useState, useEffect } from "react";
// import { StreamChat } from 'stream-chat';
import axios from "axios";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from "react-router-dom";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


export default function DeleteBlogModal(props) {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleDelete = () => {
    props.deleteBlog(props.blog.id);
    navigate("/");
  }
  return(
    <div>
       <Button sx={{ m: 5 }} variant="outlined" onClick={handleOpen}>Delete</Button>
       <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-title" variant="h6" component="h2">
            Are you sure you want to delete this post?
          </Typography>
          <Button sx={{ m: 5 }} variant="outlined" startIcon={<DeleteIcon />} onClick={handleDelete}>Delete</Button>
          <Button sx={{ m: 5 }} variant="outlined" onClick={handleClose}>Cancel</Button>
        </Box>
      </Modal>

    </div>
  );
}
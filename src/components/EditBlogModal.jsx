import React from "react";
import { useState, useEffect } from "react";
// import { StreamChat } from 'stream-chat';
import axios from "axios";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import InteractiveTag from "./InteractiveTag.jsx";


const style = {
  '& .MuiTextField-root': { m: 2},
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function EditBlogModal(props) {
  const [open, setOpen] = useState(false);
  const [tagsArr, setTagsArr] = useState(props.tags);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  console.log(tagsArr, "32");
  const handleSubmit = () => {
  }

  return(
    <div>
       <Button sx={{ m: 5 }} variant="outlined" onClick={handleOpen}>Edit</Button>
       <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="title"
        aria-describedby="description">
        <Box sx={style}>
        <TextField id="outlined-Title" fullWidth label="Edit you blog title: " value={props.blog.blogname} />
        <TextField id="outlined-Body" fullWidth multiline rows={10} label="Edit your blog text: " value={props.blog.body} />
        <Typography sx={{ m: 1 }} align="left" >Edit tags: </Typography>
        <div class="edit-existing-tags">{props.blog.tags.map((tag, index) => {
                    return (
                      <div key={index} class="interactive-tags"><InteractiveTag tag={tag} currentTags={props.blog.tags} tagged={true} setTagsArr={setTagsArr}/></div>
                    )
                  })}</div>
        <div class="edit-existing-tags">{props.tags.map((tag, index) => {
                    return (
                      <div key={index} class="interactive-tags"><InteractiveTag tag={tag} currentTags={props.blog.tags} tagged={false} setTagsArr={setTagsArr}/></div>
                    )
                  })}</div>
        <Button sx={{ m: 5 }} variant="outlined" onClick={handleSubmit}>Submit</Button>
        </Box>
      </Modal>

    </div>
  );

}

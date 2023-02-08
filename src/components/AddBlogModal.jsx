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
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import Form from 'react-bootstrap/Form';
import Divider from '@mui/material/Divider';
import config from './config_photo.js';


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

export default function AddBlogModal(props) {
  const [open, setOpen] = useState(false);
  const [tagsArr, setTagsArr] = useState([]);
  const [text, setText] = useState('');
  const [URL, setURL] = useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleAdd = () => {
    var tag = document.getElementById("outlined-addtag-new").value;
    if (props.tags.find(element => element.tagname === tag)) {
      alert("Tag already exist, please either look for it in the tag list or enter a new one!");
    } else {
      var obj = {id: "null", tagname: tag};
      tagsArr.push(obj);
      setTagsArr([...tagsArr]);
      setText('');
    }
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = () => {
    var blogname = document.getElementById("outlined-Title-new").value;
    var body = document.getElementById("outlined-Body-new").value;
    var tags = tagsArr;
    var created = new Date().toISOString();
    var views = 0;
    var photo = URL;
    var obj = {blogname, body, tags, created, views, photo};
    axios.post(`/blogdata`, obj)
      .then(() => {
        console.log("post successfully");
        axios.get('/blogdata')
          .then(response => {
            props.setBlogs(response.data);
            handleClose();
          })
      })
      .catch(err => {
        console.error(err);
      })
  }

  const createURL = (e) => {
    e.preventDefault();
    var files = document.getElementById('add-image-file').files;
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", `${config.cloudinary_preset}`);
    axios.post(`https://api.cloudinary.com/v1_1/${config.cloudinary_id}/image/upload`, formData)
      .then(response => {
        setURL(response.data.url)
      })
      .catch(err => {
        console.error(err);
      })
  }

  if (!props.tags) {
    return null;
  }
  return(
    <div>
       <AddIcon style={{"fontSize": "40px"}} onClick={handleOpen}/>
       <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="title"
        aria-describedby="description">
        <Box sx={style}>
        <TextField id="outlined-Title-new" fullWidth label="Edit you blog title: " />
        <TextField id="outlined-Body-new" fullWidth multiline rows={10} label="Edit your blog text: " />
        <Divider />
        <Typography sx={{ m: 1 }} align="left" >Edit tags: </Typography>
        <div class="edit-existing-tags">{tagsArr.map((tag, index) => {
                    return (
                      <div key={index} class="interactive-tags"><InteractiveTag tag={tag} currentTags={tagsArr} tagged={true} setTagsArr={setTagsArr}/></div>
                    )
                  })}</div>
        <div class="edit-existing-tags">{props.tags.map((tag, index) => {
                    return (
                      <div key={index} class="interactive-tags"><InteractiveTag tag={tag} currentTags={tagsArr} tagged={false} setTagsArr={setTagsArr}/></div>
                    )
                  })}</div>
        <Stack direction="row" spacing={0.5}>
          <TextField id="outlined-addtag-new" label="Add new tag " onChange={handleChange} value={text}/>
          <Button variant="contained" style={{"height": "25px", "marginTop": "30px"}} onClick={handleAdd}>Add</Button>
        </Stack>
        <Divider />
        <Stack direction="column" spacing={1}>
          <Form.Group>
            <Typography sx={{ m: 1 }} align="left" >{URL ? "Replace current photo: " : "Add a new photo: "} </Typography>
            <Form.Control id="add-image-file" type="file" onChange={createURL}/>
          </Form.Group>
        </Stack>
        <div id="submit-button-new"><Button sx={{ m: 5 }} variant="outlined" onClick={handleSubmit}>Submit</Button></div>

        </Box>
      </Modal>

    </div>
  );

}

import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import InteractiveTag from "./InteractiveTag.jsx";
import Stack from '@mui/material/Stack';
import Form from 'react-bootstrap/Form';
import Divider from '@mui/material/Divider';
import config from './config_photo.js';


const style = {
  '& .MuiTextField-root': { m: 2 },
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
  const [tagsArr, setTagsArr] = useState(props.blog.tags);
  const [text, setText] = useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleAdd = () => {
    var tag = document.getElementById("outlined-addtag").value;
    if (props.tags.find(element => element.tagname === tag)) {
      alert("Tag already exist, please either look for it in the tag list or enter a new one!");
    } else if (tag.length === 0) {
      alert("Tag name cannot be empty, please enter a valid name!")
    } else {
      var obj = { id: "null", tagname: tag };
      tagsArr.push(obj);
      setTagsArr([...tagsArr]);
      setText('');
    }
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    var blogname = document.getElementById("outlined-Title").value;
    var body = document.getElementById("outlined-Body").value;
    var tags = tagsArr;
    var files = document.getElementById('image-file').files;
    console.log(files);
    if (files.length === 0) {
      var obj = { blogname, body, tags };
      axios.post(`/blogdata/${props.blog.id}`, obj)
        .then(() => {
          console.log("post successfully");
          axios.get('/blogdata')
            .then(response => {
              props.setBlogs(response.data);
              handleClose();
              alert("You edit was successful!");
            })
        })
        .catch(err => {
          console.error(err);
        })
    } else {
      const formData = new FormData();
      formData.append("file", files[0]);
      formData.append("upload_preset", `${config.cloudinary_preset}`);
      axios.post(`https://api.cloudinary.com/v1_1/${config.cloudinary_id}/image/upload`, formData)
        .then(response => {
          var photo = response.data.url;
          var obj = { blogname, body, tags, photo };
          axios.post(`/blogdata/${props.blog.id}`, obj)
            .then(() => {
              console.log("post successfully");
              axios.get('/blogdata')
                .then(response => {
                  props.setBlogs(response.data);
                  handleClose();
                  alert("You edit was successful!");
                })
            })
        })
        .catch(err => {
          console.error(err);
        })

    }


  }


  return (
    <div>
      <Button sx={{ m: 5 }} variant="outlined" onClick={handleOpen}>Edit</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="title"
        aria-describedby="description">
        <Box sx={style}>
          <TextField id="outlined-Title" fullWidth label="Edit you blog title: " defaultValue={props.blog.blogname} />
          <TextField id="outlined-Body" fullWidth multiline rows={10} label="Edit your blog text: " defaultValue={props.blog.body} />
          <Divider />
          <Typography sx={{ m: 1 }} align="left" >Edit tags: </Typography>
          <div class="edit-existing-tags">{tagsArr.map((tag, index) => {
            return (
              <div key={index} class="interactive-tags"><InteractiveTag tag={tag} currentTags={tagsArr} tagged={true} setTagsArr={setTagsArr} /></div>
            )
          })}</div>
          <div class="edit-existing-tags">{props.tags.map((tag, index) => {
            return (
              <div key={index} class="interactive-tags"><InteractiveTag tag={tag} currentTags={tagsArr} tagged={false} setTagsArr={setTagsArr} /></div>
            )
          })}</div>
          <Stack direction="row" spacing={0.5}>
            <TextField id="outlined-addtag" label="Add new tag " value={text} onChange={handleChange} />
            <Button variant="contained" style={{ "height": "25px", "marginTop": "30px" }} onClick={handleAdd}>Add</Button>
          </Stack>
          <Divider />
          <Stack direction="column" spacing={1}>
            <Form.Group>
              <Typography sx={{ m: 1 }} align="left" >{props.blog.photo ? "Replace current photo: " : "Add a new photo: "} </Typography>
              <Form.Control id="image-file" type="file" />
            </Form.Group>
          </Stack>

          <div id="submit-button"><Button sx={{ m: 5 }} variant="outlined" onClick={handleSubmit}>Submit</Button></div>

        </Box>
      </Modal>

    </div>
  );

}

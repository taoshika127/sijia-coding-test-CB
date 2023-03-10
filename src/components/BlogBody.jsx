import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Typography from '@mui/material/Typography';
import Tag from "./Tag.jsx";
import EditBlogModal from "./EditBlogModal.jsx";
import DeleteBlogModal from "./DeleteBlogModal.jsx";


export default function BlogBody(props) {
  return(
    <>
      <div class="blogtitle">
        <Typography align="center" variant="h4" component="h5">{props.blog.blogname}</Typography>
        <h4 class="views-and-created" align="center" variant="h6" component="h6" style={{"color":"grey", "fontStyle": "italic"}}>{(props.blog.views || "0") + " views"}</h4>
        <div class="tags">{props.blog.tags.map((tag, index) => {
                    return (
                      <div key={index}><Tag tag={tag}/></div>
                    )
                  })}
        </div>
        {props.blog.photo ? <div class="full-size-photo-div"><div class="blog-photo-div"><img class="blog-photo" src={props.blog.photo} /></div></div> : null}
        <Typography sx={{ m: 5 }} align="left" variant="h6" component="h6">{props.blog.body}</Typography>
        <Typography class="views-and-created" align="center" variant="h6" component="h6" style={{"color":"grey"}}>{"Created on " + props.blog.created.slice(0, 10)}</Typography>
      </div>
      <div id="edit-delete-buttons">
        <EditBlogModal id={props.blog.id} blog={props.blog} editBlog={props.editBlog} tags={props.tags} setBlogs={props.setBlogs}/>
        <DeleteBlogModal id={props.blog.id} deleteBlog={props.deleteBlog} blog={props.blog}/>
      </div>

    </>

  );

}
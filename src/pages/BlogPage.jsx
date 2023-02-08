import React from "react";
import { useState, useEffect } from "react";
// import { StreamChat } from 'stream-chat';
import axios from "axios";
import BlogBody from "../components/BlogBody.jsx";
import NavigationBar from "../components/NavigationBar.jsx";
import {useParams} from 'react-router-dom';

export default function BlogPage(props) {
  let { id } = useParams();
  console.log(id);
  const [blog, setBlog] = useState(undefined);

  useEffect(() => {
    axios.get(`/blogdata/${id}`)
      .then(response => {
        setBlog(response.data);
      })
  }, [id])

  if(!blog) {
    return null;
  }
  return(
    <>
      <NavigationBar />
      <BlogBody blog={blog} deleteBlog={props.deleteBlog} editBlog={props.editBlog} tags={props.tags}/>
    </>
  );

}
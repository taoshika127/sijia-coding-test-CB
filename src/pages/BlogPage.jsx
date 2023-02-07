import React from "react";
import { useState, useEffect } from "react";
// import { StreamChat } from 'stream-chat';
import axios from "axios";
import BlogBody from "../components/BlogBody.jsx";
import NavigationBar from "../components/NavigationBar.jsx";
import {useParams} from 'react-router-dom';

export default function BlogPage(props) {
  let { id } = useParams();
  return(
    <>
      <NavigationBar />
      <BlogBody />
    </>
  );

}
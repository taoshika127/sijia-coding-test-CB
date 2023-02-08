import React from "react";
import { useState, useEffect } from "react";
// import { StreamChat } from 'stream-chat';
import axios from "axios";
import { Container, Navbar } from 'react-bootstrap';
import SearchBar from "./SearchBar.jsx";
import AddIcon from '@mui/icons-material/Add';
import AddBlogModal from "./AddBlogModal.jsx";

export default function NavigationBar(props) {
  console.log(props, "nva")

    return (
      <>
      <Navbar bg="primary" variant="dark" expand="lg" fixed="top">
        <Container id="navbar-container">
            <Navbar.Brand href="/" >Home</Navbar.Brand>
            <SearchBar />
            <AddBlogModal blogs={props.blogs} tags={props.tags} setBlogs={props.setBlogs}/>
            {/* <AddIcon style={{"fontSize": "40px"}}/> */}
        </Container>
      </Navbar>
      </>
    );
}
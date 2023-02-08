import React from "react";
import { useState, useEffect } from "react";
// import { StreamChat } from 'stream-chat';
import axios from "axios";
import { Container, Navbar } from 'react-bootstrap';
import SearchBar from "./SearchBar.jsx";
import AddIcon from '@mui/icons-material/Add';


export default function NavigationBar(props) {

    return (
      <>
      <Navbar bg="primary" variant="dark" expand="lg" fixed="top">
        <Container id="navbar-container">
            <Navbar.Brand href="/" >Home</Navbar.Brand>
            <SearchBar />
            <AddIcon style={{"fontSize": "40px"}}/>
        </Container>
      </Navbar>
      </>
    );
}
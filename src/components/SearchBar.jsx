import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import {FaSearch} from "react-icons/fa";
import { Autocomplete, Stack, TextField, Box, Button} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from "react-router-dom";


export default function SearchBar(props) {
  const navigate = useNavigate();
  const handleSearch = () => {
    var searchword = document.getElementById("search-textfield").value;
    navigate(`/search?keyword=${searchword}`)
  }

  return(
    <div class="searchbar">
      <TextField onKeyDown={handleSearch} label="Search" variant="outlined" id="search-textfield"/>
      <SearchIcon style={{"fontSize":"40px", "marginTop":"10px"}} onClick={handleSearch}/>
    </div>
  );

}
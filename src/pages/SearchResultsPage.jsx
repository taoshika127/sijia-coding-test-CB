import React from "react";
import { useState, useEffect } from "react";
// import { StreamChat } from 'stream-chat';
import axios from "axios";
import NavigationBar from "../components/NavigationBar.jsx";
import Sort from "../components/Sort.jsx";
import Filter from "../components/Filter.jsx";
import BlogList from "../components/BlogList.jsx";

export default function SearchResultsPage(props) {
  return(
    <>
      <NavigationBar />
      <div class="sort-and-filter">
        <Sort />
        <Filter />
      </div>
      <BlogList />
    </>
  );

}
import React from "react";
import { useState, useEffect } from "react";
// import { StreamChat } from 'stream-chat';
import axios from "axios";
import NavigationBar from "../components/NavigationBar.jsx";
import Sort from "../components/Sort.jsx";
import Filter from "../components/Filter.jsx";
import BlogList from "../components/BlogList.jsx";

export default function HomePage(props) {
  return(
    <>
      <div class="title">
        <h1>My Blog</h1>
        <h4>Hello, welcome to my blog! Here I will share my recipes with everyone, hope you enjoy!</h4>
      </div>
      <div class="sort-and-filter">
        <Sort sortBlogs={props.sortBlogs}/>
        <Filter filterBy={props.filterBy} tags={props.tags}/>
      </div>
      <BlogList blogs={props.blogs} tags={props.tags} filtered={props.filtered}/>
    </>
  );
}
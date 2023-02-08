import React from "react";
import { useState, useEffect } from "react";
// import { StreamChat } from 'stream-chat';
import axios from "axios";
import NavigationBar from "../components/NavigationBar.jsx";
import Sort from "../components/Sort.jsx";
import Filter from "../components/Filter.jsx";
import BlogList from "../components/BlogList.jsx";
import {useSearchParams} from "react-router-dom";


export default function SearchResultsPage(props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = [];
  searchParams.forEach((value, key) => {
    params.push([key, value]);
  });
  const keyword = params[0][1];

  useEffect(() => {
    if (keyword.length !== 0) {
      axios.get(`/searchblogs/${keyword}`)
      .then(response => {
        console.log(response.data);
        //setSearchResults(response.data);
        props.setBlogsBySearch(response.data);
      })
      .catch(err => {
        console.error(err);
      })
    }
  }, [keyword])

  return(
    <>
      <NavigationBar />
      <div class="sort-and-filter">
        <Sort sortBlogs={props.sortBlogs}/>
        <Filter filterBy={props.filterBy} tags={props.tags}/>
      </div>
      <BlogList blogs={props.blogs} tags={props.tags} filtered={props.filtered}/>
    </>
  );

}
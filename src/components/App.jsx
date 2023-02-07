import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createBrowserHistory } from "history";
export const appHistory = createBrowserHistory();
import HomePage from "../pages/HomePage.jsx";
import BlogPage from "../pages/BlogPage.jsx";
import SearchResultsPage from "../pages/SearchResultsPage.jsx";


export default function App(props) {
  const [render, setRender] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [tags, setTags] = useState([]);
  useEffect(() => {
    var promises = [axios.get("/blogdata"), axios.get("/tags")];
    Promise.all(promises)
      .then(resultArr => {
        setBlogs(resultArr[0].data);
        setTags(resultArr[1].data);
        setRender(true);
      })
      .catch(err => {
        console.error(err);
      })
  }, []);

  var sortBlogs = (sortBy) => {
    if (sortBy === "views") {
      var sortedBlogs = blogs.sort((a, b) => (b.views - a.views));
    } else if (sortBy === "newest") {
      var sortedBlogs = blogs.sort((a, b) => (new Date(b.created) - new Date(a.created)));
    } else if (sortBy === "oldest"){
      var sortedBlogs = blogs.sort((a, b) => (new Date(a.created) - new Date(b.created)));
    } else {
      var sortedBlogs = blogs.sort((a, b) => (a.id - b.id));
    }
    setBlogs([...sortedBlogs]);
  };

  var filterBy = (tagIds) => {
    console.log("huue", tagIds);
    var filtededBlogIds = [];
    tagIds.forEach(id => {
      var bloglist = tags[id].blogs;
      bloglist.forEach(blog => {
        var blogid = blog.id;
        if (!filtededBlogIds.includes(blogid)) {
          filtededBlogIds.push(blogid)
        }
      })
    });
    var copy = [...blogs];
    var filteredBlogs = filtededBlogIds.map(id => copy[id]);
    console.log(filtededBlogIds, filteredBlogs, "55", blogs[2])
    setBlogs(filteredBlogs);


  }

  if (!render) {
    return null;
  }
  return (<div>
    <Routes history={appHistory}>
      <Route path="/" element={<HomePage blogs={blogs} tags={tags} sortBlogs={sortBlogs} filterBy={filterBy}/>} />
      <Route path="/blog/:id" element={<BlogPage blogs={blogs} tags={tags}/>} />
      <Route path="/search" element={<SearchResultsPage blogs={blogs} tags={tags}/>}/>
    </Routes>
  </div>)
}

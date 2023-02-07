const {blogs, tags} = require("../db/data.js");

module.exports = {
  getAllBlogData: (req, res) => {
    res.status(200).send(blogs);
  },
  postNewBlogData: (req, res) => {
    var newBlog = req.body;
    newBlog.id = blogs.length;
    blogs.push(newBlog);
    var taglist = newBlog.tags;
    taglist.forEach(tag => {
      if (!tags.includes(tag)) {
        tags.push(tag);
      }
    });
    res.status(201).send("posted new blog~");
  },

  getBlogData: (req, res) => {
    var id = req.params.id;
    res.status(200).send(blogs[id]);
  },
  postBlogData: (req, res) => {
    var id = req.params.id;
    for (var key in req.body) {
      blogs[id][key] = req.body[key];
    };
    var taglist = blogs[id].tags;
    taglist.forEach(tag => {
      if (!tags.includes(tag)) {
        tags.push(tag);
      }
    })
    res.status(201).send("posted blog id " + id);
  },

  deleteBlogData: (req, res) => {
    var id = req.params.id;
    blogs[id].deleted = true;
  },

  getAllTags: (req, res) => {
    res.status(200).send(tags);
  },

  postTags: (req, res) => {
    var newTags = req.body.newTags;
    newTags.forEach(newTag => {
      if (!tags.includes(newTag)) {
        tags.push(newTag);
      }
    })
    res.status(201).send("new tags posted~")
  }
}
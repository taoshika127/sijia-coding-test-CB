const {blogs, tags} = require("../db/data.js");

module.exports = {
  getAllBlogData: (req, res) => {
    res.status(200).send(blogs);
  },

  searchBlogData: (req, res) => {
    var keyword = req.params.keyword.toLowerCase();
    var result = [];
    blogs.forEach(blog => {
      var wholeText = JSON.stringify(blog).toLowerCase();
      if (wholeText.includes(keyword)) {
        result.push(blog);
      }
    });
    res.status(200).send(result);
  },

  postNewBlogData: (req, res) => {
    //req.body={
//     "blogname":"baking sweet potato",
//     "created":"2023-02-09T15:13:22",
//     "tags":[
//         {"id": 1, "tagname": "slow"},
//         {"id": 4, "tagname": "vegan"},
//         {"id": "null", "tagname": "oven"}
//     ],
//     "body": "In quo hinc adolescens, velit appellantur nec te. Te populo persecuti est, est possim dissentias in. Feugiat posidonium mea no. At commodo verterem eum, nam amet graeco accommodare ex. Eu his laoreet accumsan, an sea ridens aliquam splendide.\n\nSolum sententiae his te, quo natum primis tritani ex, dicta doctus ad vix. Rebum iisque epicurei usu at. Mei sanctus ullamcorper an. Ex natum appetere pri, sea ex deleniti intellegat. Est ea doming legimus eloquentiam, ut sed assentior honestatis."
// }
    var newBlog = req.body;
    newBlog.id = blogs.length;
    var taglist = newBlog.tags;
    taglist.forEach(tagObj => {
      if (tagObj.id === "null") {
        tagObj.id = tags.length;
        var copy = Object.assign({}, tagObj)
        tags.push(copy); //create new tag in tags db if new
      }
      if (!tags[tagObj.id].blogs) {
        tags[tagObj.id].blogs = [];
      }
      tags[tagObj.id].blogs.push({id: newBlog.id, blogname: newBlog.blogname})
    });
    blogs.push(newBlog);
    res.status(201).send("posted new blog~");
  },

  getBlogData: (req, res) => {
    var id = req.params.id;
    res.status(200).send(blogs[id]);
  },

  postBlogData: (req, res) => {
    var blogid = Number(req.params.id);
    var taglist = req.body.tags;
    var oldTaglist = blogs[blogid].tags;
    taglist.forEach(tagObj => {
      if (tagObj.id === "null") {
        tagObj.id = tags.length;
        var copy = Object.assign({}, tagObj);
        tags.push(copy);
      } else {
        tagObj.id = Number(tagObj.id);
      }
      if (!tags[tagObj.id].blogs) {
        tags[tagObj.id].blogs = [];
      }
      if (!tags[tagObj.id].blogs.find(element => element.id === blogid)) {
        tags[tagObj.id].blogs.push({id: blogid, blogname: blogs[blogid].blogname})
      }
    });
    for (var i = 0; i < oldTaglist.length; i++) {
      if (!taglist.find(element =>  element.id === oldTaglist[i].id)) {
        var blogsToBeChanged = tags[i].blogs;
        for (var j = 0; j < blogsToBeChanged.length; j++) {
          if (blogsToBeChanged[j].id === blogid) {
            blogsToBeChanged.splice(j, 1)
          }
        }
      }
    }
    for (var key in req.body) {
      blogs[blogid][key] = req.body[key];
    };
    res.status(201).send("posted blog id " + blogid);
  },

  deleteBlogData: (req, res) => {
    var id = req.params.id;
    blogs[id].deleted = true;
    res.status(201).send("deleted blog id " + id);
  },

  getAllTags: (req, res) => {
    res.status(200).send(tags);
  }
}
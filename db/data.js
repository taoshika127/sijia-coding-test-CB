module.exports = {
  blogs: [
  {id: 0, blogname: "How to make the best beef stew", created: "2021-01-09T23:28:41", tags: [{id: 0, tagname: "beef"}, {id: 3, tagname: "meat"}, {id: 1, tagname: "slow"}], body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \n\nExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", views: 199},

  {id: 1, blogname: "15 minutes of easy meat sauce pasta", created: "2022-07-09T20:07:30", tags: [{id: 2, tagname: "fast"}, {id: 0, tagname: "beef"}, {id: 3, tagname: "meat"}], body: "Nibh graeci et vim. Saepe commodo quaeque in vix, pro nihil invenire adipiscing cu, at nec ceteros deleniti. Debitis salutatus at qui. Dicant nullam legere ei nec, in voluptua ocurreret quo, scripta aliquid quaerendum mel no.\n In quo hinc adolescens, velit appellantur nec te. Te populo persecuti est, est possim dissentias in. Feugiat posidonium mea no. At commodo verterem eum, nam amet graeco accommodare ex. Eu his laoreet accumsan, an sea ridens aliquam splendide.", views: 100012},

  {id: 2, blogname: "Avocado Toast - the best wake-up food", created: "2022-12-09T12:10:33", tags: [{id: 2, tagname: "fast"}, {id: 4, tagname: "vegan"}], body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\nNo laoreet aliquando cum, at forensibus ullamcorper consectetuer per. Cum dolore aliquam principes no. Minim vivendo referrentur in vel. Velit dolore cu mea, vix dicit populo essent ex.", views: 300}
],

tags: [
  {id: 0, tagname: "beef", blogs: [{id: 0, blogname: "How to make the best beef stew"}, {id: 1, blogname: "15 minutes of easy meat sauce pasta"}]},
  {id: 1, tagname: "slow", blogs: [{id: 0, blogname: "How to make the best beef stew"}]},
  {id: 2, tagname: "fast", blogs: [{id: 1, blogname: "15 minutes of easy meat sauce pasta"}, {id: 2, blogname: "Avocado Toast - the best wake-up food"}]},
  {id: 3, tagname: "meat", blogs: [{id: 0, blogname: "How to make the best beef stew"}, {id: 1, blogname: "15 minutes of easy meat sauce pasta"}]},
  {id: 4, tagname: "vegan", blogs: [{id: 2, blogname: "Avocado Toast - the best wake-up food"}]}
]
};
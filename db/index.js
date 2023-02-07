const {Client} = require('pg');

// const client = new Client({
//   host: '35.163.205.199',
//   user: 'ubuntu',
//   port: 5432,
//   password: 'ubuntu',
//   database: 'cts1988'
// });
const client = new Client({
  host: 'localhost',
  user: 'cts1988',
  port: 5432,
  password: '',
  database: 'blog'
});

module.exports = client;

// import React from "react";
// import { useState, useEffect } from "react";
// // import { StreamChat } from 'stream-chat';
// import axios from "axios";

// export default function Sort(props) {
//   return(
//     <div>
//     </div>
//   );

// }
import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Sort(props) {
  const [sortBy, setSortBy] = React.useState('');

  const handleChange = (event) => {
    console.log(event.target.value)
    setSortBy(event.target.value);
    if (event.target.value === "Most Views") {
      props.sortBlogs("views");
    } else if (event.target.value === "Newest to Oldest") {
      props.sortBlogs("newest");
    } else if (event.target.value === "Oldest to Newest") {
      props.sortBlogs("oldest");
    } else {
      props.sortBlogs("default");
    }
  };

  return (
    <Box sx={{ width: 150, margin: 2}}>
      <FormControl fullWidth>
        <InputLabel id="simple-select-label">Sort By</InputLabel>
        <Select
          labelId="simple-select-label"
          id="simple-select"
          value={sortBy}
          label="sortBy"
          onChange={handleChange}
        >
          <MenuItem value="Default">Default</MenuItem>
          <MenuItem value="Newest to Oldest">Newest to Oldest</MenuItem>
          <MenuItem value="Oldest to Newest">Oldest to Newest</MenuItem>
          <MenuItem value="Most Views">Most Views</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
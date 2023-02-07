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
    setSortBy(event.target.value);
  };

  return (
    <Box sx={{ width: 150, margin: 2}}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sortBy}
          label="sortBy"
          onChange={handleChange}
        >
          <MenuItem value="Newest to Oldest">Newest to Oldest</MenuItem>
          <MenuItem value="Oldest to Newest">Oldest to Newest</MenuItem>
          <MenuItem value="Most Views">Most Views</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
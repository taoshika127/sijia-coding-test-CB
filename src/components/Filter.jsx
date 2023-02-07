// import React from "react";
// import { useState, useEffect } from "react";
// // import { StreamChat } from 'stream-chat';
// import axios from "axios";

// export default function Filter(props) {
//   return(
//     <div>
//     </div>
//   );

// }

import React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import axios from "axios";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

//will pass tags from app.jsx as props, right now just for testing
const tags = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

export default function Filter(props) {
  const [tag, setTag] = React.useState([]);
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setTag(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl sx={{ width: 300, margin: 2 }}>
        <InputLabel id="multiple-checkbox-label">Filter by Tags</InputLabel>
        <Select
          labelId="multiple-checkbox-label"
          id="multiple-checkbox"
          multiple
          value={tag}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {tags.map((element) => (
            <MenuItem key={element} value={element}>
              <Checkbox checked={tag.indexOf(element) > -1} />
              <ListItemText primary={element} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
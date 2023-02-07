
import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { useNavigate } from "react-router-dom";
import Tag from "./Tag.jsx";

export default function BlogList(props) {
  const [selectedIndex, setSelectedIndex] = React.useState(undefined);
  console.log(props.filtered, "14141")
  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <List component="nav" aria-label="main mailbox folders">
        {props.blogs.map(blog => {
          if (!blog.deleted && (props.filtered.length === 0 || (props.filtered.length > 0 && props.filtered.includes(blog.id)))) {
            return (
              <div key={blog.id} >
                <Divider />
                <div class="bloglistentry">
                  <ListItemButton id={blog.id} to={`/blog/${blog.id}`}>
                    <ListItemText primary={blog.blogname} />
                    <ListItemText primary={"Created on " + blog.created.slice(0, 10) + " | " + blog.views + " views"} style={{"color": "lightgray", "fontStyle": "italic", "textAlign": "right", "marginTop": "10px"}}/>
                  </ListItemButton>
                  <div class="tags">{blog.tags.map((tag, index) => {
                    return (
                      <div key={index}><Tag tag={tag}/></div>
                    )
                  })}
                  </div>

                </div>
              </div>
            )
          }
        })}
        <Divider />
      </List>
    </Box>
  );
}
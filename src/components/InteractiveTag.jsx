import React from "react";
import { useState, useEffect } from "react";
// import { StreamChat } from 'stream-chat';
import axios from "axios";
import Chip from '@mui/material/Chip';
import colors from "./colors.js";
import String from "./helperFunction.js";
import AddIcon from '@mui/icons-material/Add';

// String.prototype.hashCode = function() {
//   var hash = 0,
//     i, chr;
//   if (this.length === 0) return hash;
//   for (i = 0; i < this.length; i++) {
//     chr = this.charCodeAt(i);
//     hash = ((hash << 5) - hash) + chr;
//     hash |= 0; // Convert to 32bit integer
//   }
//   return hash;
// };

const selectColorForString = (str) => {
  var hashed = str.hashCode();
  return colors[hashed % 17];
}

export default function InteractiveTag(props) {
  // const [selectedTags, setSelectedTags] = useState(props.currentTags);
  const handleDelete = () => {
    var selectedTags = props.currentTags;
    for (var i = 0; i < selectedTags.length; i++) {
      if (selectedTags[i].tagname === props.tag.tagname) {
        selectedTags.splice(i, 1);
      }
    }
    props.setTagsArr([...selectedTags]);
  };

  const handleAdd = () => {
    var obj = Object.assign({}, props.tag);
    delete obj["blogs"];
    props.currentTags.push(obj);
    props.setTagsArr([...props.currentTags]);
  };

  if (props.tagged) {
    return <div class="chip">
      <Chip sx={{ m: 0.5 }} label={props.tag.tagname} value={props.tag.id} onDelete={handleDelete} style={{"backgroundColor":selectColorForString(props.tag.tagname)}}/>
    </div>
  } else if (!props.currentTags.find(element => element.id === props.tag.id)) {
    return(
      <div class="chip">
        <Chip sx={{ m: 0.5 }} icon={<AddIcon />} label={props.tag.tagname} variant="outlined" onClick={handleAdd}/>
      </div>
    );
  }

}
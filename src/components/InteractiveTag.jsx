import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Chip from '@mui/material/Chip';
import colors from "./colors.js";
import String from "./helperFunction.js";
import AddIcon from '@mui/icons-material/Add';


const selectColorForString = (str) => {
  var hashed = str.hashCode();
  return colors[hashed % 17];
}

export default function InteractiveTag(props) {
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
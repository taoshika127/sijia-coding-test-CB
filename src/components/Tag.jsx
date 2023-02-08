import React from "react";
import { useState, useEffect } from "react";
// import { StreamChat } from 'stream-chat';
import axios from "axios";
import Chip from '@mui/material/Chip';
import colors from "./colors.js";
import String from "./helperFunction.js";

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

export default function Tag(props) {
  return(
    <div class="chip">
      <Chip label={props.tag.tagname} style={{"backgroundColor":selectColorForString(props.tag.tagname)}}/>
    </div>
  );

}
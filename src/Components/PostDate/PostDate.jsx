import React, { useEffect, useRef } from "react";

const PostDate = (props) => {
  let date = new Date().toLocaleString();
  console.log(date);
  return date;
};

export default PostDate;

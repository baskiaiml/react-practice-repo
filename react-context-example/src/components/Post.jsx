import React from "react";
import Comment from "./Comment";
import UserInfoContext from "../context/UserInfoContext";
import { useContext } from "react";
export default function Post() {
      
      const { username, isAdmin } = useContext(UserInfoContext);
  return (
    <div>
        {isAdmin && <button> Delete </button>}
      <h1>Example Post Title </h1>
      <p>This is an example post content</p>
      <Comment></Comment>
    </div>
  );
}

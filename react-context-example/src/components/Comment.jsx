import React from "react";
import { useContext } from "react";
import UserInfoContext from "../context/UserInfoContext";
export default function Comment() {
  const { username, isAdmin } = useContext(UserInfoContext);
  return (
    <div>
      <p>Logged In as {username}</p>
      {isAdmin && <button>Edit Comment</button>}
    </div>
  );
}

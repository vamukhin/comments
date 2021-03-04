import React from "react";
import { CommentContainer } from "./components/comments-container";
import { comments } from "./data";

function App() {
  return <CommentContainer data={comments} />;
}

export default App;

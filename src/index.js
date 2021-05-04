import React from "react";
import ReactDom from "react-dom";

import BookList from "./TutorialPages/BookList/BookList";

function Index() {
  return (
    <div>
      <BookList />
    </div>
  );
}

ReactDom.render(<Index />, document.getElementById("root"));

import React from "react";
import Login from "./Login";
import MyPage from "./MyPage";
import Article from "./Article";
import Route from "./Route";
import Signup from "./Signup";
import Top from "./Top";

import { far } from "@fortawesome/free-regular-svg-icons";
import { faEdit, faHeart, faComment, faUser, faSearch } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(far, faEdit, faHeart, faComment, faUser, faSearch);

class App extends React.Component {
  render() {
    return (
      <div>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/users/me">
          <MyPage />
        </Route>
        <Route path="/articles">
          <Article />
        </Route>
        <Route path="/top">
          <Top/>
        </Route>
      </div>
    );
  }
}

export default App;

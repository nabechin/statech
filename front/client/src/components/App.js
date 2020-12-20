import React from "react";
import Login from "./Login";
import MyPage from "./MyPage";
import Article from "./Article";
import Route from "./Route";
import Signup from "./Signup";

import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faEdit);

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
      </div>
    );
  }
}

export default App;

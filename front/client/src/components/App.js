import React from "react";
import Login from "./Login";
import MyPage from "./MyPage";
import Route from "./Route";
import Signup from "./Signup";

class App extends React.Component {
  getLinks() {
    const links = [
      { linkName: "Sign Up", href: "/signup" },
      { linkName: "Log In", href: "/login" },
    ];
    return links;
  }
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
      </div>
    );
  }
}

export default App;

import React from "react";
import Button from "@material-ui/core/Button";
import Form from "./Form";
import Link from "./Link";
import Header from "./Header";
import "./Signup.css";

class Signup extends React.Component {
  getFields() {
    const fields = [
      { labelName: "Email address", fieldName: "email" },
      { labelName: "Name", fieldName: "name" },
      { labelName: "Password", fieldName: "password" },
      { labelName: "Confirm Password", fieldName: "comfirm_password" },
    ];
    return fields;
  }
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
        <Header>
          <Link links={this.getLinks()} />
        </Header>
        <div className="d-flex justify-content-center">
          <div className="card">
            <div className="form-box">
              <h1>Sign Up</h1>
              <Form fields={this.getFields()}></Form>
              <Button
                variant="contained"
                style={{
                  background: "#262626",
                  color: "white",
                  borderRadius: "16px",
                }}
              >
                Signup
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;

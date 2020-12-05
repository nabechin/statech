import React from "react";
import { connect } from "react-redux";
import { copyArticle } from "../actions";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Header from "./Header";
import Link from "./Link";
import Memu from "./Memu";
import Paper from "@material-ui/core/Paper";
import TextField from "./TextField";
import Textarea from "./Textarea";

class Post extends React.Component {
  onTextareaChange = (text) => {
    this.props.copyArticle(text);
  };
  renderArticle = () => {
    return this.props.article.split("\n").map((m, i) => {
      return (
        <div key={i}>
          {m}
          <br />
        </div>
      );
    });
  };
  render() {
    return (
      <div>
        <Header>
          <Memu />
          <Link links={[{ linkName: "Log Out", href: "/logout" }]} />
        </Header>
        <div className="container">
          <Paper>
            <Grid
              container
              justify="space-between"
              style={{ height: "160px", padding: "10px" }}
              direction="row"
            >
              <Grid item xs="12" className="mb-2">
                Title:
                <TextField fieldName="title"></TextField>
              </Grid>
              <Grid item xs="8">
                Tags:
                <TextField fieldName="tags"></TextField>
              </Grid>
              <Grid item xs="4">
                <Button
                  variant="contained"
                  className="float-right"
                  style={{
                    background: "#262626",
                    color: "white",
                    borderRadius: "16px",
                    outline: "none",
                    margin: "25px",
                  }}
                >
                  Post
                </Button>
              </Grid>
            </Grid>
            <Grid container style={{ height: "500px" }}>
              <Grid item xs="6">
                <div
                  className="border-right border-top"
                  style={{ height: "100%" }}
                >
                  <Textarea onTextareaChange={this.onTextareaChange} />
                </div>
              </Grid>
              <Grid item xs="6">
                <div
                  className="border-left border-top"
                  style={{ height: "100%" }}
                >
                  <div style={{ height: "100%" }}>{this.renderArticle()}</div>
                </div>
              </Grid>
            </Grid>
          </Paper>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { article: state.article };
};
export default connect(mapStateToProps, { copyArticle })(Post);

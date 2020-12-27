import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CustomizedTab from "./CustomizedTab";
import CustomizedTable from "./CustomizedTable";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Header from "./Header";
import LanguageBar from "./LanguageBar";
import Link from "./Link";
import Memu from "./Memu";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

class MyPage extends React.Component {
  // getLinks() {
  //   const links = [{ linkName: "Log Out", href: "/login" }];
  //   return links;
  // }
  render() {
    return (
      <div>
        <Header>
          <Memu />
          {/* <Link links={this.getLinks()} /> */}
        </Header>
        <div style={{ padding: "0 70px" }}>
          <Grid container spacing={2} className="mt-2" justify="center">
            <Grid item xs={10} md={4}>
              <Card style={{ maxHeight: "500px" }}>
                <CardContent
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    height: "100px",
                  }}
                >
                  <Avatar>Y</Avatar>
                </CardContent>
                <Divider variant="middle" />
                <CardContent style={{ height: "70%" }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Yuma Watanabe
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    I have had a career for engineer about year and a few month
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={10} md={8} style={{ height: "700px" }}>
              <Grid container>
                <Grid item xs>
                  <Paper style={{ padding: "2px" }}>
                    <Grid
                      container
                      spacing={2}
                      alignItems="stretch"
                      style={{ padding: "3px" }}
                      direction="column"
                    >
                      <Grid item xs={12}>
                        <LanguageBar language="Python" />
                      </Grid>
                      <Grid item xs={11}>
                        <LanguageBar language="Java" />
                      </Grid>
                      <Grid item item xs={10}>
                        <LanguageBar language="JavaScript" />
                      </Grid>
                      <Grid item xs={9}>
                        <LanguageBar language="AWS" />
                      </Grid>
                      <Grid item xs={8}>
                        <LanguageBar language="MySQL" />
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
              </Grid>
              <Grid container className="mt-4">
                <Grid item xs={12}>
                  <Paper>
                    <CustomizedTab
                      tabNames={["Article", "Question", "Answer", "LGTM"]}
                    />
                    <CustomizedTable />
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default MyPage;

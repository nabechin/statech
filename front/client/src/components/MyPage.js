import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Header from "./Header";
import Link from "./Link";
import Memu from "./Memu";
import Paper from "@material-ui/core/Paper";
import ScopedCssBaseline from "@material-ui/core/ScopedCssBaseline";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/styles";

const AntTabs = withStyles({
  root: {
    borderBottom: "1px solid #e8e8e8",
  },
  indicator: {
    backgroundColor: "#000000",
  },
})(Tabs);

function createData(title, lgtm) {
  return { title, lgtm };
}

const rows = [
  createData("best practice for handling docker file", 159),
  createData("this is something every engineer should know", 237),
  createData("5 best book should software engineer read", 262),
  createData("how enginner be productive", 305),
  createData("this is the way to be pythonista", 356),
];

const AntTab = withStyles((theme) => ({
  root: {
    textTransform: "none",
    minWidth: 72,
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
      color: "#000000",
      opacity: 1,
    },
    "&$selected": {
      color: "#000000",
    },
    "&:focus": {
      color: "#000000",
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);

class MyPage extends React.Component {
  state = { tabValue: 0 };
  onHandleChange = (event, newValue) => {
    this.setState({ tabValue: newValue });
  };
  getLinks() {
    const links = [{ linkName: "Log Out", href: "/login" }];
    return links;
  }
  render() {
    return (
      <div>
        <Header>
          <Memu />
          <Link links={this.getLinks()} />
        </Header>
        <div style={{ padding: "0 70px" }}>
          <Grid container spacing={2} className="mt-2" justify="center">
            <Grid item xs={8} md={4}>
              <Card style={{ maxHeight: "500px" }}>
                <CardContent
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
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
            <Grid item xs={7} style={{ height: "700px" }}>
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
                        <ScopedCssBaseline>
                          <Grid container>
                            <Grid item xs={6}>
                              <Button
                                className="m-1"
                                style={{
                                  background: "#e6f0ff",
                                  textTransform: "none",
                                }}
                              >
                                Python
                              </Button>
                            </Grid>
                            <Grid item xs={6}>
                              <div className="d-flex flex-row-reverse">
                                <div className="p-1 m-2">25%</div>
                                <div className="p-1 m-2">10Posts</div>
                              </div>
                            </Grid>
                          </Grid>
                        </ScopedCssBaseline>
                      </Grid>
                      <Grid item xs={11}>
                        <ScopedCssBaseline>
                          <Grid container>
                            <Grid item xs={6}>
                              <Button
                                className="m-1"
                                style={{
                                  background: "#e6f0ff",
                                  textTransform: "none",
                                }}
                              >
                                javaScript
                              </Button>
                            </Grid>
                            <Grid item xs={6}>
                              <div className="d-flex flex-row-reverse">
                                <div className="p-1 m-2">25%</div>
                                <div className="p-1 m-2">10Posts</div>
                              </div>
                            </Grid>
                          </Grid>
                        </ScopedCssBaseline>
                      </Grid>
                      <Grid item item xs={10}>
                        <ScopedCssBaseline>
                          <Grid container>
                            <Grid item xs={6}>
                              <Button
                                className="m-1"
                                style={{
                                  background: "#e6f0ff",
                                  textTransform: "none",
                                }}
                              >
                                AWS
                              </Button>
                            </Grid>
                            <Grid item xs={6}>
                              <div className="d-flex flex-row-reverse">
                                <div className="p-1 m-2">25%</div>
                                <div className="p-1 m-2">10Posts</div>
                              </div>
                            </Grid>
                          </Grid>
                        </ScopedCssBaseline>
                      </Grid>
                      <Grid item xs={9}>
                        <ScopedCssBaseline>
                          <Grid container>
                            <Grid item xs={6}>
                              <Button
                                className="m-1"
                                style={{
                                  background: "#e6f0ff",
                                  textTransform: "none",
                                }}
                              >
                                React
                              </Button>
                            </Grid>
                            <Grid item xs={6}>
                              <div className="d-flex flex-row-reverse">
                                <div className="p-1 m-2">25%</div>
                                <div className="p-1 m-2">10Posts</div>
                              </div>
                            </Grid>
                          </Grid>
                        </ScopedCssBaseline>
                      </Grid>
                      <Grid item xs={8}>
                        <ScopedCssBaseline>
                          <Grid container>
                            <Grid item xs={6} sm={12} md={6}>
                              <Button
                                className="m-1"
                                style={{
                                  background: "#e6f0ff",
                                  textTransform: "none",
                                }}
                              >
                                MySQL
                              </Button>
                            </Grid>
                            <Grid item xs={6} sm={12} md={6}>
                              <div className="d-flex flex-row-reverse">
                                <div className="p-1 m-2">25%</div>
                                <div className="p-1 m-2">10Posts</div>
                              </div>
                            </Grid>
                          </Grid>
                        </ScopedCssBaseline>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
              </Grid>
              <Grid container className="mt-4">
                <Grid item xs={12}>
                  <Paper square>
                    <AntTabs
                      value={this.state.tabValue}
                      onChange={this.onHandleChange}
                      aria-label="ant example"
                    >
                      <AntTab label="Article" style={{ outline: "0" }} />
                      <AntTab label="Question" style={{ outline: "0" }} />
                      <AntTab label="Answer" style={{ outline: "0" }} />
                      <AntTab label="LGTM" style={{ outline: "0" }} />
                    </AntTabs>
                  </Paper>
                  <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                      <TableBody>
                        {rows.map((row) => (
                          <TableRow key={row.title}>
                            <TableCell component="th" scope="row">
                              {row.title}
                            </TableCell>
                            <TableCell align="right">
                              LGTM: {row.lgtm}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
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

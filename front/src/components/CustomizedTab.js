import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { withStyles } from "@material-ui/styles";
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

const AntTabs = withStyles({
  root: {
    borderBottom: "1px solid #e8e8e8",
  },
  indicator: {
    backgroundColor: "#000000",
  },
})(Tabs);

class CustomizedTab extends React.Component {
  state = { tabValue: 0 };
  onHandleChange = (event, newValue) => {
    this.setState({ tabValue: newValue });
  };
  renderTab = () => {
    return this.props.tabNames.map((tabName) => {
      return <AntTab label={tabName} style={{ outline: "0" }} />;
    });
  };
  render() {
    return (
      <AntTabs value={this.state.tabValue} onChange={this.onHandleChange}>
        {this.renderTab()}
      </AntTabs>
    );
  }
}

export default CustomizedTab;

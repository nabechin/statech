import React from "react";

class Route extends React.Component {
  state = { currentPath: window.location.pathname };
  onLocationChange = () => {
    this.setState({ currentPath: window.location.pathname });
  };
  componentDidMount() {
    window.addEventListener("popstate", this.onLocationChange);
  }
  componentWillUnmount() {
    window.removeEventListener("popstate", this.onLocationChange);
  }
  render() {
    return this.state.currentPath === this.props.path
      ? this.props.children
      : null;
  }
}

export default Route;

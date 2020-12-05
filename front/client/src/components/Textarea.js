import React from "react";

class Textarea extends React.Component {
  onTextareaChange = (e) => {
    this.props.onTextareaChange(e.target.value);
  };
  render() {
    return (
      <React.Fragment>
        <textarea
          onChange={this.onTextareaChange}
          style={{
            resize: "none",
            width: "100%",
            border: "none",
            height: "100%",
            outline: "none",
          }}
        ></textarea>
      </React.Fragment>
    );
  }
}

export default Textarea;

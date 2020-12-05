import React from "react";

const TextField = ({ labelName, fieldName }) => {
  return (
    <React.Fragment>
      <label className="form-label">{labelName}</label>
      <input type={fieldName} className="form-control" />
    </React.Fragment>
  );
};

export default TextField;

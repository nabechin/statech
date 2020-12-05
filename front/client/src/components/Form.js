import React from "react";
import TextField from "./TextField";

const Form = ({ fields }) => {
  const formFields = fields.map(({ labelName, fieldName }) => {
    return (
      <form key={fieldName}>
        <div className="mb-3">
          <TextField labelName={labelName} fieldName={fieldName}></TextField>
        </div>
      </form>
    );
  });
  return <div>{formFields}</div>;
};
export default Form;

import React from "react";

const Form = ({ fields }) => {
  const formFields = fields.map(({ labelName, fieldName }) => {
    return (
      <form key={fieldName}>
        <div className="mb-3">
          <label className="form-label">{labelName}</label>
          <input type={fieldName} className="form-control" />
        </div>
      </form>
    );
  });
  return <div>{formFields}</div>;
};
export default Form;

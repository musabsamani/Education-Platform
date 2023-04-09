import React from "react";

const Textarea = ({ name, label, onChange, value = "" }) => {

  return (
    <div className="col">
      <label htmlFor={name} className="form-label">{label}</label>
      <textarea name={name} onChange={onChange} value={value} id={name} className="form-control" cols="25" rows="5"></textarea>
    </div>
  );

};
export default Textarea;

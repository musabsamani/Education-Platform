import React from "react";

const Input = ({ type, name, label, value = "", onChange, args }) => {
  if (type === "hidden") {
    return <input name={name} onChange={onChange} value={value} className="form-control" type={type} id={name} {...args} />;
  } else {
    return (
      <div className="col">
        {label && <label htmlFor={name} className="form-label">{label}</label>}
        {
          type === "file" ?
            <input name={name} type={type} className="form-control" {...args} />
            :
            <input name={name} type={type} onChange={onChange} value={value} className="form-control" {...args} />
        }
      </div>
    );
  }
};
export default Input;

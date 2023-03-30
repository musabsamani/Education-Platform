import React from "react"
const Select = ({ name, onChange, resourceArray, resourceProperty, value = "" }) => {

    return (
        <div className="col">
            <label htmlFor={name} className="form-label">{name.charAt(0).toUpperCase() + name.slice(1)}</label>
            {
                resourceArray.length > 0 ? (
                    <select onChange={onChange} value={value} name={name} className=" ml-3 mt-3 form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                        {resourceArray.map((element) => (
                            < option key={Math.random()} value={element._id} >
                                {element[resourceProperty]}
                            </option>
                        ))}
                    </select>
                ) : (
                    <select disabled className=" ml-3 mt-3 form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                        <option>{name.charAt(0).toUpperCase() + name.slice(1)}s Database is Empty</option>
                    </select>
                )
            }
        </div >
    );

}
export default Select;
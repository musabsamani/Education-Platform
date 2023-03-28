import React from "react"
const Select = ({ name, onChange, resourceArray, resoure, resourceProperty, value = "" }) => {

    return (
        <div className="col">
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
                        <option>{resoure.charAt(0).toUpperCase() + resoure.slice(1)}s Database is Empty</option>
                    </select>
                )
            }
        </div >
    );

}
export default Select;
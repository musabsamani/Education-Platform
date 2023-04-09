import React from "react"
const Select = ({ name = "", onChange, resourceArray, resourceProperty, value = "" }) => {
    return (
        <>
            {
                name
                &&
                <div className="col">
                    <label htmlFor={name} className="form-label">
                        {
                            name.split(" ")[0] === "hidden"
                                ?
                                (s => s.charAt(0).toUpperCase() + s.slice(1))(name.split(" ")[1])
                                :
                                name.charAt(0).toUpperCase() + name.slice(1)
                        }
                    </label>
                    {name.split(" ")[0] === "hidden" ? name = "" : ""}
                    {
                        resourceArray.length > 0 ? (
                            <select onChange={onChange} value={value} name={name} className=" ml-3 mt-3 form-select form-select-md mb-3" aria-label=".form-select-lg example">
                                {resourceArray.map((element) => (
                                    < option key={Math.random()} value={element._id} label={element[resourceProperty]} />
                                ))}
                            </select>
                        ) : (
                            <select disabled className=" ml-3 mt-3 form-select form-select-md mb-3" aria-label=".form-select-lg example">
                                <option>{name.charAt(0).toUpperCase() + name.slice(1)}s Database is Empty</option>
                            </select>
                        )
                    }
                </div >
            }
        </>
    );

}
export default Select;
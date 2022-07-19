import React from "react";

interface DropdownInterface {
    label: string
    name: string
    data: Array<{value: string, text: string}>
}

const Dropdown: React.FC<DropdownInterface> = ({ name, label, data }) => {
    return (
        <div className="flex flex-col space-y-2">
            <label htmlFor={name} className="font-heebo text-blue font-sm font-light">{label}</label>

            <div className="dropdown">
                <select name={name} id={name} defaultValue="" className="w-full py-2 px-3 font-heebo border border-[#d7d7d7] rounded-md font-sm focus:outline-none focus:border-2 focus:border-blue appearance-none">
                    <option value="" disabled>Select one of our services</option>
                    {data.map(item => (
                        <option key={item.value} value={item.value}>{item.text}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default Dropdown;
import React from "react";

interface InputInterface {
    type: string
    label: string
    name: string
}

const Input: React.FC<InputInterface> = ({ type, name, label }) => {
    return (
        <div className="flex flex-col space-y-2">
            <label htmlFor={name} className="font-heebo text-blue font-sm font-light">{label}</label>

            <input type={type} name={name} id={name} className="w-full py-2 px-3 font-heebo border border-[#d7d7d7] rounded-md font-sm focus:outline-none focus:border-2 focus:border-blue" />
        </div>
    )
}

export default Input;
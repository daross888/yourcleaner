import React from "react";

interface TextareaInterface {
    label: string
    name: string
}

const Textarea: React.FC<TextareaInterface> = ({ name, label }) => {
    return (
        <div className="flex flex-col space-y-2">
            <label htmlFor={name} className="font-heebo text-blue font-sm font-light">{label}</label>

            <textarea name={name} id={name} className="w-full py-2 px-3 font-heebo border border-[#d7d7d7] rounded-md font-sm focus:outline-none focus:border-2 focus:border-blue resize-none" rows={8} />
        </div>
    )
}

export default Textarea;
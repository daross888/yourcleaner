import Link from "next/link";
import React from "react";

interface ServiceInterface {
    icon: any
    title: string
    description: string
    button: string
}

const Service: React.FC<ServiceInterface> = ({ icon, title, description, button }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md flex flex-col space-y-5">
            {icon}

            <h3 className="font-medium font-heebo text-lg text-grey text-center">{title}</h3>

            <p className="font-normal font-heebo text-sm text-light">{ description }</p>

            <Link href="/"><p className="w-full border-2 border-green text-green font-normal font-heebo text-lg text-center rounded-md py-2 hover:bg-green hover:text-white transition-all duration-150 cursor-pointer">{button}</p></Link>
        </div>
    );
}

export default Service;
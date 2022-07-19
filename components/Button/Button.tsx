import Link from "next/link";
import React from "react";

interface ButtonInterface {
    type: "button" | "link"
    color: "primary" | "secondary" | "white"
    className?: string
    children: React.ReactNode
    onClick?: () => void
    href?: string
}

const Button: React.FC<ButtonInterface> = ({ type, color, className, children, onClick, href }) => {

    let bgColor = 'bg-blue';
    let textColor = 'text-white';

    if(color == 'secondary') {
        bgColor = 'bg-green';
    }

    if(color == 'white') {
        bgColor = 'bg-white';
        textColor = 'text-blue'
    }

    const classString = `${className} py-2 px-6 w-full flex flex-row justify-center items-center rounded-lg font-heebo font-normal text-lg cursor-pointer ${bgColor} ${textColor} transition-all duration-150 hover:scale-95 hover:drop-shadow-md`;

    if(type == 'button') {
        return <button onClick={onClick} className={classString}>{children}</button>
    }

    if(type == 'link') {
        return <Link href={href || ""}><a className={classString}>{children}</a></Link>
    }

    return null;
}

export default Button;
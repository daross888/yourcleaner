import Link from "next/link";
import React from "react";
import Button from "../Button/Button";
import Logo from "./Logo";
import PreHeader from "./PreHeader";

const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            <PreHeader />

            <nav className="bg-white py-3 font-medium shadow-md px-2 md:px-0">
                <div className="flex flex-row justify-between items-center container mx-auto">
                    <div className="flex md:hidden w-1/5">
                        Mobile
                    </div>

                    <Logo />
                    
                    <div className="flex flex-row items-center justify-end space-x-4 lg:space-x-10 w-1/3 md:w-3/4">
                        <ul className="hidden md:flex flex-row space-x-4 lg:space-x-6 font-normal text-sm lg:text-base">
                            <li className="active">
                                <Link href="/">Home</Link>
                            </li>
                            <li>
                                <Link href="/">About Us</Link>
                            </li>
                            <li>
                                <Link href="/">Services</Link>
                            </li>
                            <li>
                                <Link href="/">Our Work</Link>
                            </li>
                            <li>
                                <Link href="/">Contact Us</Link>
                            </li>
                        </ul>

                        <Button type={"link"} href="/contact-us" color="secondary" className="max-w-[150px] text-sm px-4 lg:text-lg xl:max-w-[200px]">FREE Quote</Button>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
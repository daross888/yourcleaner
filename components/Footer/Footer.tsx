import Link from "next/link";
import React from "react";
import { BASE_URL, EMAIL, FACEBOOK, INSTAGRAM, MOBILE, MOBILE_HREF, PHONE, PHONE_HREF, TIKTOK } from "../../utils/Common";

const Footer = () => {
    return (
        <footer className="mt-10 flex flex-col">
            <div className="bg-blue py-4">
                <div className="container mx-auto px-4 md:px-0">
                    <div className="flex flex-col md:flex-row justify-between space-y-10 md:space-y-0 md:space-x-14">
                        <div className="w-full md:w-1/4 md:border-r text-center md:text-left border-r-white">
                            <Link href={BASE_URL}>
                                <a>
                                    <img src="/images/yourcleaner-logo-white.svg" alt="Your Cleaner - Professional Cleaning Services Bournemouth" className="cursor-pointer object-contain mx-auto md:ml-0" />
                                </a>
                            </Link>
                        </div>
                        <div className="flex flex-col md:flex-row justify-center md:justify-between w-full md:w-2/5">
                            <ul className="flex flex-col space-y-3 text-center md:text-left">
                                <li>
                                    <Link href={BASE_URL}><a className="cursor-pointer font-semibold font-kodchasan text-white">Home</a></Link>
                                </li>
                                <li>
                                    <Link href="/"><a className="cursor-pointer font-thin font-kodchasan text-white">About Us</a></Link>
                                </li>
                                <li>
                                    <Link href="/"><a className="cursor-pointer font-normal font-kodchasan text-white">Services</a></Link>
                                </li>
                                <li>
                                    <Link href="/"><a className="cursor-pointer font-normal font-kodchasan text-white">Our Work</a></Link>
                                </li>
                                <li>
                                    <Link href="/"><a className="cursor-pointer font-normal font-kodchasan text-white">Contact Us</a></Link>
                                </li>
                            </ul>
                            <ul className="flex flex-col space-y-3 text-center md:text-left">
                                <li>
                                    <Link href="/"><a className="cursor-pointer font-normal font-kodchasan text-white">Home Cleaning</a></Link>
                                </li>
                                <li>
                                    <Link href="/"><a className="cursor-pointer font-normal font-kodchasan text-white">Office Cleaning</a></Link>
                                </li>
                                <li>
                                    <Link href="/"><a className="cursor-pointer font-normal font-kodchasan text-white">Commercial Cleaning</a></Link>
                                </li>
                                <li>
                                    <Link href="/"><a className="cursor-pointer font-normal font-kodchasan text-white">Holiday Let Cleaning</a></Link>
                                </li>
                            </ul>
                        </div>

                        <div className="w-full md:w-1/4 flex flex-col text-center md:text-left md:border-l border-l-white pl-0 md:pl-10">
                            <p className="font-semibold font-kodchasan text-white text-lg">Contact Information:</p>

                            <address className="font-kodchasan text-white not-italic flex flex-col space-y-1 mt-3">
                                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                                <a href={`tel:${PHONE_HREF}`}>{PHONE}</a>
                                <a href={`tel:${MOBILE_HREF}`}>{MOBILE}</a>
                            </address>

                            <div className="flex flex-row space-x-4 justify-center md:justify-start items-center mt-4">
                                <Link href={FACEBOOK}>
                                    <a>
                                        <img src="/images/social/facebook.svg" alt="Your Cleaner Facebook" width={45} height={45} className="cursor-pointer object-contain" />
                                    </a>
                                </Link>

                                <Link href={INSTAGRAM}>
                                    <a>
                                        <img src="/images/social/instagram.svg" alt="Your Cleaner Instagram" width={55} height={55} className="cursor-pointer object-contain" />
                                    </a>
                                </Link>

                                <Link href={TIKTOK}>
                                    <a>
                                        <img src="/images/social/tiktok.svg" alt="Your Cleaner Tiktok" width={45} height={45} className="cursor-pointer object-contain" />
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-green py-1 text-center">
                <div className="container mx-auto flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between">
                    <div className="text-white font-thin font-kodchasan text-sm">
                        Your Cleaner - Professional Cleaning Services
                    </div>  

                    <Link href="https://grandwebdesign.co.uk" target={"_blank"}><a className="text-white font-thin font-kodchasan text-sm">www.grandwebdesign.co.uk</a></Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
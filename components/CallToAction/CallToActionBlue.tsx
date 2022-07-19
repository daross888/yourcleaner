import React from "react";
import Button from "../Button/Button";

const CallToActionBlue = () => {
    return (
        <div className="my-28 bg-blue py-6 flex flex-col space-y-6 items-center px-2 md:px-0">
            <h3 className="text-white font-medium font-kodchasan text-2xl text-center lg:text-left lg:text-4xl">Professional cleaning for your home, office or factory</h3>

            <p className="text-white font-heebo opacity-75 text-center lg:text-left">We are very good at cleaning and if you read this you’ll definitely want us to clean your messy home. lol.</p>

            <Button type="link" color="white" className="max-w-[300px]" href="/">Contact Sales Team</Button>
        </div>
    );
}

export default CallToActionBlue;
import React from "react";
import ContactForm from "./ContactForm";
import ServiceAreas from "./ServiceAreas";

const Contact = () => {
    return (
        <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-4">
            <div className="flex flex-col space-y-4 w-full lg:w-1/2">
                <h2 className='font-bold font-kodchasan text-2xl text-blue'>Contact Us</h2>

                <div className="bg-white px-6 rounded-lg shadow-lg py-8">
                    <ContactForm />
                </div>
            </div>
            <div className="flex flex-col space-y-6 w-full lg:w-1/2">
                <h2 className='font-bold font-kodchasan text-2xl text-blue'>Service Areas</h2>

                <ServiceAreas />
            </div>
        </div>
    )
}

export default Contact;
import React from "react";
import Button from "../Button/Button";
import Dropdown from "../Form/Dropdown";
import Input from "../Form/Input";
import Textarea from "../Form/Textarea";

const ContactForm = () => {

    const services = [
        {
            value: 'domestic_cleaning',
            text: 'Domestic Cleaning'
        }
    ]

    return (
        <form action="" method="post" className="flex flex-col space-y-4">

            <Input type="text" name="name" label="Full Name" />

            <Input type="email" name="email" label="Email Address" />

            <Input type="phone" name="phone" label="Phone Number" />

            <Dropdown name="service" label="Service" data={services} />

            <Textarea name="message" label="Message" />

            <Button type="button" color="secondary" className="w-full py-3 hover:scale-100 hover:shadow-lg" onClick={() => alert('send')}>Send</Button>

        </form>
    )
}

export default ContactForm;
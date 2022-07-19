import React from "react";
import Testimonial from "./Testimonial";

const Testimonials = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            <Testimonial name="Dominik Jaross" job="Web Developer" description="Perfect services from a perfect company, at fair prices! 100% recommend." />

            <Testimonial name="Dominik Jaross" job="Web Developer" description="Perfect services from a perfect company, at fair prices! 100% recommend." />

            <Testimonial name="Dominik Jaross" job="Web Developer" description="Perfect services from a perfect company, at fair prices! 100% recommend." />
        </div>
    );
}

export default Testimonials;
import React from "react";

interface TestimonialInterface {
    name: any
    job: string
    description: string
}

const Testimonial: React.FC<TestimonialInterface> = ({ name, job, description }) => {
    return (
        <div className="flex flex-col space-y-4 p-5 bg-white rounded-lg drop-shadow-md">
            <div className="flex flex-row items-center">
                <div>
                    <div className="bg-grey opacity-50 p-2 rounded-full">
                        <i className="uit uit-user text-5xl text-white"></i>
                    </div>
                </div>
                <div className="flex flex-col ml-8">
                    <p className="font-medium font-heebo text-blue text-lg">{name}</p>
                    <small className="font-heebo text-grey opacity-30">{job}</small>
                </div>
            </div>

            <p className="font-heebo">{description}</p>
        </div>
    )
}

export default Testimonial;
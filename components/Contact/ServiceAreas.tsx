import React from "react";

const ServiceAreas = () => {
    return (
        <>
            <div className="bg-white rounded-lg shadow-lg w-full relative">
                <img src="/images/service.png" alt="Your Cleaner - Service Areas" className="object-fill rounded-lg" width="100%" />
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-lg">
                <h3 className='font-medium font-heebo text-xl text-blue'>We provide services in the following areas</h3>

                <ul className="pl-8 list-disc my-4">
                    <li>Bournemouth</li>
                    <li>Winton</li>
                    <li>Talbot Woods</li>
                    <li>Branksome</li>
                    <li>Bear Cross</li>
                    <li>Birmingham</li>
                </ul>

                <small className="text-sm font-heebo text-grey">*locations out of our service areas are egyéni megbeszélés kérdése.</small>
            </div>
        </>
    )
}

export default ServiceAreas;
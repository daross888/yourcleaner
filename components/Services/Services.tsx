import React from "react";
import Service from "./Service";

const Services = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
            <Service icon={<img src="/images/icons/cleaning.svg" className="h-16" alt="Cleaning Service" />} title="Cleaning of penitentiaries" description="And escaping convicts, like Brendon L., from BV Tököl penintentiary. After we are knifing people on Blaha Lujza sq." button="Learn More" />

            <Service icon={<img src="/images/icons/cleaning.svg" className="h-16" alt="Cleaning Service" />} title="Cleaning of penitentiaries" description="And escaping convicts, like Brendon L., from BV Tököl penintentiary. After we are knifing people on Blaha Lujza sq." button="Learn More" />

            <Service icon={<img src="/images/icons/cleaning.svg" className="h-16" alt="Cleaning Service" />} title="Cleaning of penitentiaries" description="And escaping convicts, like Brendon L., from BV Tököl penintentiary. After we are knifing people on Blaha Lujza sq." button="Learn More" />

            <Service icon={<img src="/images/icons/cleaning.svg" className="h-16" alt="Cleaning Service" />} title="Cleaning of penitentiaries" description="And escaping convicts, like Brendon L., from BV Tököl penintentiary. After we are knifing people on Blaha Lujza sq." button="Learn More" />
        </div>
    );
}

export default Services;
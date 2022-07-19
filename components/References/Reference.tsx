import React from "react";

interface ReferenceInterface {
    position: "left" | "right",
    image: string
    title: string
    description: string
}

const Reference: React.FC<ReferenceInterface> = ({ position, image, title, description }) => {
    return (
        <div className={`flex ${position == 'left'? 'flex-col' : 'flex-col-reverse'} space-y-2 lg:space-y-0 lg:flex-row items-center lg:justify-between`}>
            {position == 'left' && (
                <div className="w-full lg:w-1/2 relative">
                    <img src={image} alt={title} className="object-contain" />
                </div>
            )}

            <div className="flex flex-col justify-center space-y-4 w-full lg:w-1/2">
                <h4 className="font-normal font-heebo text-xl text-green">{title}</h4>
                <p className="font-normal font-heebo">{description}</p>
            </div>

            {position == 'right' && (
                <div className="w-full lg:w-1/2">
                    <img src={image} alt={title} className="object-contain" />
                </div>
            )}
        </div>
    );
}

export default Reference;
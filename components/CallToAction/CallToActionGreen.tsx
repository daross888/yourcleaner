import React from "react";
import Button from "../Button/Button";

const CallToActionGreen = () => {
    return (
        <div className="my-20 bg-green py-10">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
                <div className="flex flex-col space-y-4">
                    <h3 className="text-white font-medium font-kodchasan text-center md:text-left text-xl md:text-2xl xl:text-4xl">Get rid of the dirt with us, and be happy with a clean interior!</h3>

                    <p className="text-white font-heebo opacity-75 text-center md:text-left">Tök jó ha nem koszban élsz ... Úgyhogy hívj fel minket!</p>
                </div>

                <Button type="link" color="white" className="max-w-[230px] xl:max-w-[300px] text-green py-4" href="/">Contact Sales Team</Button>
            </div>
        </div>
    );
}

export default CallToActionGreen;
import React from 'react';
import { EMAIL, PHONE, PHONE_HREF } from '../../utils/Common';

const PreHeader = () => {
    return (
        <div className='bg-blue text-white text-sm hidden md:flex'>
            <div className='container mx-auto flex flex-row justify-between items-center py-1'>
                <p>Cleaning services in South England</p>
                <ul className="flex flex-row space-x-6 font-normal">
                    <li className='flex flex-row space-x-2 items-center'>
                        <i className="uit uit-envelope text-base"></i>
                        <a href={`mailto:${EMAIL}`} className='underline'>{EMAIL}</a>
                    </li>
                    <li className='flex flex-row space-x-2 items-center'>
                        <i className="uit uit-phone-alt text-base"></i>
                        <a href={`tel:${PHONE_HREF}`} className='underline'>{PHONE}</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default PreHeader;
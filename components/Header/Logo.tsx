import Link from 'next/link';
import React from 'react'
import { BASE_URL } from '../../utils/Common';

const Logo = () => {
    return (
        <Link href={BASE_URL}>
            <a className='flex w-1/3 md:w-1/4 max-w-xs h-10 lg:h-14'>
                <img src="/images/yourcleaner-logo.svg" alt="Your Cleaner Logo" className='object-fill' />
            </a>
        </Link>
    );
}

export default Logo;
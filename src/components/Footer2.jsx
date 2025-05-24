import React from 'react'
import { Link } from 'react-router-dom';
import whatsapp from '../assests/images/whatsappIcon.png';

const Footer2 = () => {
    return (
        <div className='bg-red-600 flex justify-between w-full px-20 items-center h-8'>
            {/* left */}
            <div className='flex justify-between items-center'>
                <div className='mr-2'>
                    <Link to="/#">
                        <img src={whatsapp} alt="whatsappIcon" className='w-5 h-5' />
                    </Link>
                </div>
                <div>
                    <Link to="/#">
                        <img src={whatsapp} alt="whatsappIcon" className='w-5 h-5' />
                    </Link>
                </div>
                <div className='ml-2'>
                    <Link to="/#">
                        <img src={whatsapp} alt="whatsappIcon" className='w-5 h-5' />
                    </Link>
                </div>
            </div>

            {/* rigt */}
            <div className='mr-14'>
                <p className='text-white font-serif'>copyright&copy;2022 lzycrazy.com</p>
            </div>
        </div>
    )
}

export default Footer2;
import React from 'react';

const Card = ({data}) => {
    return (
        <div className=' md:max-w-sm max-w-xs m-auto text-center bg-[#fffdfdb8] rounded-2xl md:px-3 pb-7'>
            <div className='shape'>
            <img src={data.img} className=' h-44 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' alt="" />
            </div>
            <h3 className='text-3xl mb-5'>{data.title}</h3>
            <p>{data.text}</p>
        </div>
    );
}

export default Card;

import React from 'react';
const Card = ({data}) => {
    return (
        <div className='relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:rounded-[50px] after:opacity-40 after:bg-blue-gray-800
        '>
            {React.createElement(data.logo, { className: "logo-services" })}{" "}
            <p className=' z-10 absolute top-[55%] text-white text-2xl font-semibold left-1/2 -translate-x-2/4 -translate-y-2/4 '>{data.category}</p>
            <img className=' h-72 md:w-[450px] w-96 rounded-[50px]'  src={data.img} alt="" />
        </div>
    );
}
export default Card;

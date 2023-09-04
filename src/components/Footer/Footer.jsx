import React from 'react';
import logo from '../../assests/imgs/logo.svg'
import { Typography } from "@material-tailwind/react";

export default function Footer ()
{
    return (
        <footer className="w-full bg-white pt-8 ">
            <div className="container flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
                <img src={logo} alt="logo-ct" className="" />
                <ul className="flex flex-wrap justify-evenly items-center gap-y-2 gap-x-8">
                    <li>
                        <Typography
                            as="a"
                            href="#"
                            color="blue-gray"
                            className="font-normal transition-colors hover:text-blue-gray-600 focus:text-blue-gray-600"
                        >
                            تواصل معنا 
                        </Typography>
                    </li>
                    <li>
                        <Typography
                            as="a"
                            href="#"
                            color="blue-gray"
                            className="font-normal transition-colors hover:text-blue-gray-600 focus:text-blue-gray-600"
                        >
                           مركز المساعده
                        </Typography>
                    </li>
                    <li>
                        <Typography
                            as="a"
                            href="#"
                            color="blue-gray"
                            className="font-normal transition-colors hover:text-blue-gray-600 focus:text-blue-gray-600"
                        >
                           سياسة الخصوصيه
                        </Typography>
                    </li>
                    <li>
                        <Typography
                            as="a"
                            href="#"
                            color="blue-gray"
                            className="font-normal transition-colors hover:text-blue-gray-600 focus:text-blue-gray-600"
                        >
                            الاقتراحات والشكاوى
                        </Typography>
                    </li>
                </ul>
            </div>
            <hr className="mt-8 mb-1 border-blue-gray-50" />
            <div className=' bg-deep-orange-50 h-28 relative'>
            <Typography color="blue-gray" className="text-center font-bold text-3xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                &copy; 2023 صلحلي
            </Typography>
            </div>
        </footer>
    );
}



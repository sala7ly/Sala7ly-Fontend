
import {useContext} from "react"
import { Link } from "react-router-dom";
import { IdContext } from "../../../Data/IdContext";
import React from "react";
import
    {

        Typography,

        MenuItem,

    } from "@material-tailwind/react";
import
    {
        HiQuestionMarkCircle,

    } from "react-icons/hi";
    import { AiFillHome } from "react-icons/ai";
    import { GrUserWorker } from "react-icons/gr";
    import { MdOutlineMiscellaneousServices } from "react-icons/md";
// nav list component
const navListItems = [
    {
        label: "الخدمات",
        icon: MdOutlineMiscellaneousServices,
        color:"deep-orange"
    },
    {
        label: "العمال",
        icon: GrUserWorker,
        color:"blue-gray"
    },
    {
        label: "من نحن؟",
        icon: HiQuestionMarkCircle,
        color:"blue-gray"
    },
    {
        label: "الصفحه الرئيسيه",
        icon: AiFillHome,
        href:"/",
        color:"blue-gray",
    },
];

function NavList ()
{
    const currentPath = window.location.pathname;
    const { id } = useContext(IdContext); 
    const isServicesPage = currentPath === `/${id}/services`;


    return (
        <ul className=" w-[102%] mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
            {navListItems.map(({ label, icon,href,color }, key) => (
                <Typography
                    key={label}
                    as={Link}
                    to={href}
                    variant="small"
                    className= "font-bold text-base"
                    color={isServicesPage?color:null}
                >
                    <MenuItem className="flex items-center gap-2 lg:rounded-full">
                        {React.createElement(icon, { className: "h-[18px] w-[18px]" })}{" "}
                        {label}
                    </MenuItem>
                </Typography>
            ))}
        </ul>
    );
}
export default NavList
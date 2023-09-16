import React from "react";
import { useNavigate, Outlet, useLocation, Link } from "react-router-dom";

import
    {
        Navbar,
        Collapse,
        Typography,
        Button,
        IconButton,
    } from "@material-tailwind/react";
import logo from "../../assests/imgs/logo.svg";

export default function Nav ()
{
    const location = useLocation();
    const navigate = useNavigate();
    const handleClick = () =>
    {
        if (location.pathname === "/signup") {
            navigate("/login");
        } else {
            navigate("/signup");
        }
    };

    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() =>
    {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    const navList = (
        <ul className=" mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-bold text-base text-[#173d3d]"
            >
                <Link to="/" className="flex items-center">
                    الخدمات
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-bold text-base text-[#173d3d]"
            >
                <Link to="/" className="flex items-center">
                    {" "}
                    الحجوزات
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-bold text-base text-[#173d3d]"
            >
                <Link to="/" className="flex items-center">
                    {" "}
                    من نحن
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-bold text-base  text-[#173d3d]"
            >
                <Link to="/" className="flex items-center">
                    {" "}
                    الصفحة الرئيسية
                </Link>
            </Typography>
        </ul>
    );

    return (
        <>
            <Navbar className="mx-auto  max-w-full py-5 px-4 lg:px-8 lg:py-4 border-none  shadow-none  bg-orange-50 relative z-20">
                <div className="container flex justify-between items-center w-full">
                    <img src={logo} alt="" />
                    <div className="flex items-center justify-between text-blue-gray-900">
                        <div className="hidden lg:block">{navList}</div>
                        <Button
                            onClick={handleClick}
                            variant="gradient"
                            size="sm"
                            className="hidden lg:inline-block ml-5  text-base"
                        >
                            <span>
                                {location.pathname === "/signup"
                                    ? "تسجيل الدخول"
                                    : "انشاء حساب"}
                            </span>
                        </Button>
                        <IconButton
                            variant="text"
                            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                            ripple={false}
                            onClick={() => setOpenNav(!openNav)}
                        >
                            {openNav ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    className="h-6 w-6"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </IconButton>
                    </div>
                </div>

                <Collapse open={openNav}>
                    <div className="container mx-auto">
                        {navList}
                        <Button
                            onClick={handleClick}
                            variant="gradient"
                            size="sm"
                            fullWidth
                            className="mb-2"
                        >
                            <span>
                                {location.pathname === "/signup"
                                    ? "تسجيل الدخول"
                                    : "انشاء حساب"}
                            </span>
                        </Button>
                    </div>
                </Collapse>
            </Navbar>
            <Outlet />
        </>
    );
}

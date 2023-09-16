import React, { useContext } from "react";
import axios from "axios";
import
    {
        Typography,
        Button,
        Menu,
        MenuHandler,
        MenuList,
        MenuItem,
        Avatar,
    } from "@material-tailwind/react";
import { HiChat } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { FiHelpCircle } from "react-icons/fi";
import { PiSignOutDuotone } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Data/AuthContext";
import { IdContext } from "../../../Data/IdContext";

// profile menu component
const profileMenuItems = [
    {
        label: "صفحتك الشخصية",
        icon: CgProfile,
    },
    {
        label: "الشات",
        icon: HiChat,
    },
    {
        label: "المساعدة",
        icon: FiHelpCircle,
    },
    {
        label: "تسجيل الحروج",
        icon: PiSignOutDuotone,
    },
];

function ProfileMenu ()
{
    const navigate = useNavigate();

    
    const { id, setId } = useContext(IdContext); // Access token from the context

    const handleProfileClick = () => {
        console.log(id);
        navigate(`/${id}`)
        setId("")
        // Close the menu
        closeMenu();
      };


    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const closeMenu = () => setIsMenuOpen(false);

    const { token, setToken } = useContext(AuthContext); // Access token from the context

    const handleLogoutClick = () =>
    {
        // Here you can access the token and log it before clearing it
        console.log("Token to be logged out:", token);
        axios
            .request("https://sala7ly.onrender.com/api/v1/auth/logout", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then(function (meResponse)
            {
                console.log(meResponse);
                setToken("");
                navigate(`/`);
            });
    };

    return (
        <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
            <MenuHandler>
                <Button
                    variant="text"
                    color="blue-gray"
                    className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"


                >
                    <Avatar
                        variant="circular"
                        size="sm"
                        alt="tania andrew"
                        className="border border-gray-900 p-0.5"
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                    />
                </Button>
            </MenuHandler>
            <MenuList className="p-1">
                {profileMenuItems.map(({ label, icon }, key) =>
                {
                    const isLastItem = key === profileMenuItems.length - 1;
                    return (
                        <MenuItem
                            key={label}
                            onClick={isLastItem ? handleLogoutClick : () => {
                                handleProfileClick();
                                closeMenu();
                              }}
                            className={`flex items-center gap-2 rounded ${isLastItem
                                    ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                                    : ""
                                }`}
                        >
                            {React.createElement(icon, {
                                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                                strokeWidth: 2,
                            })}
                            <Typography
                                as="span"
                                variant="small"
                                className="font-normal"
                                color={isLastItem ? "red" : "inherit"}
                            >
                                {label}
                            </Typography>
                        </MenuItem>
                    );
                })}
            </MenuList>
        </Menu>
    );
}

export default ProfileMenu;

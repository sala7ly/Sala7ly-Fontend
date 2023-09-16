import NavList from './NaveList'
import ProfileMenu from './ProfileMenu'
import logo from "../../../assests/imgs/logo.svg";
import React from "react";
import
    {
        Navbar,
        Collapse ,
        IconButton,
    } from "@material-tailwind/react";
    import { SlMenu } from "react-icons/sl";

function ComplexNavbar ()
{
    const [isNavOpen, setIsNavOpen] = React.useState(false);

    const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

    React.useEffect(() =>
    {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setIsNavOpen(false),
        );
    }, []);

    return (
        <Navbar className="mx-auto max-w-full py-5 md:px-16 px-8">
            <div className="relative mx-auto flex items-center text-green-50">
                <div><img src={logo} alt="" /></div>
                <div className="absolute w-[40%] top-2/4 left-[72%] hidden -translate-x-2/4 -translate-y-2/4 lg:block">
                    <NavList />
                </div>
                <IconButton
                    size="sm"
                    color="blue-gray"
                    variant="text"
                    onClick={toggleIsNavOpen}
                    className="ml-auto mr-2 lg:hidden"
                >
                    <SlMenu className="h-6 w-6" />
                </IconButton>
                <ProfileMenu />
            </div>
            <Collapse  open={isNavOpen} className=" text-xl">
                <NavList />
            </Collapse>
        </Navbar>
    );
}
export default ComplexNavbar
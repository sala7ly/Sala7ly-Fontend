import React from "react";
import Card from "./Card";

import eleImg from "../../assests/imgs/elec.png";
import ngarImg from "../../assests/imgs/ngar.jpg";
import nkashImg from "../../assests/imgs/nkash.png";
import spakImg from "../../assests/imgs/sbak.png";

import { AiFillTool } from "react-icons/ai";
import { GiStoneCrafting } from "react-icons/gi";
import { BsTools } from "react-icons/bs";
import { TbTooltip } from "react-icons/tb";
const Cards = () =>
{
    const data = [
        { img: eleImg, logo: AiFillTool,category:"الكهرباء" },
        { img: ngarImg, logo: GiStoneCrafting,category:"النجارة"  },
        { img: nkashImg, logo: BsTools,category:"النقاشة"  },
        { img: spakImg, logo: TbTooltip,category:"السباكة"  },
    ];
    return (
        <div className="gradient-two flex justify-center items-center">
            <div className="container p-5 flex justify-center items-center flex-wrap gap-x-28 gap-y-7">
                {data.map((item, index) =>
                {
                    return <Card key={index} data={item} />;
                })}
            </div>
        </div>
    );
};

export default Cards;

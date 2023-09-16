import React from "react";
import landing from "../../assests/imgs/landservice.png";
const Landing = () =>
{
    return (
        <>
        <div className="bg-orange-50 relative overflow-hidden">
            <div className="container mx-auto md:mx-7 flex flex-wrap-reverse flex-col-reverse md:flex-row justify-between items-center text-green-50">
                <img
                    src={landing}
                    className=" h-80 md:w-[850px] relative z-10"
                    alt=""
                />
                <div className="pb-4 flex flex-col gap-6  text-center md:text-left">
                    <h2 className=" font-bold md:text-7xl text-6xl md:tex-3xl mt-8 -mb-11 md:m-0">
                        خدماتنا
                    </h2>
                </div>
            </div>
        </div>
        <div className="p-12 flex justify-center items-center flex-col text-center">
            <h3 className="text-green-50 text-3xl font-semibold">كل الخدمات لدينا هنا</h3>
            <p className="mt-2 text-blue-gray-500 text-xl font-medium">هدفنا نوفرلك خدمات موثوقه وعالية الجودة للحفاظ على بيتك</p>
        </div>
        </>
    );
};



export default Landing;

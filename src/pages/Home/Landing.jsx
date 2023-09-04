import React from 'react';
import landing from '../../assests/imgs/landing.svg'
import logoShape from '../../assests/imgs/logoshape.png'
import { Button } from '@material-tailwind/react';
const Landing = () =>
{
    return (
        <div className='bg-orange-50 relative  min-h-screen overflow-hidden'>
            <div className='container mx-auto md:mx-7 flex flex-col md:flex-row justify-between items-center text-green-50 md:pt-10 pt-5'>
                <div className='pb-4 flex flex-col gap-6  text-center md:text-left'>
                    <h2 className=' font-bold md:text-5xl text-3xl'>راحتك وسعادتك تهمنا عشان كدا وفرنالك صلحلى</h2>
                    <p className='text-lg'>وفرنالك مجموعه من العمال المتخصصين فى مجالهم  وتقدر تتواصل معام بسهوله</p>
                    <div className='flex '>
                        <Button
                            size="lg"
                            variant="gradient"
                            color='blue-gray'
                            className="group relative flex items-center gap-3 overflow-hidden pr-[72px] m-auto md:m-0"
                        >
                            سجل معانا دلوقتي
                            <span className="absolute right-0 grid h-full w-12 place-items-center bg-orange-50 transition-colors group-hover:bg-deep-orange-50">
                                <img src={logoShape} alt="metamask" className="h-6 w-6" />
                            </span>
                        </Button>
                    </div>
                </div>

                <img src={landing} className=' h-96 relative z-10' alt="" />

            </div>

            <div className='ball-one'></div>
        </div>

    );
}

export default Landing;

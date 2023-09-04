import  Card  from './Card';
import imgCardOne from '../../assests/imgs/card1.svg'
import imgCardTwo from '../../assests/imgs/card2.svg'
import imgCardThree from '../../assests/imgs/card3.svg'


const Cards = () => {
    const data =[{img:imgCardOne,title:'شغلك عندنا',text:'هنوصلك بالعميل بسهوله وفأسرع وقت وبنضملك احسن خدمه'},
    {img:imgCardTwo,title:'مشكلتك حلها عندنا',text:'وفرنالك متخصصين فى كافه الحرف على اعلى مستوى من الخبره والكفائه'},
    {img:imgCardThree,title:'سعادتك تهمنا',text:'مع صلحلى وقتك فأمان بنوفرلك خدمه على اعلى مستوى'}
]
    return (
        <div className=' mt-12  pb-4 bg-orange-50 '>
            <div className='md:container flex  gap-10 md:flex-row flex-col pt-5 md:flex-nowrap flex-wrap'>
                {data.map((item,index)=>{
                    return <Card key={index} data={item}/>
                })}
            </div>
        </div>
    );
}

export default Cards;

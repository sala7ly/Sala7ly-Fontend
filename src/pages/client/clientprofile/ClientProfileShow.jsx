import React, { useEffect,useState,useContext } from "react";
import { UserContext } from '../../../Data/UserContext';
import {useParams} from 'react-router-dom';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ClientNav from '../nav/ClientNav';
import { BsFillCameraFill } from "react-icons/bs";
import { FiEdit2 } from "react-icons/fi";
const ClientProfileShow = () =>
{
    const { setData } = useContext(UserContext);
     const { clientId } = useParams();
     console.log(clientId);
     const [clientData, setClientData] = useState(null);
    useEffect(() =>
    {
        const fetchClientData = async () =>
        {
            try {
                console.log(clientId);
                const response = await axios.get(
                    `https://sala7ly.onrender.com/api/v1/users/${clientId}`
                );
                console.log(response);
                setClientData(response.data.payload.data);
                setData(response.data.payload.data)
            } catch (error) {
                console.error("Error fetching client data:", error);
            }
        };
        fetchClientData();
    }, [clientId,setData]);
    const navigate = useNavigate();
    const doNavigation = ()=>{
    navigate(`/${clientId}/edit`)
    }
    return (
        <>
        <ClientNav/>
        {clientData ? (
          // Render client data when it's available
          <div className="gradient-two">
            <div className=" rtl container flex justify-center items-center p-5 flex-col gap-6">
            <div className="relative">
            {React.createElement(BsFillCameraFill, { className: "logo-clientprof" })}{" "}
            {React.createElement(FiEdit2, { className: "logo-clientprofedit"  ,onClick: () => {doNavigation()}})}{" "}

                <img className=" h-32 rounded-full" src={"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"} alt="" /></div>
            <h3 className="text-xl text-green-50 font-semibold">الاسم :  {clientData.name}</h3>
            <h3 className="text-xl text-green-50 font-semibold">الايميل : {clientData.email}</h3>
            <h3 className="text-xl text-green-50 font-semibold">رقم التليفون : {clientData.phone}</h3>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
        </>
    );
};
export default ClientProfileShow;

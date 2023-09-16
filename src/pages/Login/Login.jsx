import React from "react";
import { AuthContext } from '../../Data/AuthContext';
import { IdContext } from '../../Data/IdContext';
import { useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Card, Input, Button, Typography } from "@material-tailwind/react";

const SignupSchema = Yup.object().shape({
    email: Yup.string().email("ايميل غير صحيح ادخل ايميل اخر").required("مطلوب"),
    password: Yup.string()
        .min(5, "قصير جدا")
        .max(20, "اطول من اللازم")
        .required("مطلوب"),
});

const Login = () =>
{
    const { setId } = useContext(IdContext);
    const { setToken } = useContext(AuthContext);
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: SignupSchema,
        onSubmit: (values) =>
        {
            axios
                .post("https://sala7ly.onrender.com/api/v1/auth/login", values)
                .then(function (response)
                {
                    const token =response.data.payload.token;
                    console.log(token);
                    setToken(token);
                    axios
                        .request("https://sala7ly.onrender.com/api/v1/auth/me", {
                            headers: {
                                Authorization: `Bearer ${response.data.payload.token}`,
                            },
                        })
                        .then(function (meResponse)
                        {
                            console.log(meResponse);

                            if (
                                meResponse &&
                                meResponse.data &&
                                meResponse.data.payload &&
                                meResponse.data.payload.data
                            ) {
                                // Now you can safely access meResponse.data.payload.data._id
                                const id = meResponse.data.payload.data._id;
                                console.log(id);
                                setId(id);
                                // navigate(`/${id}`);
                                navigate(`/${id}/services`);
                            } else {
                                // Handle the case where the data is not defined as expected
                                console.error("Data is not defined as expected");
                            }
                        });
                })
                .catch(function (error)
                {
                    console.log(error);
                });
        },
    });

    const navigate = useNavigate();
    const handleClick = () =>
    {
        navigate("/signup");
    };
    return (
        <div className="gradient py-5 relative before:absolute lg:before:content-[url('./assests/imgs/formright.png')] before:left-5 before:top-11 after:absolute after:right-5 after:top-11 lg:after:content-[url('./assests/imgs/formleft.png')]">
            <Card
                className=" shadow-3xl w-fit p-5 relative left-1/2 top-1/2 -translate-x-1/2  z-10 rtl bg-white"
                color="transparent"
                shadow={false}
            >
                <Typography variant="h3" color="blue-gray">
                    تسجيل الدخول
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                    ادخل البيانات التالية
                </Typography>
                <form
                    onSubmit={formik.handleSubmit}
                    className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
                >
                    <div className="mb-4 flex flex-col gap-6">
                        <Input
                            className=" text-xl"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            name="email"
                            type="email"
                            value={formik.values.email}
                            color="deep-orange"
                            size="lg"
                            label="البريد الالكتروني"
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <div className=" text-red-500">{formik.errors.email}</div>
                        ) : null}
                        <Input
                            className=" text-xl"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            type="password"
                            name="password"
                            value={formik.values.password}
                            color="deep-orange"
                            size="lg"
                            label="كلمة المرور"
                        />
                        {formik.touched.password && formik.errors.password ? (
                            <div className=" text-red-500">{formik.errors.password}</div>
                        ) : null}
                    </div>

                    <Button type="submit" className="mt-6" fullWidth>
                        تسجيل الدخول
                    </Button>
                </form>
                <Typography color="gray" className="mt-4 text-center font-normal">
                    ليس لديك حساب ؟{" "}
                    <button
                        onClick={handleClick}
                        className="font-medium text-gray-900 hover:text-blue-gray-800"
                    >
                        سجل معنا
                    </button>
                </Typography>
            </Card>
        </div>
    );
};

export default Login;


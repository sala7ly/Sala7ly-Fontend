import React from "react";
import ClientNav from "../nav/ClientNav";
import { useContext } from "react";
import { UserContext } from "../../../Data/UserContext";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Card, Input, Button } from "@material-tailwind/react";

import { BsFillCameraFill } from "react-icons/bs";

const SignupSchema = Yup.object().shape({
    phone: Yup.string()
        .min(10, "قصير جدا")
        .max(12, "اطول من اللازم")
        .required("مطلوب"),
});
const ClientProfileEdit = () =>
{
    const { data } = useContext(UserContext);
    // console.log(data._id);

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            phone: "",
        },
        validationSchema: SignupSchema,
        onSubmit: (values) =>
        {
            console.log(data._id);
            // alert(JSON.stringify(values, null, 2))
            axios
                .patch(`https://sala7ly.onrender.com/api/v1/users/${data._id}`, values)
                .then(function (response)
                {
                    console.log(response);
                })
                .catch(function (error)
                {
                    console.log(error);
                });
        },
    });


    return (
        <>
            <ClientNav />
            {data ? (
                // Render data when it's available
                <div className="gradient-two">
                    <div className=" rtl container flex justify-center items-center p-5 flex-col gap-6">
                        <div className="relative">
                            {React.createElement(BsFillCameraFill, {
                                className: "logo-clientprof",
                            })}{" "}
                            <img
                                className=" h-32 rounded-full"
                                src={
                                    "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                                }
                                alt=""
                            />
                        </div>
                        <Card color="transparent" shadow={false}>
                            <form
                                onSubmit={formik.handleSubmit}
                                className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
                            >
                                <div className="mb-4 flex flex-col gap-6">
                                    <Input
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        name="name"
                                        value={formik.values.name}
                                        className=" text-blue-gray-800 text-xl"
                                        type="text"
                                        size="lg"
                                        placeholder={data.name}
                                    />
                                    <Input
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        name="email"
                                        value={formik.values.email}
                                        className=" text-blue-gray-800 text-xl"
                                        type="email"
                                        size="lg"
                                        placeholder={data.email}
                                    />
                                    <Input
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        name="phone"
                                        value={formik.values.phone}
                                        className=" text-blue-gray-800 text-xl"
                                        type="number"
                                        size="lg"
                                        placeholder={data.phone}
                                    />
                                    {formik.touched.phone && formik.errors.phone ? (
                                        <div className=" text-red-500">{formik.errors.phone}</div>
                                    ) : null}
                                </div>

                                <Button type="submit" className="mt-6" fullWidth>
                                    حفظ التغييرات
                                </Button>
                            </form>
                        </Card>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </>
    );
};

export default ClientProfileEdit;

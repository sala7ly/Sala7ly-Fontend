import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import
    {
        Card,
        Input,
        Checkbox,
        Button,
        Typography,
        Radio,
        List,
        ListItem,
        ListItemPrefix,
    } from "@material-tailwind/react";

const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, "قصير جدا")
        .max(50, "اطول من اللازم")
        .required("مطلوب"),
        phone: Yup.string()
        .min(10, "قصير جدا")
        .max(12, "اطول من اللازم")
        .required("مطلوب"),
    email: Yup.string().email("ايميل غير صحيح ادخل ايميل اخر").required("مطلوب"),
    password: Yup.string().min(5, "قصير جدا").max(20, "اطول من اللازم").required("مطلوب"),
    role: Yup.string().required("مطلوب")
});

export default function Sinup ()
{
    const formik = useFormik({
        initialValues: {
            email: "",
            name: "",
            phone: "",
            password: "",
            passwordConfirm:"",
            role: "",
        },
        validationSchema: SignupSchema,
        onSubmit: (values) =>
        {      
            // alert(JSON.stringify(values, null, 2))      
                axios.post("https://sala7ly.onrender.com/api/v1/users",values).then(function (response) {
                console.log(response);
              }).catch(function (error) {
                console.log(error);
            });
        },
    });
    const navigate = useNavigate();
    const handleClick = () =>
    {
        navigate("/login");
    };
    return (
        <div className="gradient p-6 relative before:absolute lg:before:content-[url('./assests/imgs/formright.png')] before:left-5 before:top-40 after:absolute after:right-5 after:top-40 lg:after:content-[url('./assests/imgs/formleft.png')]">
            <Card
                className=" shadow-3xl w-fit p-5 relative left-1/2 top-1/2 -translate-x-1/2  z-10 rtl bg-white"
                color="transparent"
                shadow={false}
            >
                <Typography variant="h3" color="blue-gray">
                    انشاء حساب
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
                            size="lg"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            type="text"
                            name="name"
                            value={formik.values.name}
                            color="deep-orange"
                            label="اسم المستخدم"
                        />

                        {formik.touched.name && formik.errors.name ? (
                            <div className=" text-red-500">{formik.errors.name}</div>
                        ) : null}
                        <Input
                            className=" text-xl"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            type="number"
                            name="phone"
                            value={formik.values.phone}
                            color="deep-orange"
                            size="lg"
                            label="رقم الموبايل"
                        />

                        {formik.touched.phone && formik.errors.phone ? (
                            <div className=" text-red-500">{formik.errors.phone}</div>
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
                        <Input
                            className=" text-xl"
                            onChange={formik.handleChange}
                            type="password"
                            name="passwordConfirm"
                            value={formik.values.passwordConfirm}
                            color="deep-orange"
                            size="lg"
                            label="تاكيد كلمة المرور"
                        />
                    </div>
                    <Card className="w-full max-w-[24rem]">
                        <List className="flex-row">
                            <ListItem className="p-0">
                                <label
                                    htmlFor="horizontal-list-react"
                                    className="flex w-full cursor-pointer items-center px-3 py-2 hover:bg-orange-50"
                                >
                                    <ListItemPrefix className="mr-3">
                                        <Radio
                                            color="deep-orange"
                                            name="role"
                                            id="horizontal-list-react"
                                            ripple={false}
                                            className="hover:before:opacity-0"
                                            containerProps={{
                                                className: "p-0",
                                            }}
                                            value="craftsman" // Set the value to "عميل"
                                            checked={formik.values.role === "craftsman"} // Check if it's selected
                                            onChange={formik.handleChange} // Handle the change
                                            onBlur={formik.handleBlur}
                                        />
                                    </ListItemPrefix>
                                    <Typography color="blue-gray" className="font-medium mr-3">
                                        حرفي
                                    </Typography>
                                </label>
                            </ListItem>
                            <ListItem className="p-0">
                                <label
                                    htmlFor="horizontal-list-vue"
                                    className="flex w-full cursor-pointer items-center px-3 py-2 hover:bg-orange-50"
                                >
                                    <ListItemPrefix className="mr-3 ">
                                        <Radio
                                            color="deep-orange"
                                            name="role"
                                            id="horizontal-list-vue"
                                            ripple={false}
                                            className="hover:before:opacity-0"
                                            containerProps={{
                                                className: "p-0",
                                            }}
                                            value="client" // Set the value to "عميل"
                                            checked={formik.values.role === "client"} // Check if it's selected
                                            onChange={formik.handleChange} // Handle the change
                                            onBlur={formik.handleBlur}
                                        />
                                    </ListItemPrefix>
                                    <Typography color="blue-gray" className="font-medium mr-3">
                                        عميل
                                    </Typography>
                                </label>
                            </ListItem>
                        </List>
                    </Card>
                    {formik.touched.role && formik.errors.role ? (
                            <div className="mt-3 text-xl text-red-500">{formik.errors.role}</div>
                        ) : null}
                    <Checkbox
                        color="deep-orange"
                        className="m-3"
                        label={
                            <Typography
                                variant="small"
                                color="gray"
                                className="flex items-center font-normal "
                            >
                                اوافق على
                                <a
                                    href="/"
                                    className="font-medium transition-colors hover:text-gray-900"
                                >
                                    &nbsp;شروط الخصوصية
                                </a>
                            </Typography>
                        }
                        containerProps={{ className: "-ml-2.5" }}
                    />

                    <Button type="submit" className="mt-6" fullWidth>
                        انشئ حساب
                    </Button>
                    <Typography color="gray" className="mt-4 text-center font-normal">
                        لديك حساب بالفعل؟{" "}
                        <button
                            onClick={handleClick}
                            className="font-medium text-gray-900 hover:text-blue-gray-800"
                        >
                            تسجيل الدخول
                        </button>
                    </Typography>
                </form>
            </Card>
        </div>
    );
}

import { Button, Form } from "antd";


// import type { FormProps } from 'antd';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schemaForm } from "../../../zodvalidation/validationSchemas"
import TextInput from "./TextInput";
import DatePickerFa from "./DatePickerFa";
import MultipleSelect from "./MultipleSelect";
import SingelSelect from "./SingelSelect";
import { useRepairStore } from "@/stores/repairStore";
import { nanoid } from "nanoid";
import {
    FiUser,
    FiPhone,
    FiSmartphone,
    FiTool,
    FiFileText,

    FiCalendar,
} from "react-icons/fi";
import { RepairFieldType } from "@/types/repair";
import { useFormModalStore } from "@/stores/formModalStore";
import dayjs from "dayjs";
import { useNotificationContext } from "@/context/NotificationProvider";
import { useEffect, useState } from "react";








const FormInput = () => {

    const addIssue = useRepairStore(state => state.setIssue)

    const selectedIssue = useFormModalStore(state => state.selectedIssue)
    const setUpdateIssue = useRepairStore(s => s.setUpdateIssue)
    const mode = useFormModalStore(state => state.mode)
    const closeModal = useFormModalStore(state => state.closeModal)
    const openNotification = useNotificationContext()
    const [isLoading, setIsloading] = useState<boolean>(false)
    const ModyfiSelectedIssue = selectedIssue
        ? {
            ...selectedIssue,
            dateTime: dayjs(selectedIssue.dateTime),
        }
        : null;

    const defaultVal: RepairFieldType = {
        id: null,
        customerName: "",
        phone: "",
        model: "",
        issueDescription: "",
        price: 0,
        status: "pending",
        mobileIssues: [],
        brand: null,
        dateTime: null,
    }

    const defaultValues = ModyfiSelectedIssue ? ModyfiSelectedIssue : defaultVal


    const {
        control,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<RepairFieldType>({
        mode: "onChange",
        resolver: zodResolver(schemaForm),
        defaultValues

    });


    useEffect(() => {
        if (selectedIssue) {
            reset({
                ...selectedIssue,
                dateTime: dayjs(selectedIssue.dateTime),
            });
        } else {
            reset(defaultVal);
        }
    }, [selectedIssue]);




    const onSubmit = async (data: RepairFieldType) => {
        if (isLoading) return;

        setIsloading(true);
        // fake loading  
        await new Promise((res) => setTimeout(res, 2000));
        try {
            if (selectedIssue) {

                if (!isLoading) setUpdateIssue({
                    ...data,
                    id: selectedIssue.id,
                });
            } else {
                if (!isLoading) addIssue({
                    ...data,
                    id: nanoid(),
                });
            }





            openNotification!({
                status: selectedIssue
                    ? "اطلاعات مشتری با موفقیت به‌روزرسانی شد."
                    : "اطلاعات مشتری با موفقیت ثبت شد.",
                type: "success",
            });

            closeModal();
            await new Promise((res) => setTimeout(res, 700));
            reset();

        } finally {
            setIsloading(false);
        }
    };




    return (
        <Form
            className="
    w-full
    rounded-2xl
    border
    border-border
    bg-bg-container
    p-8!
    max-sm:p-0!
 
    max-sm:border-none
    max-sm:shadow-none
  "
            onFinish={handleSubmit(onSubmit)}
            layout="vertical"
        >
            {/* اطلاعات مشتری */}
            <div className="flex">


                <div className="form_input  pb-3">
                    <TextInput
                        control={control}
                        name={"customerName"}
                        errorMessage={errors?.customerName?.message}
                        label={"نام مشتری"}
                        placeholder={"نام مشتری را وارد کنید"}
                        icon={<FiUser className={` ${errors.customerName?.message ? "text-error" : "text-[#545454]"}`} />}
                    />

                    <TextInput
                        control={control}
                        name={"phone"}
                        errorMessage={errors?.phone?.message}
                        label={"شماره تماس"}
                        placeholder={"شماره تماس را وارد کنید"}
                        icon={<FiPhone className={` ${errors.phone?.message ? "text-error" : "text-[#545454]"}`} />}
                    />
                    <span className="max-sm:block hidden  h-px w-full  bg-border"></span>
                </div>

            </div>

            {/* اطلاعات دستگاه */}
            <div className=" flex">


                <div className="form_input pb-3">
                    <SingelSelect
                        control={control}
                        name={"brand"}
                        errorMessage={errors?.brand?.message}
                        label={"برند دستگاه"}
                        placeholder="برند دستگاه را انتخاب کنید"
                        icon={<FiSmartphone className={` ${errors.brand?.message ? "text-error" : "text-[#545454]"}`} />}
                    />

                    <TextInput
                        control={control}
                        name={"model"}
                        errorMessage={errors?.model?.message}
                        label={"مدل دستگاه"}
                        placeholder={"مثلاً iPhone 13"}
                        icon={<FiSmartphone className={` ${errors.model?.message ? "text-error" : "text-[#545454]"}`} />}
                    />
                    <span className="max-sm:block hidden  h-px w-full  bg-border"></span>
                </div>
            </div>

            {/* مشکل دستگاه */}
            <div className="  flex">


                <div className="form_input  pb-3">
                    <MultipleSelect
                        control={control}
                        name={"mobileIssues"}
                        errorMessage={errors?.mobileIssues?.message}
                        label="مشکل دستگاه"
                        placeholder="مشکل دستگاه را انتخاب کنید"
                        icon={<FiTool className={` ${errors.mobileIssues?.message ? "text-error" : "text-[#545454]"}`} />}
                    />

                    <TextInput
                        control={control}
                        name="issueDescription"
                        errorMessage={errors?.issueDescription?.message}
                        label="توضیح تکمیلی"
                        placeholder="توضیحات تکمیلی درباره خرابی..."
                        optional
                        icon={<FiFileText className={` ${errors.issueDescription?.message ? "text-error" : "text-[#545454]"}`} />}
                    />
                    <span className="max-sm:block hidden  h-px w-full  bg-border"></span>
                </div>
            </div>

            {/* هزینه و تاریخ */}
            <div className="flex">


                <div className="form_input  pb-3">
                    <TextInput
                        control={control}
                        name={"price"}
                        errorMessage={errors?.price?.message}
                        label={"هزینه تعمیر"}
                        placeholder={"مبلغ به تومان"}
                        type={"number"}

                    />

                    <DatePickerFa
                        control={control}
                        name="dateTime"
                        errorMessage={errors.dateTime?.message}
                        label="تاریخ"
                        icon={<FiCalendar className={` ${errors.dateTime?.message ? "text-error" : "text-[#545454]"}`} />}

                    />
                    <span className="max-sm:block hidden  h-px w-full  bg-border"></span>
                </div>
            </div>

            {/*  دکمه سابمیت */}
            <div className="flex items-center justify-end    pt-5">
                <Button
                    type="primary"
                    disabled={isLoading}
                    loading={isLoading}
                    htmlType="submit"
                    className="
        h-11!
        rounded-lg!
        px-8!
        text-sm!
        font-medium!
        max-sm:w-full!
      "
                >
                    {mode === "create"
                        ? "ثبت درخواست"
                        : "ذخیره تغییرات"}
                </Button>
            </div>
        </Form>





    );
};

export default FormInput;

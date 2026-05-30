
import { z } from "zod";
import dayjs from "dayjs";
const phoneRegex = new RegExp(/^09\d{9}$/);
export const schemaForm = z.object({
    customerName: z
        .string()
        .min(1, "وارد کردن نام مشتری الزامی است"),


    phone: z
        .string({ message: "وارد کردن شماره تلفن الزامی است" })
        .min(1, "وارد کردن شماره تلفن الزامی است")
        .regex(phoneRegex, "شماره تلفن معتبر نیست!"),


    model: z
        .string()
        .min(1, "وارد کردن مدل گوشی الزامی است"),
    brand: z
        .string({ message: "وارد کردن برند الزامی است" })
        .min(1, "وارد کردن برند الزامی است"),



    price: z
        .number({
            required_error: "وارد کردن مبلغ الزامی است",
            invalid_type_error: "وارد کردن مبلغ الزامی است",
        })
        .min(1, "وارد کردن مبلغ الزامی است"),


    dateTime: z.preprocess(
        (val) => (dayjs.isDayjs(val) ? val.toDate() : val),
        z.date({ message: "تاریخ الزامی است" })
    ),
    mobileIssues:
        z.array(z.string()).min(1, "حداقل یک مشکل انتخاب کنید"),

    issueDescription: z.string().max(250, "متن وارد شده طولانی است!").optional(),
    status: z.enum(
        ["pending", "repairing", "completed"],
        {
            errorMap: () => ({
                message: "انتخاب وضعیت الزامی است",
            }),
        }
    ),
});


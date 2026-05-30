import { Input, InputNumber } from "antd";
// import type { InputNumberProps } from 'antd';
import {
    Control,
    FieldValues,
    Path,

} from "react-hook-form";
import ControlledInput from "./ControlledInput";
import { toPersianNumber } from "@/helper";
import { ReactNode } from "react";

interface TextInputProps<T extends FieldValues> {
    name: Path<T>;
    control: Control<T>;
    errorMessage?: string;
    label: string;
    placeholder?: string;
    optional?: boolean;
    type?: "text" | "number"
    icon?: ReactNode
}

const TextInput = <T extends FieldValues>({
    name,
    control,
    errorMessage,
    label,
    placeholder,
    optional = false,
    type,
    icon
}: TextInputProps<T>) => {

    // const parser: InputNumberProps<number>["parser"] = (value) => {
    //     if (!value) return null as unknown as number;

    //     const cleaned = value
    //         .replace(/[ تومان,]/g, "")
    //         .replace(/[۰-۹]/g, (d) =>
    //             String("۰۱۲۳۴۵۶۷۸۹".indexOf(d))
    //         );

    //     return Number(cleaned);
    // };



    return (
        <ControlledInput
            optional={optional}
            errorMessage={errorMessage}
            label={label}
            name={name}
            control={control}
            render={({ field }) => (
                type === "number" ?
                    <InputNumber
                        status={errorMessage && "error"}
                        style={{ width: "100%" }}
                        placeholder={placeholder}
                        prefix={icon}
                        formatter={(value) => {
                            const withCommas =
                                value != null
                                    ? value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                                    : "";

                            return `${toPersianNumber(withCommas)} تومان`;
                        }}
                        parser={(value: any) => {
                            const englishDigits = value
                                ?.replace(/[ تومان,]/g, "")
                                .replace(/[۰-۹]/g, (d: any) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d));
                            return englishDigits;
                        }}
                        {...field}
                    />
                    :

                    <Input
               autoComplete="off"
                        prefix={icon}
                        {...field}
                        placeholder={placeholder}
                        status={errorMessage && "error"}
                    />
            )}
        />
    );
};

export default TextInput;











import { DatePicker } from "antd";
import {
    Control,
    FieldValues,
    Path,
} from "react-hook-form";
import ControlledInput from "./ControlledInput";
import dayjs from "../../utility/dayjsJalaliConfig";
import locale from "antd/es/date-picker/locale/fa_IR";
import { ReactNode } from "react";

interface DateProps<T extends FieldValues> {
    name: Path<T>;
    control: Control<T>;
    errorMessage?: string;
    label: string;
    placeholder?: string;
    optional?: boolean;
    icon: ReactNode
}

const DatePickerFa = <T extends FieldValues>({
    control,
    name,
    errorMessage,
    label,
    placeholder,
    optional,
    icon
}: DateProps<T>) => {


    return (
        <ControlledInput
            optional={optional}
            errorMessage={errorMessage}
            label={label}
            name={name}
            control={control}
            render={({ field }) => (
                <DatePicker
                    suffixIcon={icon}
                    style={{ width: "70%" }}
                    value={field.value ? dayjs(field.value) : null}
                    allowClear
                    onChange={(date) => {

                        // when click to clear date 
                        if (!date) {
                            field.onChange(null);
                            return;
                        }

                        const now = dayjs();

                        const finalDate = date
                            .hour(now.hour())
                            .minute(now.minute())
                            .second(now.second());

                        field.onChange(finalDate.toDate());
                    }}
                    placeholder={placeholder}
                    status={errorMessage ? "error" : ""}
                    locale={locale}
                />
            )}
        />
    );
};

export default DatePickerFa;
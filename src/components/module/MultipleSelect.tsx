import { Select } from "antd";
 
import {
    Control,

    FieldValues,
    Path,

} from "react-hook-form";
import ControlledInput from "./ControlledInput";
import { ReactNode } from "react";
import { useResponsive } from "../../hook/useResponsive";
import { issueOptions } from "../../constants/select_option";
 

interface MultipleSelectProps<T extends FieldValues> {
    name: Path<T>;
    control: Control<T>;
    errorMessage?: string;
    label: string;
    placeholder: string;
    icon: ReactNode
}


const MultipleSelect = <T extends FieldValues>({ control, name, label, errorMessage, placeholder, icon }: MultipleSelectProps<T>) => {

    const isMobile = useResponsive({ breakpoint: 786 });

    return (

        <ControlledInput
            errorMessage={errorMessage}
            label={label}
            name={name}
            control={control}

            render={({ field }) => (
                <Select

                    mode="multiple"
                    placeholder={placeholder}
                    allowClear
                    prefix={icon}
                    showSearch={
                        !isMobile
                            ? {
                                filterOption: (input, option) => {
                                    const label =
                                        option?.label?.toString().toLowerCase() || "";

                                    const value =
                                        option?.value?.toString().toLowerCase() || "";

                                    return (
                                        label.includes(input.toLowerCase()) ||
                                        value.includes(input.toLowerCase())
                                    );
                                },
                            }
                            : false
                    }
                    onChange={(value) => field.onChange(value)}
                    style={{ width: "100%", textAlign: "right" }}
                    options={issueOptions}
                    value={field.value}
                />
            )}
        />
    )
}

export default MultipleSelect
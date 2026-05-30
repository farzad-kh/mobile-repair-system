
import {
    Control,

    FieldValues,
    Path,

} from "react-hook-form";
import ControlledInput from './ControlledInput';
import { Select } from 'antd';
import { ReactNode } from "react";
import { brandOptions } from "../../constants/select_option";
import { useResponsive } from "../../hook/useResponsive";


interface SingelSelectProps<T extends FieldValues> {
    name: Path<T>;
    control: Control<T>;
    errorMessage?: string;
    label: string;
    placeholder?: string;
    icon: ReactNode
}

const SingelSelect = <T extends FieldValues>({ control, name, errorMessage, label, placeholder, icon }: SingelSelectProps<T>) => {
    const isMobile = useResponsive({ breakpoint: 786 });
    return (
        <ControlledInput
            errorMessage={errorMessage}
            label={label}
            name={name}
            control={control}
            render={({ field }) => (
                <Select
                    virtual={!isMobile ? true : false}
                    prefix={icon}
                    showSearch={
                        !isMobile ? {

                            filterOption: (input, option) => {
                                const label = option?.label?.toString().toLowerCase() || "";
                                const value = option?.value?.toString().toLowerCase() || "";
                                const searchInput = input.toLowerCase();
                                return label.includes(searchInput) || value.includes(searchInput);
                            }
                        } : false
                    }

                    placeholder={placeholder}
                    onChange={(value) => field.onChange(value)}
                    options={brandOptions}
                    style={{ textAlign: "right" }}
                    value={field.value}
                />
            )}
        />
    )
}

export default SingelSelect
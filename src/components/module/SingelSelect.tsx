 
import {
    Control,

    FieldValues,
    Path,

} from "react-hook-form";
import ControlledInput from './ControlledInput';
import { Select } from 'antd';
import { ReactNode } from "react";
import { brandOptions } from "../../constants/select_option";


interface SingelSelectProps<T extends FieldValues> {
    name: Path<T>;
    control: Control<T>;
    errorMessage?: string;
    label: string;
    placeholder?: string;
    icon: ReactNode
}

const SingelSelect = <T extends FieldValues>({ control, name, errorMessage, label, placeholder, icon }: SingelSelectProps<T>) => {
    return (
        <ControlledInput
            errorMessage={errorMessage}
            label={label}
            name={name}
            control={control}
            render={({ field }) => (
                <Select

                    prefix={icon}
                    showSearch={{
                        filterOption: (input, option) => {
                            const label = option?.label?.toString().toLowerCase() || "";
                            const value = option?.value?.toString().toLowerCase() || "";
                            const searchInput = input.toLowerCase();
                            return label.includes(searchInput) || value.includes(searchInput);
                        }

                    }}

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
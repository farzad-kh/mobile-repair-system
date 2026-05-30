import { Form } from "antd";
import {
    Control,
    Controller,
    ControllerRenderProps,

    FieldValues,
    Path,





} from "react-hook-form";
import { ReactElement } from "react";

interface ControlledInputProps<T extends FieldValues> {
    optional?: boolean;
    errorMessage?: string;
    label?: string;
    name: Path<T>;
    control: Control<T>;
    type?: string | number
    render: (
        args: {
            field: ControllerRenderProps<T, Path<T>>;
        } & Record<string, unknown>
    ) => ReactElement;
}

const ControlledInput = <T extends FieldValues>({
    optional,
    errorMessage,
    label,
    name,
    control,
    render,
}: ControlledInputProps<T>) => {
    return (
        <Form.Item
            required={!optional}
 
            validateStatus={errorMessage ? "error" : ""}
            help={errorMessage}
            label={label ? <span>{label}</span> : null}
            style={{ width: "100%", marginBottom: 16 }}
        >
            <Controller
                name={name}
                control={control}
                render={({ field }) => render({ field })}
            />
        </Form.Item>
    );
};

export default ControlledInput;
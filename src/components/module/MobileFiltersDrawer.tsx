import { Button, Select } from "antd";
import DrawerUI from "../UI/DrawerUI";



interface FilterItem<T = any> {
    label: string;
    placeholder?: string;
    value: T;
    onChange: (value: T) => void;
    options: { value: T; label: string }[];
}

interface MobileFiltersDrawerProps {
    open: boolean;
    onClose: () => void;
    title: string;
    filters: FilterItem[];
    onClear: () => void;
    onSubmit: () => void;
}
const MobileFiltersDrawer = ({ open, onClose, title, filters, onClear, onSubmit,
}: MobileFiltersDrawerProps) => {
    return (
        <DrawerUI

            open={open}
            onClose={onClose}
            height={360}
            title={
                <div className="flex justify-between items-center">
                    <span className="text-base font-semibold">
                        {title}
                    </span>
                </div>
            }
            className="rounded-t-2xl"
        >
            <div className="flex flex-col gap-5 pt-2 overflow-hidden">

                {filters.map((filter, index) => (
                    <div
                        key={index}
                        className="flex flex-col gap-2"
                    >
                        <span className="text-sm text-primery-black">
                            {filter.label}
                        </span>

                        <Select
                            placeholder={filter.placeholder}
                            value={filter.value}
                            onChange={filter.onChange}
                            options={filter.options}
                        />
                    </div>
                ))}

                {/* actions */}
                <div className="flex gap-2 mt-2">

                    <Button
                        onClick={onClear}
                        className="w-full"
                    >
                        پاک کردن
                    </Button>

                    <Button
                        type="primary"
                        onClick={onSubmit}
                        className="w-full"
                    >
                        اعمال
                    </Button>

                </div>
            </div>
        </DrawerUI>
    );
};

export default MobileFiltersDrawer;
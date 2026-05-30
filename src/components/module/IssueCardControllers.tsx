import { Input, Select } from "antd";
import { RefObject, useState } from "react";
import { ReportStatus } from "../../helper/index";
 
import { FiSettings } from "react-icons/fi";
import { AnimatePresence } from "motion/react";
import { GoSearch } from "react-icons/go";
import MobileFiltersDrawer from "./MobileFiltersDrawer";
import { useResponsive } from "../../hook/useResponsive";


type Props = {
    refScrollUp: RefObject<HTMLDivElement | null>
    searchVal: string | undefined;
    selectStatusVal: ReportStatus | null;
    setSelectStatusVal: React.Dispatch<React.SetStateAction<ReportStatus | null>>
    setSearchVal: React.Dispatch<React.SetStateAction<string>>
    setSelectDateVal: React.Dispatch<React.SetStateAction<"newest" | "oldest" | null>>
    selectDateVal: "newest" | "oldest" | null;

};

const IssueCardControllers = ({
    refScrollUp,
    searchVal,
    setSearchVal,
    selectStatusVal,
    setSelectStatusVal,
    selectDateVal,
    setSelectDateVal
}: Props) => {
    const [open, setOpen] = useState(false);
    const isMobile = useResponsive({ setOpen, breakpoint: 786 });

    const [tempStatus, setTempStatus] = useState(selectStatusVal)
    const [tempDate, setTempDate] = useState(selectDateVal)

    const dateOption = [


        { value: "newest", label: "جدید ترین" },
        { value: "oldest", label: "قدیمی ترین" },
    ]
    const statusOption = [
        { value: "pending", label: "در انتظار" },
        { value: "repairing", label: "در حال تعمیر" },
        { value: "completed", label: "تکمیل شده" },
    ]


    return (
        <div
            ref={refScrollUp}
            className="my-5 flex  gap-3 md:flex-row md:items-center md:justify-between"
        >
            <Input
                value={searchVal}
                onChange={(e) => setSearchVal(e.target.value)}
                placeholder="جستجو بر اساس نام یا شماره"
                className="h-9! md:max-w-[320px]"
                prefix={<GoSearch />}
                allowClear
            />

            {!isMobile &&
                <div className="flex gap-3 justify-end">
                    <>
                        <Select
                            value={selectStatusVal}
                            onChange={(value) => setSelectStatusVal(value!)}
                            className="h-9 md:w-35"
                            placeholder="وضعیت ها"
                            allowClear
                            options={statusOption}
                        />

                        <Select
                            value={selectDateVal}
                            onChange={(value) => setSelectDateVal(value!)}
                            className="h-9 md:w-35"
                            placeholder="ترتیب نمایش"
                            allowClear
                            options={dateOption}
                        />
                    </>




                </div>
            }

            {/* mobile screens */}
            <button
                onClick={() => setOpen(true)}
                className="hidden items-center justify-center gap-2 px-4 py-2 rounded-full
            text-black border 
            active:scale-95 transition-all duration-200 
            hover:bg-blue-500 hover:text-white max-md:flex"
            >
                <FiSettings className="text-lg" />
                <span className="text-sm font-medium max-sm:hidden">فیلتر</span>
            </button>
            <AnimatePresence>
                {
                    isMobile && open &&

                    <MobileFiltersDrawer
                        open={open}
                        onClose={() => setOpen(false)}
                        title="فیلتر کاربران"
                        filters={[
                            {
                                label: "وضعیت",
                                value: tempStatus,
                                onChange: setTempStatus,
                                options: statusOption,
                                placeholder: "وضعیت ها"
                            },
                            {
                                label: "ترتیب ",
                                value: tempDate,
                                onChange: setTempDate,
                                options: dateOption,
                                placeholder: "ترتیب نمایش",
                            },
                        ]}
                        onClear={() => {
                            setTempStatus(null);
                            setTempDate(null);
                        }}
                        onSubmit={() => {
                            setSelectStatusVal(tempStatus!);
                            setSelectDateVal(tempDate!);
                            setOpen(false);
                        }}
                    />

                }
            </AnimatePresence>
        </div>
    );
};

export default IssueCardControllers;
 
import { useMemo, useState } from 'react'
import { useDebounce } from './useDebounce';
import { RepairFieldType } from '../types/repair';
import { ReportStatus } from '../helper';
 

export const useFilterIssue = ({ repairRequests }: { repairRequests: RepairFieldType[] }) => {
    const [searchVal, setSearchVal] = useState("");
    const [selectStatusVal, setSelectStatusVal] =
        useState<ReportStatus | null>(null);

    const [selectDateVal, setSelectDateVal] = useState<
        "newest" | "oldest" | null
    >(null);

    const debouncedVal = useDebounce(searchVal, 500);

    const filteredRepairData = useMemo(() => {
        let data = [...repairRequests] as RepairFieldType[];

        // search
        if (debouncedVal?.trim()) {
            const search = debouncedVal.toLowerCase().trim();

            data = data.filter(
                (item) =>
                    item.customerName.toLowerCase().includes(search) ||
                    item.phone.includes(search)
            );
        }

        // status
        if (selectStatusVal) {
            data = data.filter((item) => item.status === selectStatusVal);
        }

        // sort
        if (selectDateVal === "newest") {
            data.sort(
                (a, b) =>
                    new Date(b.dateTime as string).getTime() -
                    new Date(a.dateTime as string).getTime()
            );
        }

        if (selectDateVal === "oldest") {
            data.sort(
                (a, b) =>
                    new Date(a.dateTime as string).getTime() -
                    new Date(b.dateTime as string).getTime()
            );
        }

        return data;
    }, [repairRequests, selectStatusVal, debouncedVal, selectDateVal]);


    return {
        searchVal,
        setSearchVal,
        debouncedVal,
        selectStatusVal,
        setSelectStatusVal,

        selectDateVal,
        setSelectDateVal,

        filteredRepairData,
    };

}


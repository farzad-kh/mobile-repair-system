
import { Tag } from "antd";
import { motion } from "motion/react"


import { issue_label, toLocaleStringFa, toPersianNumber } from "../../helper/index";
import { FiPhone } from "react-icons/fi";
import SpeedDial from "../layout/SpeedDial";
import EditButton from "./speed_dial_Ac/EditButton";
 
import DeleteButton from "./speed_dial_Ac/DeleteButton";
import { FiCalendar } from "react-icons/fi";




import { jalaliNumeric } from "../../utility/lib/dayjsjalaliFormat";
import SelectStatus from "./select_status/SelectStatus";
import { RepairFieldType } from "../../types/repair";


interface DataProps {
  data: RepairFieldType
}
const IssueCard = ({ data }: DataProps) => {

  // const repairRequests = useRepairStore(state => state.repairRequests)






  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: { duration: 0.60, delay: 0.3 },
        },
      }}
      exit={{ opacity: 0 }}
    >
      <div className="rounded-2xl border bg-white hover:shadow-sm transition relative overflow-hidden ">

        {/* HEADER */}
        <div className="flex items-start justify-between px-4 py-4 border-b bg-gray-50/40">

          <div>
            <h2 className="text-lg font-bold text-gray-800">
              {data.customerName}
            </h2>

            <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
              <FiCalendar />
              {toPersianNumber(jalaliNumeric(data.dateTime))}
            </div>
          </div>

          <SelectStatus issueStatus={data.status} id={data.id!} />
        </div>

        {/* BODY */}
        <div className="p-4 space-y-4">

          {/* device info */}
          <div className="flex items-center justify-between">
            <div className="text-sm font-medium text-primery-black flex gap-1">

              <h3 className="capitalize"> {data.brand}  </h3>
              -
              <span>{data.model}</span>
            </div>

            <span className="text-sm font-semibold text-emerald-600">
              {toLocaleStringFa(data.price)} تومان
            </span>
          </div>

          {/* phone */}
          <div className="text-sm flex justify-baseline gap-1.5 text-primery-gray">
            <FiPhone className="self-center" />
            <span>
              {toPersianNumber(data.phone)}
            </span>

          </div>

          {/* issue description */}
          <div className="rounded-lg bg-gray-50 p-3 text-sm text-primery-gray leading-relaxed max-sm:max-h-20.5    line-clamp-3">
            {data?.issueDescription ? data.issueDescription : "توضیحی ثبت نشده"}
          </div>

          {/* tags */}
          <div className="flex flex-wrap gap-2">
            {data.mobileIssues.map((issue) => (
              <Tag key={issue} variant="outlined" color="red">
                {issue_label[issue]}
              </Tag>
            ))}
          </div>
        </div>

        {/* FOOTER */}
        <div className="flex justify-end gap-2 p-3 border-t bg-white">
          <SpeedDial
            editButton={<EditButton data={data} />}
            deleteButton={<DeleteButton issueId={data.id!} />}
          />
        </div>
      </div>
    </motion.div>
  );

}

export default IssueCard
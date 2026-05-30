import { issueOptions } from "../constants/select_option";

 

export const toPersianNumber = (num: number | string) => {
  if (num === null || num === undefined || num === "") return "";

  return num.toString().replace(/\d/g, (digit) => "۰۱۲۳۴۵۶۷۸۹"[Number(digit)]);
};
export const toLocaleStringFa = (number: number) => {
  return number.toLocaleString("fa-IR");
};

export type ReportStatus = keyof typeof report_status_map;
export const report_status_map = {
  pending: {
    label: "در انتظار",
    color: "bg-[#db8745]",
   style: "bg-[#fff2e8] text-[#d4380d] border-[#ffbb96]",
 
    // style: "bg-yellow-50 text-yellow-700 border-yellow-200",
  },

  repairing: {
    label: "در حال تعمیر",
    color: "bg-[#9743ceeb]",
      style: "bg-[#f9f0ff] text-[#6026bfe3] border-[#d3adf7]",
  },

  completed: {
    label: "تعمیر شده",
    color: "bg-[#3692e4]",
    style:
      "bg-[rgb(231_246_254))] text-[rgb(45_183_245))] border-[rgb(45_183_245)]",
  },
} as const;

export const issue_label = Object.fromEntries(
  issueOptions.map((item) => [item.value, item.label]),
);

// type statusP = "pending" | "repairing" | "completed";
// export const report_status_map =<T extends object, U extends keyof T> (status:U) => {
//   const map:T = {
//     pending: "در انتظار",
//     repairing: "در حال تعمیر",
//     completed: "تعمیر شده",
//   };

//   return map[status] || status;
// };

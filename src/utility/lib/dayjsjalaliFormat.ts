// import dayjs from "../../utility/dayjsJalaliConfig"

// import "dayjs/locale/fa";
 
 








import dayjs, { Dayjs } from "dayjs"
import "dayjs/locale/fa";
import relativeTime from "dayjs/plugin/relativeTime";
import jalaliday from "jalali-plugin-dayjs";
dayjs.extend(jalaliday);
dayjs.extend(relativeTime);
dayjs.locale("fa");



export const jalaliNumeric = (
  date: string | Date | Dayjs | null
) => {
  if (!date) return "";

  return dayjs(date)
    .calendar("jalali")
    .locale("fa")
    .format("HH:mm - YYYY/M/DD ");
};


export const formattedDateJalali = (  date: string | Date | Dayjs | null) => {
    return dayjs(date)
        .calendar("jalali")
        .locale("fa")
        .format("DD MMMM YYYY -  HH:mm");
}



export const jalaliDate = (  date: string | Date | Dayjs | null) => {
    return dayjs(date)
        .calendar("jalali")
        .locale("fa")
        .format("YYYY/M/DD");
}



 
















// export const formattedDateJalali = (date:Date | string) => {
//     return dayjs(date)
//         .calendar("jalali")
//         .locale("fa")
//         .format("DD MMMM YYYY -  HH:mm");
// }


// export const jalaliNumeric = (date) => {
//     return dayjs(date)
//         .calendar("jalali")
//         .locale("fa")
//         .format("YYYY/M/DD - HH:mm");
// }

// export const jalaliDate = (date) => {
//     return dayjs(date)
//         .calendar("jalali")
//         .locale("fa")
//         .format("YYYY/M/DD");
// }



// export const jalaliNumeric = (date) => {
//     return dayjs(date)
//         .calendar("jalali")
//         .locale("fa")
//         .format("YYYY/M/DD - HH:mm");
// }


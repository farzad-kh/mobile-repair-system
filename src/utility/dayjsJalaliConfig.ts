// utility/dayjsJalaliConfig.ts
import dayjs from "dayjs"
import "dayjs/locale/fa";
import relativeTime from "dayjs/plugin/relativeTime";
import jalaliday from "jalali-plugin-dayjs";
dayjs.extend(jalaliday);
dayjs.extend(relativeTime);
dayjs.locale("fa");
dayjs.calendar("jalali");

 
// override ماه‌ها
const faLocale = dayjs.Ls.fa;

faLocale.months = [
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "آبان",
    "آذر",
    "دی",
    "بهمن",
    "اسفند",
];

faLocale.monthsShort = [
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "آبان",
    "آذر",
    "دی",
    "بهمن",
    "اسفند",
];

export default dayjs;
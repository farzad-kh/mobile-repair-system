// utility/dayjsJalaliConfig.ts

import dayjs from "dayjs";
import jalaliday from "jalaliday";

import "dayjs/locale/fa";

dayjs.extend(jalaliday);

// مهم
dayjs.calendar("jalali");

// مهم
dayjs.locale("fa");

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
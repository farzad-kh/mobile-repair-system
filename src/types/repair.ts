import { Dayjs } from "dayjs";
export interface RepairFieldType {
  id: string | null;
  customerName: string;
  phone: string;
  model: string;
  issueDescription?: string;
  price: number;
  status: "pending" | "repairing" | "completed";
  mobileIssues: string[];
  brand: string | null;
  dateTime: Dayjs | null | string;
}

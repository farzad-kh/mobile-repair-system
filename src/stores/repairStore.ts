 
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { RepairFieldType } from "../types/repair";
import { SelectStatusProps } from "../components/module/select_status/SelectStatus";
 
interface RepairStore {
  repairRequests: RepairFieldType[];
  setIssue: (value: RepairFieldType) => void;
  removeIssue: (value: string) => void;
  setUpdateIssue: (value: RepairFieldType) => void;
  setUpdateStatus: (value: SelectStatusProps) => void;
}

export const useRepairStore = create<RepairStore>()(
  persist(
    (set) => ({
      repairRequests: [],
      setIssue: (value) => {
        set((state) => ({
          repairRequests: [value, ...state.repairRequests],
        }));
      },
      setUpdateIssue: (value) => {
        
        set((state) => {
          const updateIssue = state.repairRequests.map(
            (item: RepairFieldType) =>
              item.id! === value.id ? { ...item, ...value } : { ...item },
          );

          return {
            repairRequests: updateIssue,
          };
        });
      },
      setUpdateStatus: (value) => {
        
        set((state) => {
          const updateStatus = state.repairRequests.map(
            (item: RepairFieldType) =>
              item.id! === value.id!  ? { ...item, status:value.issueStatus } : { ...item },
          );

          return {
            repairRequests: updateStatus,
          };
        });
      },

  //  setUpdateStatus: (value) => {
  //       set((state) => ({
  //         repairRequests: state.repairRequests.map((item) =>
  //           item.id === value.id
  //             ? {
  //                 ...item,
  //                 status: value.issueStatus,
  //               }
  //             : item
  //         ),
  //       }));
  //     },






      removeIssue: (id: string) => {
        set((state) => {
          const issueFilter = state.repairRequests.filter(
            (item) => item.id !== id,
          );

          return {
            repairRequests: issueFilter,
          };
        });
      },
    }),
    {
      name: "mobile-issue", // name of the item in the storage (must be unique)
    },
  ),
);

//   updateIssue: (value) => {
//   set((state) => ({
//     repairRequests: state.repairRequests.map((item) =>
//       item.id === value.id
//         ? { ...item, ...value }
//         : item
//     ),
//   }));
// },

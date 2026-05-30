 
import { create } from "zustand";
import { RepairFieldType } from "../types/repair";
type ModalMode = "create" | "edit";

interface FormModalStore {
  open: boolean;
  mode: ModalMode;
  selectedIssue: RepairFieldType | null;
 
  openCreateModal: () => void;
  openEditModal: (issue: RepairFieldType) => void;
  closeModal: () => void;
}

export const useFormModalStore = create<FormModalStore>((set) => ({
  open: false,
  mode: "create",
  selectedIssue: null,
 
  openCreateModal: () =>
    set({
      open: true,
      mode: "create",
      selectedIssue: null,
   
    }),

  openEditModal: (value) =>
    set({
      open: true,
      mode: "edit",
      selectedIssue: value,
 
    }),

  closeModal: () =>
    set({
      open: false,
      selectedIssue: null,
      
    }),
}));

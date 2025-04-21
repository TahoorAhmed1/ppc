import { create } from "zustand";

export const useFormContact = create((set) => ({
  isOpen: false,


 
  setIsOpen: (isOpen: boolean) => set({ isOpen:isOpen}),
}));

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
import { toast } from "react-toastify";

export const notify = (type: any, message: any) => {
  if (type === "success") {
    return toast.success(message);
  } else {
    return toast.error(message);
  }
};

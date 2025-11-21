import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function createFormData<T extends Record<string, unknown>>(
  data: T,
): FormData {
  const formData = new FormData();
  for (const [key, value] of Object.entries(data)) {
    if (key === null || value === undefined) {
      continue;
    } else if (value instanceof File) {
      formData.set(key, value);
    } else if (Array.isArray(value)) {
      value.forEach((val) => {
        formData.append(key, val);
      });
    } else if (typeof value === "object" && !(value instanceof File)) {
      formData.append(key, JSON.stringify(value));
    } else {
      formData.append(key, String(value));
    }
  }
  return formData;
}

import { clsx, type ClassValue } from "clsx";
import type { RefObject } from "react";
import { twMerge } from "tailwind-merge";
import type { _ZodType } from "zod";

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

interface SuccessResult<T> {
  success: true;
  data: T;
}

interface ErrorResult {
  success: false;
  error: string;
}
export function parseFormData<T>(
  ref: RefObject<HTMLFormElement | null>,
  zodSchema: _ZodType,
): SuccessResult<T> | ErrorResult {
  if (!ref.current) throw new Error("Ref must be a form Element");
  const formData = Object.fromEntries(new FormData(ref.current).entries());
  const result = zodSchema.safeParse(formData);
  if (!result.success) {
    const message = result.error.issues[0].message;
    return { success: false, error: message };
  }
  return { success: true, data: result.data as T };
}

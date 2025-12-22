import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { _ZodType } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function createFormData<T extends Record<string, unknown>>(
  data: T
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

interface Result<T> {
  error?: string;
  data?: T;
}
export function parseSchema<T>(
  formElement: HTMLFormElement,
  zodSchema: _ZodType
): Result<T> {
  const formData = Object.fromEntries(new FormData(formElement).entries());
  const result = zodSchema.safeParse(formData);
  if (!result.success) {
    const message = result.error.issues[0].message;
    return { error: message };
  }
  return { data: result.data as T };
}

export function getError(error: unknown) {
  let errorMessage = "Something unexpected happened";
  if (
    typeof error === "object" &&
    error !== null &&
    "data" in error &&
    error.data !== null
  ) {
    if (typeof error.data === "string") {
      switch (error.data) {
        case "Network Error":
          errorMessage = "Please check your internet connection and try again";
      }
    } else if (
      typeof error.data === "object" &&
      "status" in error &&
      typeof error.status === "number" &&
      error.status >= 400 &&
      error.status <= 599 &&
      "error" in error.data &&
      typeof error.data.error === "string"
    ) {
      errorMessage = error.data.error;
    }
  }

  return errorMessage;
}

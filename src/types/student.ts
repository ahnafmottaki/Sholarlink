import z from "zod";
import { studentProfileSchema } from "@/zod-schema/studentProfileSchema";
import type { ReactNode } from "react";

type StudentCreationType = z.infer<typeof studentProfileSchema>;
type Documents = "passport" | "transcripts" | "photo";
type Student = {
  [key in keyof StudentCreationType]: key extends Documents
    ? string
    : StudentCreationType[key];
} & { _id: string };

type ManageStudentProps = Pick<
  Student,
  | "_id"
  | "firstName"
  | "lastName"
  | "university"
  | "major"
  | "satScore"
  | "gpa"
  | "contactNo"
> & {
  ownedBy?: {
    _id: string;
    name: string;
  };
  createdAt: string;
  updatedAt: string;
  children?: ReactNode;
};

export type { StudentCreationType, Student, ManageStudentProps };

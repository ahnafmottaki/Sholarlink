import z from "zod";
import { studentProfileSchema } from "@/zod-schema/studentProfileSchema";
import type { ReactNode } from "react";

interface Step {
  _id: string;
  showToAgent: string;
  completed: boolean;
  order: number;
}

type StudentCreationType = z.infer<typeof studentProfileSchema>;
type Documents = "passport" | "transcripts" | "photo";
type Student = {
  [key in keyof StudentCreationType]: key extends Documents
    ? string
    : StudentCreationType[key];
} & { _id: string; createdAt: string; updatedAt: string; steps: Step[] };

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
  | "createdAt"
> & {
  ownedBy?: {
    _id: string;
    name: string;
  };
  children?: ReactNode;
};

export type { StudentCreationType, Student, ManageStudentProps };

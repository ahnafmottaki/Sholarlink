import z from "zod";

const studentProfileSchema = z.object({
  firstName: z.string().trim().min(1).max(10),
  lastName: z.string().trim().min(1).max(10),
  email: z.email("email is required"),
  contactNo: z.string().trim().min(1).max(12),
  dateOfBirth: z.string(),
  gpa: z.string().min(1).max(5),
  satScore: z.string(),
  major: z.string().min(1).max(30),
  university: z.string().min(1).max(30),
  passport: z
    .instanceof(File, { message: "document is required" })
    .refine((file) => file.type === "application/pdf", "document must be a PDF")
    .refine(
      (file) => file.size <= 1024 * 1024,
      "passport must be less than 1MB"
    ),
  transcripts: z
    .instanceof(File, { message: "document is required" })
    .refine((file) => file.type === "application/pdf", "document must be a PDF")
    .refine(
      (file) => file.size <= 1024 * 1024 * 2,
      "transcripts must be less than 2MB"
    ),
  photo: z
    .instanceof(File, { message: "document is required" })
    .refine(
      (file) => ["image/png", "image/jpg"].includes(file.type),
      "photo must be a jpg or png"
    )
    .refine((file) => file.size <= 1024 * 1024, "photo must be less than 1MB"),
});

type Student = z.infer<typeof studentProfileSchema>;

export { studentProfileSchema, type Student };

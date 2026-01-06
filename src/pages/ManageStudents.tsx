import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import type { ManageStudentProps } from "@/types/student";
import { type FC } from "react";

const ManageStudent: FC<ManageStudentProps> = (props) => {
  const {
    _id,
    firstName,
    lastName,
    university,
    major,
    satScore,
    gpa,
    contactNo,
    ownedBy,
    createdAt,
    children,
  } = props;

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "success":
        return "success";
      case "rejected":
        return "destructive";
      default:
        return "warning";
    }
  };

  return (
    <>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">{firstName + lastName}</TableCell>
          {ownedBy && <TableCell>{ownedBy}</TableCell>}
          <TableCell>{university}</TableCell>
          <TableCell>{major}</TableCell>
          <TableCell>{satScore}</TableCell>
          <TableCell>{gpa}</TableCell>
          <TableCell>{contactNo}</TableCell>
          <TableCell>{new Date(createdAt).toLocaleDateString()}</TableCell>
          {children}
        </TableRow>
      </TableBody>
    </>
  );
};
export default ManageStudent;

import { TableCell, TableRow } from "@/components/ui/table";
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
  console.log(ownedBy);

  return (
    <>
      <TableRow>
        <TableCell className="font-medium capitalize">
          {firstName + " " + lastName}
        </TableCell>
        {ownedBy && (
          <TableCell className="capitalize">{ownedBy.name}</TableCell>
        )}
        <TableCell>{university}</TableCell>
        <TableCell>{major}</TableCell>
        <TableCell>{satScore}</TableCell>
        <TableCell>{gpa}</TableCell>
        <TableCell>{contactNo}</TableCell>
        <TableCell>{new Date(createdAt).toLocaleString()}</TableCell>
        {children}
      </TableRow>
    </>
  );
};
export default ManageStudent;

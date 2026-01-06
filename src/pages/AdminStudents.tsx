import { useGetStudentsQuery } from "@/api";
import Loader from "@/components/custom/Loader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Table,
  TableBody,
} from "@/components/ui/table";
import { CheckCircle, Download, Eye, XCircle } from "lucide-react";
import ManageStudent from "./ManageStudent";

const AdminStudents = () => {
  const { isSuccess, data, isFetching, isError, error } = useGetStudentsQuery();
  if (isFetching) {
    return (
      <div className="min-h-screen w-full flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  if (isError && error) {
    return <p>Something Unexpected Happened</p>;
  }

  console.log(data?.data);
  const actionCell = (
    <TableCell className="text-right">
      <div className="flex gap-2 justify-end">
        <Button size="sm" variant="outline">
          <Eye className="h-4 w-4 mr-1" />
          View
        </Button>
        <Button size="sm" variant="outline">
          <Download className="h-4 w-4 mr-1" />
          Download
        </Button>

        <Button size="sm" variant="outline" className="text-success">
          <CheckCircle className="h-4 w-4 mr-1" />
          Approve
        </Button>
        <Button size="sm" variant="outline" className="text-destructive">
          <XCircle className="h-4 w-4 mr-1" />
          Reject
        </Button>
      </div>
    </TableCell>
  );

  return (
    <>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Manage Student Profiles</h1>
        <p className="text-muted-foreground">
          Review and manage student applications
        </p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Recent Student Profiles</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Student Name</TableHead>
                <TableHead>Agent</TableHead>
                <TableHead>University</TableHead>
                <TableHead>Major</TableHead>
                <TableHead>SatScore</TableHead>
                <TableHead>Gpa</TableHead>
                <TableHead>contactNo</TableHead>
                <TableHead>createdAt</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {isSuccess &&
                data &&
                data.data.map((student) => (
                  <ManageStudent key={student._id} {...student}>
                    {actionCell}
                  </ManageStudent>
                ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
};

export default AdminStudents;

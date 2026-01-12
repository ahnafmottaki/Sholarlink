import { useGetStudentsQuery } from "@/api/agentApi";
import Loader from "@/components/custom/Loader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import ManageStudent from "./ManageStudent";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import { Link } from "react-router";

const AgentStudents = () => {
  const { isSuccess, data, isFetching, isError, error } = useGetStudentsQuery();
  if (isFetching) {
    return (
      <div className="min-h-screen w-full flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  if (isError && error) {
    return <div>Something Unexpected Happened</div>;
  }

  let content = (
    <div className="min-h-[70vh] w-full flex flex-col justify-center items-center">
      <p>You haven't created any Student Profile</p>
      <Link to={"/agent/createStudent"}>
        <Button variant={"link"}>Create Profile</Button>
      </Link>
    </div>
  );
  const hasStudent = isSuccess && data.data.length > 0;
  if (hasStudent) {
    content = (
      <>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Student Name</TableHead>
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
            {data.data.map((student) => (
              <ManageStudent key={student._id} {...student}>
                <TableCell className="flex justify-end">
                  <Link to={`/agent/students/${student._id}`}>
                    <Button size="sm" variant="outline">
                      <Eye className="h-4 w-4 mr-1" />
                      View
                    </Button>
                  </Link>
                </TableCell>
              </ManageStudent>
            ))}
          </TableBody>
        </Table>
      </>
    );
  }
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
        <CardContent>{content}</CardContent>
      </Card>
    </>
  );
};

export default AgentStudents;

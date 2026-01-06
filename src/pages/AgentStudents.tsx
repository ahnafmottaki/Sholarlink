import { useGetStudentsQuery } from "@/api";
import Loader from "@/components/custom/Loader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Table } from "lucide-react";

const AgentStudents = () => {
  const { isSuccess, data, isFetching } = useGetStudentsQuery();
  if (isFetching) {
    return (
      <div className="min-h-screen w-full flex justify-center items-center">
        <Loader />
      </div>
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
          </Table>
        </CardContent>
      </Card>
    </>
  );
};

export default AgentStudents;

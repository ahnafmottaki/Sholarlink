import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Eye, Download, CheckCircle, XCircle } from "lucide-react";

const ManageStudents = () => {
  const studentProfiles = [
    {
      id: "1",
      name: "Emily Johnson",
      agent: "John Smith",
      university: "Harvard University",
      status: "pending",
      date: "2024-01-20",
    },
    {
      id: "2",
      name: "David Lee",
      agent: "Sarah Johnson",
      university: "Stanford University",
      status: "success",
      date: "2024-01-18",
    },
    {
      id: "3",
      name: "Sophie Chen",
      agent: "Michael Chen",
      university: "MIT",
      status: "pending",
      date: "2024-01-19",
    },
    {
      id: "4",
      name: "James Wilson",
      agent: "John Smith",
      university: "Oxford University",
      status: "rejected",
      date: "2024-01-17",
    },
  ];

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
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {studentProfiles.map((profile) => (
                <TableRow key={profile.id}>
                  <TableCell className="font-medium">{profile.name}</TableCell>
                  <TableCell>{profile.agent}</TableCell>
                  <TableCell>{profile.university}</TableCell>
                  <TableCell>
                    <Badge variant={getStatusVariant(profile.status)}>
                      {profile.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{profile.date}</TableCell>
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
                      {profile.status === "pending" && (
                        <>
                          <Button
                            size="sm"
                            variant="outline"
                            className="text-success"
                          >
                            <CheckCircle className="h-4 w-4 mr-1" />
                            Approve
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="text-destructive"
                          >
                            <XCircle className="h-4 w-4 mr-1" />
                            Reject
                          </Button>
                        </>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
};
export default ManageStudents;

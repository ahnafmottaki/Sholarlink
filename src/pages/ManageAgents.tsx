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
import { Eye } from "lucide-react";
import { useNavigate } from "react-router";
import { useGetAgentsQuery } from "@/api";
import Loader from "@/components/custom/Loader";

const ManageAgents = () => {
  const { data, isSuccess, isFetching } = useGetAgentsQuery();
  const navigate = useNavigate();
  if (isFetching) {
    return (
      <div className="min-h-screen w-full flex justify-center items-center">
        <Loader />
      </div>
    );
  }
  console.log(data);
  return (
    <>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Manage Agents</h1>
        <p className="text-muted-foreground">
          Review and verify agent applications
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Pending Agent Verifications</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>AccountType</TableHead>
                <TableHead>Country</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {isSuccess &&
                data.data.map((agent) => (
                  <TableRow key={agent._id}>
                    <TableCell className="font-medium">{agent.name}</TableCell>
                    <TableCell>{agent.email}</TableCell>
                    <TableCell>{agent.accountType}</TableCell>
                    <TableCell>{agent.country}</TableCell>
                    <TableCell>
                      <Badge variant="warning">{agent.status}</Badge>
                    </TableCell>
                    <TableCell>
                      {new Date(agent.createdAt).toUTCString()}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex gap-2 justify-end">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => navigate(`/admin/agent`)}
                        >
                          <Eye className="h-4 w-4 mr-1" />
                          View Info
                        </Button>
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

export default ManageAgents;

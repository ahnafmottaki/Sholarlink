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

const ManageAgents = () => {
  const navigate = useNavigate();

  const pendingAgents = [
    {
      id: "1",
      name: "John Smith",
      email: "john@example.com",
      country: "USA",
      experience: "5 years",
      status: "pending",
      date: "2024-01-15",
    },
    {
      id: "2",
      name: "Sarah Johnson",
      email: "sarah@example.com",
      country: "UK",
      experience: "3 years",
      status: "pending",
      date: "2024-01-16",
    },
    {
      id: "3",
      name: "Michael Chen",
      email: "michael@example.com",
      country: "Canada",
      experience: "7 years",
      status: "pending",
      date: "2024-01-17",
    },
  ];

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
                <TableHead>Country</TableHead>
                <TableHead>Experience</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pendingAgents.map((agent) => (
                <TableRow key={agent.id}>
                  <TableCell className="font-medium">{agent.name}</TableCell>
                  <TableCell>{agent.email}</TableCell>
                  <TableCell>{agent.country}</TableCell>
                  <TableCell>{agent.experience}</TableCell>
                  <TableCell>
                    <Badge variant="warning">{agent.status}</Badge>
                  </TableCell>
                  <TableCell>{agent.date}</TableCell>
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

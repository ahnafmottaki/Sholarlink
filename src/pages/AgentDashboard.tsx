import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, CheckCircle, Clock, XCircle, Download } from "lucide-react";
import { Link } from "react-router";
import { useGetDashboardQuery } from "@/api/agentApi";

const AgentDashboard = () => {
  const { isFetching } = useGetDashboardQuery();
  if (isFetching) {
    return <div>Loading...</div>;
  }
  const stats = [
    {
      label: "Total Application",
      value: "24",
      icon: Users,
      color: "text-primary",
    },
    {
      label: "Pending Application",
      value: "8",
      icon: Clock,
      color: "text-warning",
    },
    {
      label: "Successful Application",
      value: "14",
      icon: CheckCircle,
      color: "text-success",
    },
    {
      label: "Rejected Application",
      value: "2",
      icon: XCircle,
      color: "text-destructive",
    },
  ];

  const students = [
    {
      name: "Sarah Johnson",
      status: "accepted",
      date: "2025-11-05",
      certificate: true,
    },
    {
      name: "Michael Chen",
      status: "pending",
      date: "2025-11-07",
      certificate: false,
    },
    {
      name: "Emma Williams",
      status: "accepted",
      date: "2025-11-03",
      certificate: true,
    },
    {
      name: "David Kim",
      status: "rejected",
      date: "2025-11-06",
      certificate: false,
    },
    {
      name: "Lisa Anderson",
      status: "pending",
      date: "2025-11-08",
      certificate: false,
    },
  ];

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "accepted":
        return "success";
      case "pending":
        return "warning";
      case "rejected":
        return "destructive";
      default:
        return "default";
    }
  };

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold mb-2">Welcome back, Agent!</h1>
        <p className="text-muted-foreground">
          Here's an overview of your student applications
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid max-[450px]:grid-cols-1 grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="lg:pt-6 pt-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="text-3xl font-bold mt-1">{stat.value}</p>
                </div>
                <stat.icon className={`h-10 w-10 ${stat.color}`} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Students Table */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Student Profiles</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Student Name</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date Submitted</TableHead>
                <TableHead>Certificate</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {students.map((student, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{student.name}</TableCell>
                  <TableCell>
                    <Badge variant={getStatusVariant(student.status)}>
                      {student.status.charAt(0).toUpperCase() +
                        student.status.slice(1)}
                    </Badge>
                  </TableCell>
                  <TableCell>{student.date}</TableCell>
                  <TableCell>
                    {student.certificate ? (
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    ) : (
                      <span className="text-muted-foreground text-sm">N/A</span>
                    )}
                  </TableCell>
                  <TableCell className="text-right">
                    <Link to={"/agent/StudentProfile"}>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </Link>
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

export default AgentDashboard;

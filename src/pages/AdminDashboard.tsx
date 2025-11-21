import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, FileText, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const stats = [
    {
      title: "Total Agents",
      value: "24",
      icon: Users,
      color: "text-primary",
      description: "Active agents in system",
    },
    {
      title: "Pending Verifications",
      value: "5",
      icon: FileText,
      color: "text-warning",
      description: "Awaiting approval",
    },
    {
      title: "Total Students",
      value: "156",
      icon: Users,
      color: "text-success",
      description: "Student profiles created",
    },
    {
      title: "Successful Applications",
      value: "98",
      icon: CheckCircle,
      color: "text-success",
      description: "63% success rate",
    },
  ];

  return (
    <>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back! Here's your overview
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <Card key={stat.title} className=" hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className={`h-5 w-5 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold mb-1">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card
          className="hover:shadow-lg transition-shadow cursor-pointer"
          onClick={() => navigate("/admin/manageAgents")}
        >
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              Manage Agents
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Review and approve agent applications, manage agent profiles and
              permissions.
            </p>
            <Button>View Agents</Button>
          </CardContent>
        </Card>

        <Card
          className="hover:shadow-lg transition-shadow cursor-pointer"
          onClick={() => navigate("/admin/manageStudents")}
        >
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-success" />
              Manage Student Profiles
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Review student applications, approve profiles, and manage
              application status.
            </p>
            <Button>View Students</Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default AdminDashboard;

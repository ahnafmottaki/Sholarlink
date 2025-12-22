import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Download,
  CheckCircle,
  XCircle,
  FileText,
  User,
  Mail,
  MapPin,
  Briefcase,
} from "lucide-react";
import { useNavigate, useParams } from "react-router";
import { useGetAgentQuery } from "@/api";
import Loader from "@/components/custom/Loader";
import { getError } from "@/lib/utils";

interface ViewAgentProp {
  isAdmin?: boolean;
}

const ViewAgent = ({ isAdmin }: ViewAgentProp) => {
  const navigate = useNavigate();
  const params = useParams<{ id: string }>();
  if (!params.id) {
    throw new Error("invalid id");
  }
  const { isFetching, data, isError, error, isSuccess } = useGetAgentQuery({
    id: params.id,
  });
  if (isFetching) {
    return (
      <div className="min-h-screen w-full flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  if (isError && error) {
    return <div>{getError(error)}</div>;
  }
  if (isSuccess && data) {
    console.log(data);
  }
  const agentId = "133435322";
  // Mock data - replace with actual API call
  const agentData = {
    id: agentId,
    name: "John Smith",
    email: "john@example.com",
    phone: "+1 234 567 8900",
    country: "USA",
    experience: "5 years",
    status: "pending",
    submittedDate: "2024-01-15",
    documents: [
      { name: "ID Document", url: "#", type: "pdf" },
      { name: "Experience Certificate", url: "#", type: "pdf" },
      { name: "Education Certificate", url: "#", type: "pdf" },
    ],
    bio: "Experienced education consultant with a proven track record of helping students gain admission to top universities. Specialized in US and UK university applications.",
  };

  return (
    <>
      <Button
        variant="link"
        className="mb-6"
        onClick={() => navigate("/admin/manageAgents")}
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Manage Agents
      </Button>

      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-2">Agent Application</h1>
            <p className="text-muted-foreground">
              Review agent information and documents
            </p>
          </div>
          <Badge variant="warning" className="text-lg px-4 py-2">
            {agentData.status}
          </Badge>
        </div>
      </div>

      <div className="grid gap-6 mb-6">
        {/* Personal Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              Personal Information
            </CardTitle>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-muted-foreground">
                Full Name
              </label>
              <p className="text-lg font-semibold mt-1">{agentData.name}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">
                Email
              </label>
              <p className="text-lg mt-1 flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                {agentData.email}
              </p>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">
                Phone
              </label>
              <p className="text-lg mt-1">{agentData.phone}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">
                Country
              </label>
              <p className="text-lg mt-1 flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                {agentData.country}
              </p>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">
                Experience
              </label>
              <p className="text-lg mt-1 flex items-center gap-2">
                <Briefcase className="h-4 w-4 text-primary" />
                {agentData.experience}
              </p>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">
                Submitted Date
              </label>
              <p className="text-lg mt-1">{agentData.submittedDate}</p>
            </div>
          </CardContent>
        </Card>

        {/* Bio */}
        <Card>
          <CardHeader>
            <CardTitle>Bio / Background</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-foreground leading-relaxed">{agentData.bio}</p>
          </CardContent>
        </Card>

        {/* Documents */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Submitted Documents
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {agentData.documents.map((doc, index) => (
                <div
                  key={index}
                  className="border rounded-lg p-4 hover:border-primary transition-colors"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium truncate">{doc.name}</p>
                      <p className="text-sm text-muted-foreground uppercase">
                        {doc.type}
                      </p>
                    </div>
                  </div>
                  <Button className="w-full" variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Action Buttons */}
      {isAdmin && (
        <div className="flex gap-4 justify-end">
          <Button
            size="lg"
            variant="outline"
            className="text-destructive hover:text-destructive"
            onClick={() => {
              // Handle rejection
              console.log("Rejecting agent:", agentId);
            }}
          >
            <XCircle className="h-5 w-5 mr-2" />
            Reject
          </Button>
          <Button
            size="lg"
            className="bg-success hover:bg-success/90"
            onClick={() => {
              // Handle approval
              console.log("Approving agent:", agentId);
            }}
          >
            <CheckCircle className="h-5 w-5 mr-2" />
            Approve
          </Button>
        </div>
      )}
    </>
  );
};

export default ViewAgent;

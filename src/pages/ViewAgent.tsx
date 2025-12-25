import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, FileText, User, Mail, MapPin } from "lucide-react";
import { getVariant } from "./ManageAgents";
import GoTo from "@/components/custom/GoTo";
import type { FC, ReactNode } from "react";
import type { GetAgent } from "@/types/admin-response";
interface ViewAgentProps {
  children: ReactNode;
  agentData: GetAgent;
}
const ViewAgent: FC<ViewAgentProps> = ({ children, agentData }) => {
  return (
    <>
      <GoTo path="/admin/manageAgents">Back to Manage Agents</GoTo>

      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div>
              <h1 className="text-4xl font-bold mb-2">Agent Application</h1>
              <p className="text-muted-foreground">
                Review agent information and documents
              </p>
            </div>
            <Badge
              variant={getVariant(agentData.status)}
              className="text-lg px-4 py-2"
            >
              {agentData.status}
            </Badge>
          </div>

          {children}
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
              <p className="text-lg font-semibold mt-1 capitalize">
                {agentData.name}
              </p>
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
              <p className="text-lg mt-1">{agentData.contactNo}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">
                Country
              </label>
              <p className="text-lg mt-1 flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                {agentData.country.name.common}
              </p>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">
                Submitted Date
              </label>
              <p className="text-lg mt-1">
                {new Date(agentData.createdAt).toLocaleDateString()}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Bio */}
        {/* <Card>
          <CardHeader>
            <CardTitle>Bio / Background</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-foreground leading-relaxed">{agentData.bio}</p>
          </CardContent>
        </Card> */}

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
              <div className="border rounded-lg p-4 hover:border-primary transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium truncate capitalize">
                      {agentData.accountType} Agent
                    </p>
                    <p className="text-sm text-muted-foreground capitalize">
                      {agentData.documentType.split("_").join(" ")}
                    </p>
                  </div>
                </div>
                <a href={agentData.documentUrl} target="_blank">
                  <Button className="w-full" variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    view
                  </Button>
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Action Buttons */}
    </>
  );
};

export default ViewAgent;

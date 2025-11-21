import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Download,
  FileText,
  User,
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  Calendar,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

const StudentProfile = () => {
  // Mock student data
  const student = {
    name: "John Doe",
    email: "john.doe@email.com",
    phone: "+1 234 567 8900",
    dateOfBirth: "1998-05-15",
    nationality: "United States",
    address: "123 Main Street, New York, NY 10001",
    university: "Harvard University",
    course: "Computer Science",
    intake: "Fall 2024",
    status: "Pending",
    submittedDate: "2024-01-15",
    documents: [
      {
        name: "Passport",
        type: "PDF",
        size: "2.5 MB",
        uploadDate: "2024-01-10",
      },
      {
        name: "Academic Transcripts",
        type: "PDF",
        size: "1.8 MB",
        uploadDate: "2024-01-12",
      },
      {
        name: "Statement of Purpose",
        type: "PDF",
        size: "890 KB",
        uploadDate: "2024-01-14",
      },
      {
        name: "Recommendation Letter 1",
        type: "PDF",
        size: "1.2 MB",
        uploadDate: "2024-01-14",
      },
      {
        name: "Recommendation Letter 2",
        type: "PDF",
        size: "1.1 MB",
        uploadDate: "2024-01-15",
      },
      {
        name: "English Proficiency Test",
        type: "PDF",
        size: "750 KB",
        uploadDate: "2024-01-15",
      },
    ],
  };

  const getStatusVariant = (status: string) => {
    switch (status.toLowerCase()) {
      case "approved":
        return "success";
      case "rejected":
        return "destructive";
      default:
        return "warning";
    }
  };

  const handleDownload = (documentName: string) => {
    console.log("Downloading:", documentName);
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Student Profile</h1>
          <p className="text-muted-foreground mt-1">
            View complete student information and documents
          </p>
        </div>
        <Badge
          variant={getStatusVariant(student.status)}
          className="text-sm px-4 py-2"
        >
          {student.status}
        </Badge>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Personal Information */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5 text-primary" />
              Personal Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Full Name</p>
                <p className="font-medium">{student.name}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Date of Birth</p>
                <p className="font-medium">{student.dateOfBirth}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  {student.email}
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="font-medium flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  {student.phone}
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Nationality</p>
                <p className="font-medium">{student.nationality}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Submitted On</p>
                <p className="font-medium flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  {student.submittedDate}
                </p>
              </div>
            </div>
            <Separator />
            <div>
              <p className="text-sm text-muted-foreground">Address</p>
              <p className="font-medium flex items-center gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                {student.address}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Academic Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-primary" />
              Academic Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground">University</p>
              <p className="font-medium">{student.university}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Course</p>
              <p className="font-medium">{student.course}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Intake</p>
              <p className="font-medium">{student.intake}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Documents Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-primary" />
            Submitted Documents
          </CardTitle>
          <CardDescription>
            All documents submitted by the student
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {student.documents.map((doc, index) => (
              <Card
                key={index}
                className="border-2 hover:border-primary/50 transition-colors"
              >
                <CardContent className="p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <FileText className="h-5 w-5 text-primary shrink-0" />
                        <p className="font-medium text-sm truncate">
                          {doc.name}
                        </p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs text-muted-foreground">
                          Type: {doc.type}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Size: {doc.size}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Uploaded: {doc.uploadDate}
                        </p>
                      </div>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full mt-3"
                    onClick={() => handleDownload(doc.name)}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StudentProfile;

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
  FileText,
  User,
  GraduationCap,
  Mail,
  Phone,
  Calendar,
  View,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import type { FC } from "react";
import type { Student } from "@/types/student";

const StudentProfile: FC<Student> = (student) => {
  return (
    <>
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
                <p className="font-medium capitalize">
                  {student.firstName + " " + student.lastName}
                </p>
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
                  {student.contactNo}
                </p>
              </div>
              {/* <div>
                <p className="text-sm text-muted-foreground">Nationality</p>
                <p className="font-medium">{student.nationality}</p>
              </div> */}
              <div>
                <p className="text-sm text-muted-foreground">Submitted On</p>
                <p className="font-medium flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  {new Date(student.createdAt).toLocaleString()}
                </p>
              </div>
            </div>
            <Separator />
            {/* <div>
              <p className="text-sm text-muted-foreground">Address</p>
              <p className="font-medium flex items-center gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                {student.address}
              </p>
            </div> */}
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
              <p className="text-sm text-muted-foreground">satScore</p>
              <p className="font-medium">{student.satScore}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Gpa</p>
              <p className="font-medium">{student.gpa}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Major</p>
              <p className="font-medium">{student.major}</p>
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
            {["passport", "transcripts", "photo"].map((docName) => (
              <Card
                key={docName}
                className="border-2 hover:border-primary/50 transition-colors"
              >
                <CardContent className="p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <FileText className="h-5 w-5 text-primary shrink-0" />
                        <p className="font-medium text-sm truncate">
                          {docName}
                        </p>
                      </div>
                    </div>
                  </div>
                  <a href={student[docName as keyof Student]} target="_blank">
                    <Button
                      size="sm"
                      type="button"
                      variant="outline"
                      className="w-full mt-3"
                    >
                      <View className="h-4 w-4 mr-2" />
                      View
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default StudentProfile;

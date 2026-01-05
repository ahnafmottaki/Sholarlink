import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import DropFile from "@/components/custom/DropFile";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";
import { createFormData, parseSchema } from "@/lib/utils";
import {
  studentProfileSchema,
  type Student,
} from "@/zod-schema/studentProfileSchema";
import { toast } from "sonner";
import { useCreateProfileMutation } from "@/api";
import { Navigate } from "react-router";

const TABS = ["personal", "academic", "documents"] as const;
type Tabs = (typeof TABS)[number];

const CreateStudent = () => {
  const [activeTab, setActiveTab] = useState<Tabs>("personal");

  const [createStudent, { isSuccess, data, isLoading, isError, error }] =
    useCreateProfileMutation();
  if (isSuccess) {
    toast.success(data.message);
    return <Navigate to={"/agent/students"}></Navigate>;
  }

  if (isError) {
    toast.error(
      (error as any)?.response?.message || "Something unexpected happened"
    );
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = parseSchema<Student>(e.currentTarget, studentProfileSchema);
    if (result.error) {
      toast.error(result.error);
      return;
    }
    const formData = createFormData(result.data!);
    createStudent(formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="max-w-4xl w-full space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Create Student Profile</h1>
          <p className="text-muted-foreground">
            Fill in all required information to create a new student application
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Student Information</CardTitle>
            <CardDescription>
              Complete all sections to submit the profile
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <section>
                <div className="grid w-full grid-cols-3 mb-4">
                  {TABS.map((t) => (
                    <Button
                      type="button"
                      className="capitalize"
                      onClick={() => setActiveTab(t)}
                      variant={activeTab === t ? "default" : "outline"}
                      key={t}
                    >
                      {t}
                    </Button>
                  ))}
                </div>

                <section
                  className={`space-y-8  ${
                    activeTab === "personal" ? "block" : "hidden"
                  }`}
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        placeholder="John"
                        defaultValue={"john"}
                      />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        placeholder="Doe"
                        defaultValue={"doe"}
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="john.doe@example.com"
                      defaultValue="john.doe@example.com"
                    />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="contactNo">Phone Number</Label>
                    <Input
                      id="contactNo"
                      type="tel"
                      name="contactNo"
                      placeholder="+1 (555) 000-0000"
                      defaultValue={"01329553511"}
                    />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="dob">Date of Birth</Label>
                    <Input id="dob" type="date" name="dateOfBirth" />
                  </div>
                </section>

                <section
                  className={`space-y-8  ${
                    activeTab === "academic" ? "block" : "hidden"
                  }`}
                >
                  <div className="space-y-3">
                    <Label htmlFor="gpa">GPA</Label>
                    <Input
                      id="gpa"
                      name="gpa"
                      type="number"
                      step="0.01"
                      placeholder="3.8"
                      defaultValue={"4.5"}
                    />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="sat">SAT Score (Optional)</Label>
                    <Input
                      id="sat"
                      name="satScore"
                      type="number"
                      placeholder="1450"
                      defaultValue="1450"
                    />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="major">Intended Major</Label>
                    <Input
                      id="major"
                      name="major"
                      placeholder="Computer Science"
                      defaultValue="computerScience"
                    />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="university">Target University</Label>
                    <Input
                      id="university"
                      name="university"
                      placeholder="Harvard University"
                      defaultValue={"harvard-university"}
                    />
                  </div>
                </section>

                <section
                  className={`space-y-8  ${
                    activeTab === "documents" ? "block" : "hidden"
                  }`}
                >
                  <div className="space-y-3">
                    <Label>Passport Copy</Label>
                    <DropFile
                      name="passport"
                      fnWithFile={console.log}
                      accept="application/pdf"
                    />
                  </div>
                  <div className="space-y-3">
                    <Label>Academic Transcripts</Label>
                    <DropFile
                      name="transcripts"
                      fnWithFile={console.log}
                      accept="application/pdf"
                    />
                  </div>
                  <div className="space-y-3">
                    <Label>Student Photo</Label>
                    <DropFile
                      name="photo"
                      fnWithFile={console.log}
                      accept="image/png, image/jpg"
                    />
                  </div>
                </section>
              </section>

              <div className="mt-6 flex gap-4">
                <Button
                  disabled={activeTab === "personal"}
                  type="button"
                  className={`bg-accent text-accent-foreground hover:bg-accent/70 hover:text-accent-foreground/70 disabled:bg-secondary disabled:text-secondary-foreground`}
                  onClick={() => {
                    if (activeTab === "documents") {
                      setActiveTab("academic");
                    } else {
                      setActiveTab("personal");
                    }
                  }}
                >
                  <ArrowLeftCircle />
                </Button>
                <Button
                  disabled={activeTab === "documents"}
                  className={`bg-accent text-accent-foreground hover:bg-accent/70 hover:text-accent-foreground/70 disabled:bg-secondary disabled:text-secondary-foreground`}
                  type="button"
                  onClick={() => {
                    if (activeTab === "personal") {
                      setActiveTab("academic");
                    } else {
                      setActiveTab("documents");
                    }
                  }}
                >
                  <ArrowRightCircle />
                </Button>
                <Button
                  disabled={activeTab !== "documents" || isLoading}
                  className="ml-auto"
                  type="submit"
                >
                  Create Profile
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CreateStudent;

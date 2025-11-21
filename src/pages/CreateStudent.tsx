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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DropFile from "@/components/custom/DropFile";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";

const CreateStudent = () => {
  const [activeTab, setActiveTab] = useState("personal");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(e.target);
    e.preventDefault();
    const studentProfile = Object.fromEntries(
      new FormData(e.currentTarget).entries()
    );
    console.log(studentProfile);
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
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-3 mb-4">
                  <TabsTrigger value="personal">Personal</TabsTrigger>
                  <TabsTrigger value="academic">Academic</TabsTrigger>
                  <TabsTrigger value="documents">Documents</TabsTrigger>
                </TabsList>

                <TabsContent value="personal" className="space-y-8 ">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        placeholder="John"
                        required
                      />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        placeholder="Doe"
                        required
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
                      required
                    />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      name="phone"
                      placeholder="+1 (555) 000-0000"
                      required
                    />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="dob">Date of Birth</Label>
                    <Input id="dob" name="dob" type="date" required />
                  </div>
                </TabsContent>

                <TabsContent value="academic" className="space-y-8">
                  <div className="space-y-3">
                    <Label htmlFor="gpa">GPA</Label>
                    <Input
                      id="gpa"
                      name="gpa"
                      type="number"
                      step="0.01"
                      placeholder="3.8"
                      required
                    />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="sat">SAT Score (Optional)</Label>
                    <Input
                      id="sat"
                      name="sat"
                      type="number"
                      placeholder="1450"
                    />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="major">Intended Major</Label>
                    <Input
                      id="major"
                      name="major"
                      placeholder="Computer Science"
                      required
                    />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="university">Target University</Label>
                    <Input
                      id="university"
                      name="university"
                      placeholder="Harvard University"
                      required
                    />
                  </div>
                </TabsContent>

                <TabsContent value="documents" className="space-y-8">
                  <div className="space-y-3">
                    <Label>Passport Copy</Label>
                    <DropFile name="passport" fnWithFile={console.log} />
                  </div>
                  <div className="space-y-3">
                    <Label>Academic Transcripts</Label>
                    <DropFile name="transcripts" fnWithFile={console.log} />
                  </div>
                  <div className="space-y-3">
                    <Label>Student Photo</Label>
                    <DropFile name="photo" fnWithFile={console.log} />
                  </div>
                </TabsContent>
              </Tabs>

              <div className="mt-6 flex gap-4">
                <Button
                  disabled={activeTab === "personal"}
                  type="button"
                  className={`bg-accent text-accent-foreground hover:bg-accent/70 hover:text-accent-foreground/70 disabled:bg-secondary disabled:text-secondary-foreground`}
                  onClick={() => {
                    const tabs = ["personal", "academic", "documents"];
                    const currentIndex = tabs.indexOf(activeTab);
                    setActiveTab(tabs[currentIndex - 1]);
                  }}
                >
                  <ArrowLeftCircle />
                </Button>
                <Button
                  disabled={activeTab === "documents"}
                  className={`bg-accent text-accent-foreground hover:bg-accent/70 hover:text-accent-foreground/70 disabled:bg-secondary disabled:text-secondary-foreground`}
                  type="button"
                  onClick={() => {
                    const tabs = ["personal", "academic", "documents"];
                    const currentIndex = tabs.indexOf(activeTab);
                    setActiveTab(tabs[currentIndex + 1]);
                  }}
                >
                  <ArrowRightCircle />
                </Button>
                <Button
                  disabled={activeTab !== "documents"}
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

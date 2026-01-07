import { useGetStudentQuery } from "@/api";
import Loader from "@/components/custom/Loader";
import { Badge } from "@/components/ui/badge";
import { useParams } from "react-router";
import StudentProfile from "./StudentProfile";
const AgentStudent = () => {
  const params = useParams<{ id: string }>();
  if (!params?.id) {
    throw new Error("Invalid student id");
  }

  const { isFetching, isError, error, data } = useGetStudentQuery(params.id);
  if (isFetching) {
    return (
      <div className="min-h-screen w-full flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  if (isError && error) {
    return <p>Something Unexpected Happened</p>;
  }
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

  return (
    <>
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
            variant={getStatusVariant("pending")}
            className="text-sm px-4 py-2"
          >
            pending
          </Badge>
        </div>
        {data && <StudentProfile {...data.data} />}
      </div>
    </>
  );
};

export default AgentStudent;

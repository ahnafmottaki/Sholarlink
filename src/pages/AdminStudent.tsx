import { Badge } from "@/components/ui/badge";
import StudentProfile from "./StudentProfile";
import { useParams } from "react-router";
import { useGetAdminStudentQuery } from "@/api";
import Loader from "@/components/custom/Loader";

const AdminStudent = () => {
  const params = useParams<{ id: string }>();
  if (!params.id) {
    throw new Error("Invalid Student Id");
  }
  const { isFetching, isError, error, data } = useGetAdminStudentQuery(
    params.id
  );
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
          <Badge variant={"pending"} className="text-sm px-4 py-2">
            pending
          </Badge>
        </div>
        {data && <StudentProfile {...data.data} />}
      </div>
    </>
  );
};

export default AdminStudent;

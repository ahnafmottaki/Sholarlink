import { useParams } from "react-router";
import ViewAgent from "./ViewAgent";
import { useGetAgentQuery } from "@/api";
import Loader from "@/components/custom/Loader";
import { getError } from "@/lib/utils";
import ActionButton from "@/components/custom/Action";
import { CheckCircle, XCircle } from "lucide-react";

const AdminAgent = () => {
  const params = useParams<{ id: string }>();
  if (!params.id) {
    throw new Error("invalid id");
  }

  const { isFetching, data, isError, error, isSuccess } = useGetAgentQuery(
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
    return <div>Error happened</div>;
  }

  const agentData = data!.data;

  const deleteHandler = () => {
    console.log("deleting agent");
  };

  const rejectHandler = () => {
    // Handle rejection
    console.log("Rejecting agent:", agentData._id);
  };

  const approveHandler = () => {
    // Handle approval
    console.log("Approving agent:", agentData._id);
  };

  if (!isSuccess && !data && isError && error) {
    console.log(error);
    return <div>{getError(error)}</div>;
  }
  return (
    <>
      <ViewAgent agentData={agentData}>
        {agentData.status === "approved" && (
          <ActionButton
            className="text-destructive hover:text-destructive"
            icon={<XCircle className="h-5 w-5 mr-2" />}
            onClick={deleteHandler}
          >
            Delete
          </ActionButton>
        )}

        {agentData.status === "pending" && (
          <div className="flex gap-4 justify-end">
            <ActionButton
              className="text-destructive hover:text-destructive"
              icon={<XCircle className="h-5 w-5 mr-2" />}
              onClick={rejectHandler}
            >
              Reject
            </ActionButton>
            <ActionButton
              className=" text-green-500 hover:text-green-400"
              icon={<CheckCircle className="h-5 w-5 mr-2" />}
              onClick={approveHandler}
            >
              Approve
            </ActionButton>
          </div>
        )}
      </ViewAgent>
    </>
  );
};

export default AdminAgent;

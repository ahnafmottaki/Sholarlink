import { ArrowLeft } from "lucide-react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router";
import type { FC, ReactNode } from "react";
interface GoToProps {
  children: ReactNode;
  path: string;
}
const GoTo: FC<GoToProps> = ({ path, children }) => {
  const navigate = useNavigate();
  return (
    <Button variant="link" className="mb-6" onClick={() => navigate(path)}>
      <ArrowLeft className="h-4 w-4 mr-2" />
      {children}
    </Button>
  );
};

export default GoTo;

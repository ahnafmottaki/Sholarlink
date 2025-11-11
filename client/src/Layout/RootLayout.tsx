import Layout from "@/components/custom/Layout";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

export default RootLayout;

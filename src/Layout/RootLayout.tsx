import Layout from "@/components/custom/Layout";
import { Toaster } from "@/components/ui/sonner";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <>
      <Layout>
        <Outlet />
      </Layout>
      <Toaster duration={3000} position="top-center" />
    </>
  );
};

export default RootLayout;
